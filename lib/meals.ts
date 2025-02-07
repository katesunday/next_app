import sql from 'better-sqlite3';
import { MealType } from '@/initdb';
import slugify from 'slugify';
import xss from 'xss';

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
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.split('.').pop();
  const 
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
}
