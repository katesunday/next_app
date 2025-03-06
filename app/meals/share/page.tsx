'use client';
import React, { useActionState } from 'react';
import ImagePicker from '@/components/meals/ImagePicker';
import { shareMeal } from '@/lib/actions';
import MealsFormSubmit from '@/components/meals/MealsFormSubmit';

function ShareMealsPage() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const [state, formAction] = useActionState(shareMeal, { message: null });
  console.log(state);

  return (
    <>
      <header className="mx-20 my-12 w-[90%] max-w-[75rem] gap-12 font-primary text-neutral">
        <h1>
          Share your
          <span className="rounded-md bg-clip-text px-2 py-1 text-xl font-bold text-orange">
            favorite meal!
          </span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className="mx-auto my-12 w-[90%] max-w-[75rem]">
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-expect-error*/}
        <form className="max-w-[50rem]" action={shareMeal}>
          <div className="flex gap-4">
            <p className="w-full">
              <label
                className="mb-1 block font-primary text-sm font-bold uppercase text-light_beige"
                htmlFor="name"
              >
                Your name
              </label>
              <input
                className="border-1 border-dark_grey block w-full rounded-md border bg-black px-4 py-2 font-primary text-xl text-neutral focus:bg-dark focus:outline-orange"
                type="text"
                id="name"
                name="name"
                required
              />
            </p>
            <p className="w-full">
              <label
                className="mb-1 block font-primary text-sm font-bold uppercase text-light_beige"
                htmlFor="email"
              >
                Your email
              </label>
              <input
                className="border-1 border-dark_grey block w-full rounded-md border bg-black px-4 py-2 font-primary text-xl text-neutral focus:bg-dark focus:outline-orange"
                type="email"
                id="email"
                name="email"
                //required
              />
            </p>
          </div>
          <p className="w-full">
            <label
              className="mb-1 block font-primary text-sm font-bold uppercase text-light_beige"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="border-1 border-dark_grey block w-full rounded-md border bg-black px-4 py-2 font-primary text-xl text-neutral focus:bg-dark focus:outline-orange"
              type="text"
              id="title"
              name="title"
              required
            />
          </p>
          <p className="w-full">
            <label
              className="mb-1 block font-primary text-sm font-bold uppercase text-light_beige"
              htmlFor="summary"
            >
              Short Summary
            </label>
            <input
              className="border-1 border-dark_grey block w-full rounded-md border bg-black px-4 py-2 font-primary text-xl text-neutral focus:bg-dark focus:outline-orange"
              type="text"
              id="summary"
              name="summary"
              required
            />
          </p>
          <p className="w-full">
            <label
              className="mb-1 block font-primary text-sm font-bold uppercase text-light_beige"
              htmlFor="instructions"
            >
              Instructions
            </label>
            <textarea
              className="border-1 border-dark_grey block w-full rounded-md border bg-black px-4 py-2 font-primary text-xl text-neutral focus:bg-dark focus:outline-orange"
              id="instructions"
              name="instructions"
              rows={10}
              required
            ></textarea>
          </p>
          {state?.message ?? <p>{state?.message}</p>}
          <ImagePicker name="image" />
          <p className="text-right">
            <MealsFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}

export default ShareMealsPage;
