import React from 'react';
import Link from 'next/link';

function AwesomePage() {
  return (
    <main>
      <h1>SEcond</h1>
      <div>
        <Link href="/">
          <p>Main page</p>
        </Link>
      </div>
    </main>
  );
}

export default AwesomePage;
