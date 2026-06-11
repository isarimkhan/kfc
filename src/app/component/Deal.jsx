"use client";

import Image from "next/image";

export default function Deal() {
  const deals = [
    {
      image: "/icons/deal1.jpg",
      alt: "Pickup Made Easy",
    },
    {
      image: "/icons/deal2.jpg",
      alt: "Value Bucket",
    },
    {
      image: "/icons/deal3.png",
      alt: "Crispy Cravings",
    },
    {
      image: "/icons/deal4.jpg",
      alt: "Explore Menu",
      text: "Adding 11 herbs and spices, Explore our menu and add items to your cart.",
    },
  ];

  return (
    <section className="bg-gray-100 py-10 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* First Card */}
        <div className="relative overflow-hidden rounded-md">
          <Image
            src={deals[0].image}
            alt={deals[0].alt}
            width={700}
            height={400}
            className="w-[600px] h-[400px] object-cover transition-transform duration-300"
          />
        </div>

        {/* Second Card */}
        <div className="relative overflow-hidden rounded-md">
          <Image
            src={deals[1].image}
            alt={deals[1].alt}
            width={700}
            height={400}
            className=" w-[600px] h-[400px] object-cover transition-transform duration-300  "
          />
        </div>

        {/* Third Card */}
        <div className="relative overflow-hidden rounded-md">
          <Image
            src={deals[2].image}
            alt={deals[2].alt}
            width={700}
            height={700}
            className=" w-[600px] h-[380px] object-cover transition-transform duration-300  "
          />
        </div>

        {/* Fourth Card */}
        <div className="bg-white rounded-md flex flex-col items-center justify-center p-6 relative">
          <Image
            src={deals[3].image}
            alt={deals[3].alt}
            width={220}
            height={100}
            className="mb-5"
          />

          <p className="text-center text-black text-xl font-bold max-w-sm mb-6">
            {deals[3].text}
          </p>

          <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded">
            EXPLORE MENU
          </button>
        </div>
      </div>
    </section>
  );
}
