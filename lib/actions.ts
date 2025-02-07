'use server';

import { MealType } from '@/initdb';
import { getFormDataFile, getFormDataString } from '@/lib/helpers';

export async function shareMeal(formData: FormData) {
  const meal: Record<keyof Omit<MealType, 'slug'>, string | File | null> = {
    title: getFormDataString(formData, 'title'),
    summary: getFormDataString(formData, 'summary'),
    instructions: getFormDataString(formData, 'instructions'),
    image: getFormDataFile(formData, 'image'),
    creator: getFormDataString(formData, 'name'),
    creator_email: getFormDataString(formData, 'email'),
  };

  console.log(meal);
}
