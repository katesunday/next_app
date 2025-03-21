'use server';

import { MealType } from '@/initdb';
import { getFormDataFile, getFormDataString } from '@/lib/helpers';
import { saveMeal } from '@/lib/meals';
import { revalidatePath } from 'next/cache';

function isInvalidText(text: string | null) {
  return !text || text.trim() === '';
}
export async function shareMeal(
  prevState: { message: string } | undefined,
  formData: FormData,
) {
  debugger;
  const meal: {
    [K in keyof MealType]: K extends 'image'
      ? File | string | null
      : string | null;
  } = {
    title: getFormDataString(formData, 'title'),
    summary: getFormDataString(formData, 'summary'),
    instructions: getFormDataString(formData, 'instructions'),
    image: getFormDataFile(formData, 'image'),
    creator: getFormDataString(formData, 'name'),
    creator_email: getFormDataString(formData, 'email'),
    slug: null,
  };
  console.log(meal);
  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email?.toString().includes('@') ||
    !meal.image ||
    (meal.image instanceof File && meal.image.size === 0)
  ) {
    return {
      message: 'Invalid input',
    };
  } else {
    await saveMeal(meal as MealType);
    revalidatePath('/meals');
  }
}
