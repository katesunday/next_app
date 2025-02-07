'use server';

import { MealType } from '@/initdb';
import { getFormDataFile, getFormDataString } from '@/lib/helpers';
import { saveMeal } from '@/lib/meals';

export async function shareMeal(formData: FormData) {
  const meal: Record<keyof MealType, string | File | null> = {
    title: getFormDataString(formData, 'title'),
    summary: getFormDataString(formData, 'summary'),
    instructions: getFormDataString(formData, 'instructions'),
    image: getFormDataFile(formData, 'image'),
    creator: getFormDataString(formData, 'name'),
    creator_email: getFormDataString(formData, 'email'),
    slug: null,
  };

  await saveMeal(meal as MealType);
}
