import Link from 'next/link';

export default function Home() {
  return (
    <>
      <header className="mx-auto my-12 flex w-[90%] max-w-[75rem] flex-col gap-12 md:flex-row">
        <div className="h-64 w-96">slideshow</div>
        <div>
          <div className="text-neutral text-xl">
            <h1 className="font-primary bg-gradient-to-r from-[#f9572a] to-[#ffc905] bg-clip-text text-2xl font-bold uppercase text-transparent">
              NextLevel Food for NextLevel Foodies
            </h1>
            <p>Taste & share food from all over the world.</p>
          </div>
          <div className="flex gap-4 text-xl">
            <Link
              className="bg-gradient-link hover:bg-gradient-link mt-1 inline-block rounded-md px-4 py-2 font-bold text-white no-underline"
              href="/community"
            >
              Join the Community
            </Link>
            <Link
              className="bg-gradient-link hover:bg-gradient-link mt-1 inline-block rounded-md px-4 py-2 font-bold text-white no-underline"
              href="/meals"
            >
              Explore Meals
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className="text-neutral max-w-200 mx-auto my-4 flex w-[90%] flex-col text-center text-lg">
          <h2 className="text-xl font-bold">How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className="text-neutral max-w-200 mx-auto my-4 flex w-[90%] flex-col text-center text-lg">
          <h2 className="text-xl font-bold">Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
