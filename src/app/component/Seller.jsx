"use client";

import Image from "next/image";

export default function Seller() {
  const items = [
    {
      title: "Krunch Burger",
      price: "Rs310",
      image: "/icons/seller1.png",
    },
    {
      title: "Mighty Zinger",
      price: "Rs770",
      image: "/icons/seller2.png",
    },
    {
      title: "Chicken & Chips",
      price: "Rs650",
      image: "/icons/seller3.png",
    },
    {
      title: "Hot Wings Bucket",
      price: "Rs670",
      image: "/icons/seller4.png",
    },
    {
      title: "Krunch Combo",
      price: "Rs590",
      image: "/icons/seller5.png",
    },
  ];

  return (
    <section className="bg-[#e9eaec] py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-2xl text-black font-extrabold uppercase">
          Best Sellers
        </h2>

        <div className="w-22 h-1 bg-red-600 mt-2 mb-8"></div>

        {/* Cards */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-5 min-w-max pb-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="relative w-[290px] h-[360px] bg-[#f2f2f2] p-5 flex-shrink-0  transition duration-300"
              >
                {/* Top Stripes */}
                <div className="flex justify-center gap-2 absolute top-0 left-0 right-0">
                  <div className="w-5 h-6 bg-red-600"></div>
                  <div className="w-5 h-6 bg-red-600"></div>
                  <div className="w-5 h-6 bg-red-600"></div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-extrabold text-black mt-10">
                  {item.title}
                </h3>

                {/* Price Ribbon */}
                <div className="absolute top-20 right-0">
                  <div className="relative bg-red-600 text-white font-bold px-6 py-1">
                    {item.price}

                    <div className="absolute left-[-12px] top-0 w-0 h-0 border-t-[15px] border-b-[17px] border-r-[12px] border-t-transparent border-b-transparent border-r-red-600"></div>
                  </div>
                </div>

                {/* Food Image */}
                <div className="flex justify-center items-center mt-10">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={240}
                    height={240}
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
