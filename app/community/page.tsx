import Image from 'next/image';

import mealIcon from '@/assets/icons/meal.png';
import communityIcon from '@/assets/icons/community.png';
import eventsIcon from '@/assets/icons/events.png';

export default function CommunityPage() {
  return (
    <>
      <header className="mx-auto my-12 w-[90%] max-w-[75rem] gap-12 text-center text-xl text-neutral">
        <h1 className="text-primary font-primary text-3xl font-bold">
          One shared passion:
          <span className="bg-clip-text text-amber-500"> Food</span>
        </h1>
        <p>Join our community and share your favorite recipes!</p>
      </header>
      <main className="mx-auto my-0 w-[90%] max-w-[40rem] py-4">
        <h2 className="mb-12 text-center font-primary text-lg">
          Community Perks
        </h2>

        <ul className="mx-0 my-12 list-none p-0">
          <li className="flex flex-col items-center gap-8">
            <Image
              src={mealIcon}
              alt="A delicious meal"
              width={128}
              height={128}
              className="object-contain"
            />
            <p className="m-0 font-primary text-sm font-bold text-neutral">
              Share & discover recipes
            </p>
          </li>
          <li className="flex flex-col items-center gap-8">
            <Image
              src={communityIcon}
              alt="A crowd of people, cooking"
              width={128}
              height={128}
              className="object-contain"
            />
            <p className="m-0 font-primary text-sm font-bold text-neutral">
              Find new friends & like-minded people
            </p>
          </li>
          <li className="flex flex-col items-center gap-8">
            <Image
              src={eventsIcon}
              alt="A crowd of people at a cooking event"
              width={128}
              height={128}
              className="object-contain"
            />
            <p className="m-0 font-primary text-sm font-bold text-neutral">
              Participate in exclusive events
            </p>
          </li>
        </ul>
      </main>
    </>
  );
}
