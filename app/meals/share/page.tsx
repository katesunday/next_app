import React from 'react';

function ShareMealsPage() {
  return (
    <>
      <header className="mx-20 my-12 w-[90%] max-w-[75rem] gap-12 font-primary text-neutral">
        <h1>
          Share your{' '}
          <span className="rounded-md bg-clip-text px-2 py-1 bg-gradient-link">
            favorite meal!
          </span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className="mx-auto my-12 w-[90%] max-w-[75rem]">
        <form className="max-w-[50rem]">
          <div className="flex gap-4">
            <p className="w-full">
              <label
                className="text-light_beige mb-1 block font-primary text-sm font-bold uppercase"
                htmlFor="name"
              >
                Your name
              </label>
              <input
                className="border-1 focus:outline-orange focus:bg-dark border-dark_grey block w-full rounded-md border bg-black px-4 py-2 font-primary text-xl text-neutral"
                type="text"
                id="name"
                name="name"
                required
              />
            </p>
            <p className="w-full">
              <label
                className="text-light_beige mb-1 block font-primary text-sm font-bold uppercase"
                htmlFor="email"
              >
                Your email
              </label>
              <input
                className="border-1 focus:outline-orange focus:bg-dark border-dark_grey block w-full rounded-md border bg-black px-4 py-2 font-primary text-xl text-neutral"
                type="email"
                id="email"
                name="email"
                required
              />
            </p>
          </div>
          <p className="w-full">
            <label
              className="text-light_beige mb-1 block font-primary text-sm font-bold uppercase"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="border-1 focus:outline-orange focus:bg-dark border-dark_grey block w-full rounded-md border bg-black px-4 py-2 font-primary text-xl text-neutral"
              type="text"
              id="title"
              name="title"
              required
            />
          </p>
          <p className="w-full">
            <label
              className="text-light_beige mb-1 block font-primary text-sm font-bold uppercase"
              htmlFor="summary"
            >
              Short Summary
            </label>
            <input
              className="border-1 focus:outline-orange focus:bg-dark border-dark_grey block w-full rounded-md border bg-black px-4 py-2 font-primary text-xl text-neutral"
              type="text"
              id="summary"
              name="summary"
              required
            />
          </p>
          <p className="w-full">
            <label
              className="text-light_beige mb-1 block font-primary text-sm font-bold uppercase"
              htmlFor="instructions"
            >
              Instructions
            </label>
            <textarea
              className="border-1 border-dark_grey focus:outline-orange focus:bg-dark block w-full rounded-md border bg-black px-4 py-2 font-primary text-xl text-neutral"
              id="instructions"
              name="instructions"
              rows={10}
              required
            ></textarea>
          </p>
          IMAGE PICKER
          <p className="text-right">
            <button
              className="disabled:cursor-not-allowedcursor-pointer rounded-md border-0 border-none px-8 py-4 text-lg text-inherit text-white shadow-lg bg-gradient-link hover:bg-gradient-link focus:outline-none focus:ring-2 disabled:bg-gray-300 disabled:text-gray-400"
              type="submit"
            >
              Share Meal
            </button>
          </p>
        </form>
      </main>
    </>
  );
}

export default ShareMealsPage;
