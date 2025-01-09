import React from 'react';
import Link from 'next/link';

function MealsPage() {
  return (
    <div>
      Meals
      <Link href="/meals/slug1">
        <p>slug1</p>
      </Link>
      <Link href="/meals/slug2">
        <p>slug2</p>
      </Link>
      <Link href="/meals/share">
        <p>Share</p>
      </Link>
    </div>
  );
}

export default MealsPage;
