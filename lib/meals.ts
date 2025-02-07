import sql from 'better-sqlite3';
import { MealType } from '@/initdb';
import slugify from 'slugify';

const db = sql('meals.db');

export default async function getMeals(): Promise<MealType[]> {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  return db.prepare('SELECT * FROM meals').all() as MealType[];
}

export async function getMeal(slug: string): Promise<MealType> {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug) as MealType;
}

export async function saveMeal(meal: MealType): Promise<void> {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  const slug = slugify(meal.title);
}
