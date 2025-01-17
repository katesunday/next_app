import React from 'react';

function MealDetailPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  return (
    <div>
      <p>VariousPage</p>
      <p>{params.slug}</p>
    </div>
  );
}

export default MealDetailPage;
