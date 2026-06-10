// components/Header.jsx

import Image from "next/image";
import { TableOfContents } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="max-w-full h-24 px-14 flex items-center justify-between">
        
        {/* Left Section */}
        <div className="flex items-center gap-3">
          <button className="mr-2">
            <TableOfContents size={30} color="black" />
          </button>

          {/* LOGO */}
          <Image
            src="/icons/KFC.png"
            alt="KFC Logo"
            width={80}
            height={40}
            priority
          />

          <div className="flex items-center gap-4 ml-6">

            {/* DELIVERY */}
            <button className="flex items-center gap-2 border-2 border-red-600 rounded-md px-8 py-2 bg-[#F5FAFF] text-black font-semibold">
              <Image
                src="/icons/Delivery.png"
                alt="Delivery"
                width={22}
                height={22}
              />
              DELIVERY
            </button>

            {/* PICKUP */}
            <button className="flex items-center gap-2 bg-[#F5FAFF] text-black rounded-md px-6 py-2 font-semibold">
              <Image
                src="/icons/pickup.png"
                alt="Pickup"
                width={22}
                height={22}
              />
              PICKUP
            </button>

            {/* MERCH */}
            <button className="flex items-center gap-2 bg-[#F5FAFF] text-black rounded-md px-6 py-2 font-semibold">
              <Image
                src="/icons/merch.png"
                alt="Merch"
                width={22}
                height={22}
              />
              MERCH
            </button>

          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">

          {/* Bucket */}
          <div className="relative flex items-center justify-center">
            <Image
              src="/icons/bucket.png"
              alt="Bucket"
              width={40}
              height={40}
            />

            <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-black mt-1">
              0
            </span>
          </div>

          <button className="bg-[#EA002A] text-white px-3 py-1.5 rounded-sm font-semibold hover:bg-red-700 transition">
            LOGIN
          </button>

        </div>
      </div>
    </header>
  );
}