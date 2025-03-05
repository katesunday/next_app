'use client';
import { useFormStatus } from 'react-dom';
import React from 'react';

export default function MealsFormSubmit() {
  const { pending } = useFormStatus();
  return (
    <button
      className="disabled:cursor-not-allowedcursor-pointer rounded-md border-0 border-none px-8 py-4 text-lg text-inherit text-white shadow-lg bg-gradient-link hover:bg-gradient-link focus:outline-none focus:ring-2 disabled:bg-gray-300 disabled:text-gray-400"
      type="submit"
      disabled={pending}
    >
      {pending ? 'Submitting...' : 'Share Meal'}
    </button>
  );
}
