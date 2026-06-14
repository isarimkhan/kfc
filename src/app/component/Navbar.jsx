"use client";

import {
  RiMapPinLine,
  RiFileList3Line,
  RiMenuLine,
} from "react-icons/ri";

export default function Navbar() {
  return (
    <div className="w-[295px] min-h-screen bg-[#F1F3F6] px-5 py-4">
      {/* Login Button */}
      <button className="bg-red-600 text-white font-bold px-4 py-2 rounded shadow-md">
        LOGIN
      </button>

      {/* Day Night Toggle */}
      <div className="flex justify-end mt-5">
        <div className="bg-white rounded-full p-1 flex items-center w-30">
          <button className="bg-red-600 text-white text-sm font-bold rounded-full px-4 py-2">
            Day
          </button>
          <button className="text-black text-sm font-bold px-3">
            Night
          </button>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-500 mt-4" />

      {/* Menu Items */}
      <div className="mt-5 space-y-6">
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="bg-red-500 p-1">
            <RiMapPinLine className="text-white text-xl" />
          </div>
          <span className="text-[18px] text-black">
            Store Locator
          </span>
        </div>

        <div className="flex items-center gap-3 cursor-pointer">
          <div className="bg-red-500 p-1">
            <RiFileList3Line className="text-white text-xl" />
          </div>
          <span className="text-[18px] text-black">
            Track Order
          </span>
        </div>

        <div className="flex items-center gap-3 cursor-pointer">
          <div className="bg-red-500 p-1">
            <RiMenuLine className="text-white text-xl" />
          </div>
          <span className="text-[18px] text-black">
            Explore Menu
          </span>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-500 my-10" />

      {/* Links */}
      <div className="space-y-8 text-[18px] text-black">
        <p>About Us</p>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Contact Us</p>
        <p>Mitao Bhook</p>
        <p>Mitao Bhook - Scholarship</p>
        <p>Careers</p>
      </div>
    </div>
  );
}