import React from 'react';
import Image from 'next/image';

function MealDetailPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  return (
    <>
      <header className="m-auto flex max-w-[80rem] gap-12 px-4 py-8">
        <div className="relative h-80 w-96">
          <Image fill className="rounded-md object-cover shadow" />
        </div>
        <div className="max-w-[40rem] pb-0 pl-4 pr-4 pt-2 text-neutral">
          <p className="m-0 font-primary text-2xl uppercase shadow">TITLE</p>
          <p className="text-beige text-xl italic">
            by{' '}
            <a
              href={`mailto:${''}`}
              className="bg-clip-text bg-gradient-link hover:bg-gradient-link"
            ></a>
          </p>
          <p className="text-xl">SUmmary</p>
        </div>
      </header>
      <main></main>
    </>
  );
}

export default MealDetailPage;
