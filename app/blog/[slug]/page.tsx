import React from 'react';
import Link from 'next/link';

interface BlogPageProps {
  params: {
    slug: string;
  };
}
function BlogPage({ params }: BlogPageProps) {
  return (
    <main>
      <h1>BlOG POST</h1>
      <Link href="/blog">
        <p>back</p>
      </Link>
      <div>
        <p>
          {params.slug === 'post-1' ? 'post number one' : 'post number two'}
        </p>
      </div>
    </main>
  );
}

export default BlogPage;
