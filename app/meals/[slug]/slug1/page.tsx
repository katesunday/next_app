import React from 'react';

interface VariousPageProps {
  params: {
    slug: string;
  };
}

function VariousPage({ params }: VariousPageProps) {
  return (
    <div>
      <p>VariousPage</p>
      <p>{params.slug}</p>
    </div>
  );
}

export default VariousPage;
