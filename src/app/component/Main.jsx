"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Main() {
  const images = [
    "/icons/main1.jpg",
    "/icons/main2.jpg",
    "/icons/main3.jpeg",
    "/icons/main4.jpg",
    "/icons/main5.jpg",
    "/icons/main6.jpg",
  ];

  // Add duplicate images at the end for seamless looping
  const extendedImages = [...images, ...images];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const nextSlide = () => {
    if (!isTransitioning) return;

    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (!isTransitioning) return;

    setCurrentIndex((prev) => prev - 1);
  };

  // Handle resetting position for seamless loop
  const handleTransitionEnd = () => {
    if (currentIndex >= images.length) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - images.length);
      // Force reflow and re-enable transition
      setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
    } else if (currentIndex < 0) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex + images.length);
      setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Get the actual image to display
  const getActualImageIndex = () => {
    if (currentIndex >= images.length) {
      return currentIndex - images.length;
    } else if (currentIndex < 0) {
      return currentIndex + images.length;
    }
    return currentIndex;
  };

  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      {/* TRACK */}
      <div
        className="flex h-full"
        style={{
          width: `${extendedImages.length * 100}%`,
          transform: `translateX(-${currentIndex * (100 / extendedImages.length)}%)`,
          transition: isTransitioning ? "transform 0.3s ease-in-out" : "none", // Changed from 0.7s to 0.3s for faster movement
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedImages.map((img, index) => (
          <div
            key={index}
            className="relative h-[500px] flex-shrink-0"
            style={{
              width: `${100 / extendedImages.length}%`,
            }}
          >
            <Image
              src={img}
              alt={`Banner ${getActualImageIndex() + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
      {/* LEFT ARROW */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 hover:bg-red-600 bg-red-700 rounded-full z-10 transition-colors w-6 h-6 flex items-center justify-center cursor-pointer"
      >
        <ChevronLeft className="stroke-white fill-none" size={20} />
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 hover:bg-red-600 bg-red-700 rounded-full z-10 transition-colors w-6 h-6 flex items-center justify-center cursor-pointer"
      >
        <ChevronRight className="stroke-white fill-none" size={20} />
      </button>
    </section>
  );
}
