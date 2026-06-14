"use client";

import { useState } from "react";
import Image from "next/image";
import { RiMenu2Line } from "react-icons/ri";
import Navbar from "./Navbar";

export default function Header() {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <>
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-full h-24 px-14 flex items-center justify-between">

          {/* Left Section */}
          <div className="flex items-center gap-3">
            <button
              className="mr-2 font-extrabold"
              onClick={() => setShowNavbar(true)}
            >
              <RiMenu2Line size={30} color="black" />
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

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          showNavbar
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
        onClick={() => setShowNavbar(false)}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen z-50 transition-transform duration-300 ${
          showNavbar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Navbar closeMenu={() => setShowNavbar(false)} />
      </div>
    </>
  );
}