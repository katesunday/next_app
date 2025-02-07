import sql from 'better-sqlite3';
import { MealType } from '@/initdb';
import slugify from 'slugify';
import xss from 'xss';
import * as fs from 'node:fs';
import { redirect } from 'next/navigation';

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

  if (meal.image && typeof meal.image !== 'string') {
    const extension = meal.image.name.split('.').pop();
    const fileName = `${meal.slug}.${extension}`;

    const stream = fs.createWriteStream(`public/images/${fileName}`);
    const bufferedImage = await meal.image.arrayBuffer();
    stream.write(Buffer.from(bufferedImage), (error) => {
      if (error) {
        throw new Error('Saving image failed.');
      }
    });
    meal.image = `/images/${fileName}`;
    db.prepare(
      `INSERT INTO meals (title, summary, instructions, creator, creator_email, image, slug) VALUES (   
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug) `,
    ).run(meal);

    redirect('/meals');
  }
}
