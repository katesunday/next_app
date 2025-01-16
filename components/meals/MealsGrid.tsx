import React from 'react';
import MealItem from '@/components/meals/MealItem';

function MealsGrid({ meals }: any) {
  return (
    <ul className="mx-auto my-[2rem] grid w-[90%] max-w-[90rem] list-none grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-[5rem] p-0">
      {meals.map((meal: any) => (
        <li key={meal.id}>
          {/*<MealItem title={} slug={} image={} summary={} creator={} />*/}
        </li>
      ))}
    </ul>
  );
}

export default MealsGrid;
