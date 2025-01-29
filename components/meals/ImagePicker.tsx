'use client';
import React, { useRef } from 'react';

function ImagePicker({ label, name }: { label?: string; name: string }) {
  const ref = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    ref.current?.click();
  };
  return (
    <div>
      <label htmlFor="image">{label}</label>
      <div className="mb-4 flex items-start gap-8">
        <input
          ref={ref}
          className="hidden"
          type="file"
          id="image"
          accept="image/png, image/jpeg"
          name={name}
        />
        <button
          className="bg-grey-30 hover:bg-grey-50 mt-4 cursor-pointer rounded border-0 px-4 py-2 text-inherit"
          type="button"
          onClick={handleClick}
        >
          Pick An Image
        </button>
      </div>
    </div>
  );
}

export default ImagePicker;
