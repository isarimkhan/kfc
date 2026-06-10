"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Menu() {
  const menuItems = [
    { title: "Let's Mex It Up", image: "/icons/menu1.png" },
    { title: "Every Value", image: "/icons/menu2.png" },
    { title: "Ala-Carte-&-Combos", image: "/icons/menu3.png" },
    { title: "Signature-Boxes", image: "/icons/menu4.png" },
    { title: "Sharing", image: "/icons/menu6.png" },
    { title: "Snakes-&-Beverages", image: "/icons/menu7.png" },
    { title: "Condiment", image: "/icons/menu8.png" },
    { title: "Midnight (Start at 12am)", image: "/icons/menu9.png" },
  ];

  const visibleItems = 5;
  const itemWidth = 224;
  const gap = 24;
  const step = itemWidth + gap;

  const [startIndex, setStartIndex] = useState(0);
  const maxIndex = menuItems.length - visibleItems;

  const nextSlide = () => {
    if (startIndex < maxIndex) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section className="bg-gray-100 py-0.5">
        {/* TOP CENTER REORDER BUTTON */}
        <div className="flex justify-center mt-10 ">
          <button className="bg-red-600 text-white px-60 py-2 rounded-sm font-semibold shadow-md hover:bg-red-700 transition">
            Reorder
          </button>
        </div>
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-2xl font-bold text-black uppercase">
              Explore Menu
            </h2>
            <div className="w-16 h-1 bg-red-600 mt-2"></div>
          </div>

          <button className="font-bold text-black uppercase border-b-2 border-red-600 hover:text-red-600 transition">
            View All
          </button>
        </div>


        {/* SLIDER */}
        <div className="relative flex items-center">

          {/* LEFT ARROW */}
          <button
            onClick={prevSlide}
            disabled={startIndex === 0}
            className="absolute left-0 z-10 bg-red-500 rounded-full shadow h-6 w-6 disabled:opacity-40 hover:scale-110 transition"
          >
            <ChevronLeft size={24} className="text-white" />
          </button>

          {/* TRACK */}
          <div className="overflow-hidden w-full px-12">
            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${startIndex * step}px)`,
              }}
            >
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className="relative bg-white rounded-full w-56 h-56 flex flex-col items-center justify-center shadow-sm flex-shrink-0 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={140}
                    height={140}
                    className="object-contain"
                  />

                  <h3 className="text-center text-black mt-3 px-3 text-sm">
                    {item.title}
                  </h3>

                  <div className="w-14 h-1 bg-red-600 mt-3 rounded-full"></div>

                  <div className="absolute bottom-4 right-4 w-4 h-4 bg-gray-200 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={nextSlide}
            disabled={startIndex >= maxIndex}
            className="absolute right-0 z-10 bg-red-500 rounded-full shadow h-6 w-6 disabled:opacity-40 hover:scale-110 transition"
          >
            <ChevronRight size={24} className="text-white" />
          </button>

        </div>
      </div>
    </section>
  );
}