import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MealType } from '@/initdb';

function MealItem({ title, slug, image, summary, creator }: MealType) {
  return (
    <article className="flex h-full flex-col justify-between overflow-hidden rounded-md font-primary bg-meal-item">
      <header>
        <div className="relative h-60 object-cover">
          <Image src={image} alt={title} fill />
        </div>
        <div className="pb-0 pl-4 pr-4 pt-2">
          <h2 className="m-0 font-primary text-xl">{title}</h2>
          <p className="text-lg italic text-beige">by {creator}</p>
        </div>
      </header>
      <div className="flex h-full flex-col justify-between">
        <p className="pb-0 pl-4 pr-4 pt-4">{summary}</p>
        <div className="align-right p-4">
          <Link
            className="mt-4 inline-block rounded-md px-4 py-2 font-bold text-white no-underline bg-gradient-link hover:bg-gradient-link"
            href={`/meals/${slug}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}

export default MealItem;
