"use client";

import React, { useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  '/gallery/gallery1.png',
  '/gallery/gallery2.png',
  '/gallery/gallery3.png',
  '/gallery/gallery4.png',
  '/image5.jpeg',
  '/image6.jpeg', 
  '/image7.jpeg',
  '/image8.jpeg',
  '/image9.jpeg',
  '/soap1.jpeg',
  '/soap2.jpeg',
];

export const GalleryCarousel = () => {
  // 1. Initialize Embla
  // loop: true enables infinite scrolling
  // Autoplay plugin sets the delay (e.g., 4000ms = 4 seconds)
  // stopOnInteraction: false ensures autoplay resumes after the user clicks an arrow
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);

  // 2. Define navigation functions useCallback for performance
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    // Outer wrapper with `group` so we can show buttons on hover
    <div className="m-10 relative group w-full max-w-4xl mx-auto border-4 border-white shadow-xl rounded-xl overflow-hidden bg-gray-100">
      
      {/* Embla Viewport Ref */}
      <div className="overflow-hidden" ref={emblaRef}>
        {/* Embla Container (the moving part) */}
        {/* flex ensures slides are horizontal. touch-pan-y allows vertical page scrolling on mobile while swiping carousel */}
        <div className="flex touch-pan-y">
          {images.map((src, index) => (
            // Slide Item
            // flex-[0_0_100%] makes each slide take full width.
            // Change 100% to 50% if you want to show 2 images at once, etc.
            <div className="flex-[0_0_100%] min-w-0 relative aspect-[16/9]" key={index}>
               <Image
                 src={src}
                 alt={`Gallery image ${index + 1}`}
                 fill // Next/Image fills the parent container
                 className="object-cover" // Tailwind equivalent of object-fit: cover
                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                 priority={index === 0} // Load the first image immediately
               />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      {/* We use absolute positioning to place them over the image */}
      {/* They are hidden by default (opacity-0) and shown on group-hover */}
      
      {/* Previous Button */}
      <button
        onClick={scrollPrev}
        className="absolute top-1/2 left-4 -translate-y-1/2 z-10 p-2 bg-white/70 text-gray-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Next Button */}
      <button
        onClick={scrollNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 z-10 p-2 bg-white/70 text-gray-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};