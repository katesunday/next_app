'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLinkProps = {
  pathname: string;
  title: string;
};
function NavLink({ pathname, title }: NavLinkProps) {
  const path = usePathname();
  return (
    <Link
      className={`${
        path.startsWith(pathname) ? 'text-amber-500' : 'text-white'
      } transition-all hover:text-amber-500`}
      href={pathname}
    >
      {title}
    </Link>
  );
}

export default NavLink;
