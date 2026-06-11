"use client";

import Image from "next/image";
import { Heart } from "lucide-react";

export default function TopDeal() {
  const deals = [
    {
      title: "Family Festival 3",
      desc: "An ultimate meal for the fam. It includes 4 Zinger burgers + 4 pcs chicken.",
      price: "Rs 2590",
      image: "/icons/Topdeal1.png",
    },
    {
      title: "Value Bucket",
      desc: "Enjoy 9 pcs of our Signature Crispy Fried Chicken.",
      price: "Rs 2090",
      image: "/icons/Topdeal2.png",
    },
    {
      title: "Strips Chips N' Dips",
      desc: "4 Boneless Strips, Regular Fries and 2 Dips.",
      price: "Rs 750",
      image: "/icons/Topdeal3.png",
    },
    {
      title: "Xtreme Duo Box",
      desc: "The irresistible combo of 2 Signature Zingers.",
      price: "Rs 1560",
      image: "/icons/Topdeal5.png",
    },
  ];

  return (
    <section className="bg-gray-100 py-10 px-6 md:px-16">
      {/* Heading */}
      <h2 className="text-4xl font-extrabold uppercase">
        Top Deals
      </h2>

      <div className="w-16 h-1 bg-red-600 mt-2 mb-8"></div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {deals.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-4 relative overflow-hidden"
          >
            {/* Top Red Bars */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 flex gap-1">
              <span className="w-4 h-6 bg-red-600"></span>
              <span className="w-4 h-6 bg-red-600"></span>
              <span className="w-4 h-6 bg-red-600"></span>
            </div>

            {/* Heart */}
            <button className="absolute top-4 right-4">
              <Heart
                size={28}
                className="text-red-600 hover:fill-red-600 transition"
              />
            </button>

            {/* Image */}
            <div className="flex justify-center mt-8">
              <Image
                src={item.image}
                alt={item.title}
                width={220}
                height={220}
                className="transition-transform duration-300 hover:-translate-y-4"
              />
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-black mt-4">
              {item.title}
            </h3>

            <p className="text-black mt-2 line-clamp-2">
              {item.desc}
            </p>

            <p className="font-bold text-black text-xl mt-4">
              {item.price}
            </p>

            {/* Button */}
            <div className="flex justify-center mt-6">
              <button className="bg-red-600 text-white px-6 py-2 rounded-md font-bold hover:bg-red-700 transition">
                + ADD TO BUCKET
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}