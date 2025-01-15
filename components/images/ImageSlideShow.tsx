'use client';
import React, { useEffect, useState } from 'react';
import burgerImg from '@/assets/burger.jpg';
import curryImg from '@/assets/curry.jpg';
import dumplingsImg from '@/assets/dumplings.jpg';
import macncheeseImg from '@/assets/macncheese.jpg';
import pizzaImg from '@/assets/pizza.jpg';
import schnitzelImg from '@/assets/schnitzel.jpg';
import tomatoSaladImg from '@/assets/tomato-salad.jpg';
import Image, { StaticImageData } from 'next/image';

const images: { image: StaticImageData; alt: string }[] = [
  { image: burgerImg, alt: 'A delicious, juicy burger' },
  { image: curryImg, alt: 'A delicious, spicy curry' },
  { image: dumplingsImg, alt: 'Steamed dumplings' },
  { image: macncheeseImg, alt: 'Mac and cheese' },
  { image: pizzaImg, alt: 'A delicious pizza' },
  { image: schnitzelImg, alt: 'A delicious schnitzel' },
  { image: tomatoSaladImg, alt: 'A delicious tomato salad' },
];
function ImageSlideShow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0,
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[100%] w-[100%] overflow-hidden rounded-md">
      {images.map((image, index) => {
        return (
          <Image
            src={image.image}
            alt={image.alt}
            key={index}
            className={`${index === currentImageIndex ? 'slide-show-animation-active' : ''} absolute left-0 top-0 h-[100%] w-[100%] object-cover opacity-0 slide-show-animation`}
          />
        );
      })}
    </div>
  );
}

export default ImageSlideShow;