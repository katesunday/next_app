import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1 className="text-white text-center text-xl">Time to get started!</h1>
      <div className="text-center">
        <Link href="/meals" className="underline">
          <p>Meals</p>
        </Link>
        <Link href="/community" className="underline">
          <p>Community</p>
        </Link>
      </div>
    </main>
  );
}
