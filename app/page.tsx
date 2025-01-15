import Link from 'next/link';
import ImageSlideShow from '@/components/images/ImageSlideShow';

export default function Home() {
  return (
    <>
      <header className="mx-auto my-12 flex w-[90%] max-w-[75rem] flex-col gap-12 md:flex-row">
        <div className="h-64 w-96">
          <ImageSlideShow />
        </div>
        <div>
          <div className="text-xl text-neutral">
            <h1 className="bg-gradient-to-r from-[#f9572a] to-[#ffc905] bg-clip-text font-primary text-2xl font-bold uppercase text-transparent">
              NextLevel Food for NextLevel Foodies
            </h1>
            <p>Taste & share food from all over the world.</p>
          </div>
          <div className="flex gap-4 text-xl">
            <Link
              className="mt-1 inline-block rounded-md px-4 py-2 font-bold text-white no-underline bg-gradient-link hover:bg-gradient-link"
              href="/community"
            >
              Join the Community
            </Link>
            <Link
              className="mt-1 inline-block rounded-md px-4 py-2 font-bold text-white no-underline bg-gradient-link hover:bg-gradient-link"
              href="/meals"
            >
              Explore Meals
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className="max-w-200 mx-auto my-4 flex w-[90%] flex-col text-center text-lg text-neutral">
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

        <section className="max-w-200 mx-auto my-4 flex w-[90%] flex-col text-center text-lg text-neutral">
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
