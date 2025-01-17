import React from 'react';
import Image from 'next/image';
import { getMeal } from '@/lib/meals';
import { notFound } from 'next/navigation';

type MealDetailProps = {
  params: {
    slug: string;
  };
};

async function MealDetailPage({ params }: MealDetailProps) {
  const meal = await getMeal(params.slug);
  if (!meal) {
    notFound();
  }
  return (
    <>
      <header className="m-auto flex max-w-[80rem] gap-12 px-4 py-8">
        <div className="relative h-80 w-96">
          <Image
            fill
            className="rounded-md object-cover shadow"
            src={meal.image}
            alt={meal.title}
          />
        </div>
        <div className="max-w-[40rem] pb-0 pl-4 pr-4 pt-2 text-neutral">
          <p className="m-0 font-primary text-2xl uppercase shadow">
            {meal.title}
          </p>
          <p className="text-xl italic text-neutral">
            by{' '}
            <a
              href={`mailto:${meal.creator_email}`}
              className="rounded-md bg-clip-text px-2 bg-gradient-link hover:bg-gradient-link"
            >
              {meal.creator}
            </a>
          </p>
          <p className="text-xl">{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className="bg-dark_beige mx-auto my-8 max-w-[60rem] rounded-md p-8 text-xl text-black"
          dangerouslySetInnerHTML={{
            __html: `${meal.instructions.replace(/\n/g, '<br />')}`,
          }}
        ></p>
      </main>
    </>
  );
}

export default MealDetailPage;
