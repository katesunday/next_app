'use client';
import logoImg from '../../assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname(); // Get the current path

  const isActive = (path: string) => pathname === path;

  return (
    <header className="flex items-center justify-between px-2 py-0 md:py-1">
      <Link href="/">
        <Image src={logoImg.src} alt="Logo" width="40" height="40" />
      </Link>
      <nav>
        <ul className="m-0 flex list-none gap-2 p-0 font-bold no-underline active:bg-amber-600 active:bg-clip-text">
          <li>
            <Link
              className={`${
                isActive('/meals') ? 'text-amber-500' : 'text-white'
              } transition-all hover:text-amber-500`}
              href="/meals"
            >
              Meals
            </Link>
          </li>
          <li>
            <Link
              className={`${
                isActive('/community') ? 'text-amber-500' : 'text-white'
              } transition-all hover:text-amber-500`}
              href="/community"
            >
              Community
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
