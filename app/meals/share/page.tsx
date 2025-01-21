import React from 'react';

function ShareMealsPage() {
  return (
    <>
      <header className="mx-20 my-12 w-[90%] max-w-[75rem] gap-12 font-primary text-neutral">
        <h1>
          Share your{' '}
          <span className="bg-clip-text bg-gradient-link">favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className="mx-auto my-12 w-[90%] max-w-[75rem]">
        <form className="max-w-[50rem]">
          <div className={classes.row}>
            <p>
              <label
                className="text-light_beige mb-1 block font-primary text-sm font-bold uppercase"
                htmlFor="name"
              >
                Your name
              </label>
              <input
                className="border-1 border-dark_grey block w-full rounded-md border bg-black px-4 py-2 font-primary text-xl text-neutral"
                type="text"
                id="name"
                name="name"
                required
              />
            </p>
            <p>
              <label
                className="text-light_beige mb-1 block font-primary text-sm font-bold uppercase"
                htmlFor="email"
              >
                Your email
              </label>
              <input
                className="border-1 border-dark_grey block w-full rounded-md border bg-black px-4 py-2 font-primary text-xl text-neutral"
                type="email"
                id="email"
                name="email"
                required
              />
            </p>
          </div>
          <p>
            <label
              className="text-light_beige mb-1 block font-primary text-sm font-bold uppercase"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="border-1 border-dark_grey block w-full rounded-md border bg-black px-4 py-2 font-primary text-xl text-neutral"
              type="text"
              id="title"
              name="title"
              required
            />
          </p>
          <p>
            <label
              className="text-light_beige mb-1 block font-primary text-sm font-bold uppercase"
              htmlFor="summary"
            >
              Short Summary
            </label>
            <input
              className="border-1 border-dark_grey block w-full rounded-md border bg-black px-4 py-2 font-primary text-xl text-neutral"
              type="text"
              id="summary"
              name="summary"
              required
            />
          </p>
          <p>
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
          <p className={classes.actions}>
            <button type="submit">Share Meal</button>
          </p>
        </form>
      </main>
    </>
  );
}

export default ShareMealsPage;
