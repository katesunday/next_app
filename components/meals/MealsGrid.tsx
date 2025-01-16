import React from 'react';
import MealItem from '@/components/meals/MealItem';
import { MealType } from '@/initdb';

function MealsGrid({ meals }: { meals: MealType[] }) {
  return (
    <ul className="mx-auto my-[2rem] grid w-[90%] max-w-[90rem] list-none grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-[5rem] p-0">
      {meals.map((meal: MealType, index) => (
        <li key={index}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}

export default MealsGrid;
