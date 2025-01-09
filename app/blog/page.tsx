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
      <h1>BlOG</h1>
      <div>
        <Link href="/blog/post-1">
          <p>Post 1</p>
        </Link>
        <Link href="/blog/post-2">
          <p>Post 2</p>
        </Link>
        <p>{params.slug}</p>
      </div>
    </main>
  );
}

export default BlogPage;
