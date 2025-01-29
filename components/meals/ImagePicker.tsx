'use client';
import React, { ChangeEvent, useRef, useState } from 'react';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

function ImagePicker({ label, name }: { label?: string; name: string }) {
  const ref = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<string | null | StaticImport>(null);

  const handleClick = () => {
    ref.current?.click();
  };
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }
    const file = e.target.files[0];
    if (!file) {
      setImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      if (typeof fileReader.result === 'string') {
        setImage(fileReader.result);
      }
    };
    fileReader.readAsDataURL(file);
  };
  return (
    <div>
      <label htmlFor="image">{label}</label>
      <div className="mb-4 flex items-start gap-8">
        <div className="border-grey-50 relative mt-4 flex h-40 w-40 items-center justify-center border-2 border-solid text-center">
          {!image && <p>No image picked yet</p>}
          {image && <Image src={image} alt="image" fill />}
        </div>
        <input
          ref={ref}
          className="hidden"
          type="file"
          id="image"
          accept="image/png, image/jpeg"
          name={name}
          onChange={(e) => handleImageChange(e)}
          required
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
