import React from 'react';
import Link from 'next/link';

function MealsPage() {
  return (
    <>
      <header className="mx-auto my-16 flex w-[90%] max-w-[75rem] flex-col gap-4">
        <p className="font-primary text-2xl text-neutral">
          Delicious meals, created{' '}
          <span className="text-amber-500">by you.</span>
        </p>
        <p className="font-primary text-neutral">
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <Link
          href="/meals/share"
          className="inline-block w-fit rounded-md p-2 text-lg font-bold bg-gradient-link hover:bg-gradient-link"
        >
          Share your favorite recipe!
        </Link>
      </header>
    </>
  );
}

export default MealsPage;
