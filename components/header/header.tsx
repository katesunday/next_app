import logoImg from '../../assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import NavLink from '@/components/header/NavLink';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-2 py-0 md:py-6">
      <Link
        href="/"
        className="flex items-center justify-center gap-2 font-bold text-white md:text-xl"
      >
        <Image src={logoImg.src} alt="Logo" width="40" height="40" />
        <p className="hidden sm:block">Next Level Food</p>
      </Link>
      <nav>
        <ul className="m-0 flex list-none gap-2 p-0 font-bold no-underline active:bg-amber-600 active:bg-clip-text">
          <li>
            <NavLink pathname="/meals" title="Meals" />
          </li>
          <li>
            <NavLink pathname="/community" title="Community" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
