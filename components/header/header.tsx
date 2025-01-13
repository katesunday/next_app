import logoImg from '../../assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex">
      <Link href="/">
        <Image src={logoImg.src} alt="Logo" width="40" height="40" />
      </Link>
      <nav className="flex gap-2">
        <ul>
          <li>
            <Link href="/meals">Meals</Link>
          </li>
          <li>
            <Link href="/community">Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
