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
      <div>
        <p>{params.slug}</p>
      </div>
    </main>
  );
}

export default BlogPage;
