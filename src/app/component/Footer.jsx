"use client";

import Image from "next/image";
import { FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#F1F3F6] py-12 px-8 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Top Logo & Social Icons */}
        <div className="flex justify-center items-center gap-8 mb-12">
          <Image
            src="/icons/kfc.png"
            alt="KFC"
            width={100}
            height={40}
          />

          <div className="flex gap-3 text-black">
            <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center cursor-pointer">
              <FaYoutube className="text-red-600 text-xl" />
            </div>

            <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center cursor-pointer">
              <FaInstagram className="text-xl" />
            </div>

            <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center cursor-pointer">
              <FaFacebookF className="text-blue-600 text-lg" />
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 text-black">
          {/* Footer Links */}
          <div className="flex flex-col text-black md:flex-row gap-12 md:gap-24 ">
            <ul className="space-y-4 text-[16px]">
              <li className="cursor-pointer hover:text-[#EA002A]">About Us</li>
              <li className="cursor-pointer hover:text-[#EA002A]">Mitao Bhook</li>
              <li className="cursor-pointer hover:text-[#EA002A]">Mitao Bhook - Scholarship</li>
              <li className="cursor-pointer hover:text-[#EA002A]">Privacy Policy</li>
              <li className="cursor-pointer hover:text-[#EA002A]">Careers</li>
            </ul>

            <ul className="space-y-4 text-[16px]">
              <li className="cursor-pointer hover:text-[#EA002A]">Contact Us</li>
              <li className="cursor-pointer hover:text-[#EA002A]">Store Locator</li>
              <li className="cursor-pointer hover:text-[#EA002A]">Track Order</li>
            </ul>

            <ul className="space-y-4 text-[16px]">
              <li className="cursor-pointer hover:text-[#EA002A]">Terms & Conditions</li>
            </ul>
          </div>

          {/* App Buttons */}
          <div className="flex flex-col gap-4 mr-50 mt-6">
            <Image
              src="/icons/Appstore.png"
              alt="App Store"
              width={150}
              height={45}
            />

            <Image
              src="/icons/googlestore.png"
              alt="Google Play"
              width={150}
              height={45}
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-16 gap-6 text-black">
          <p className="text-lg">
            2026 KFC. All rights reserved
          </p>

          <div className="text-left md:text-right ">
            <p className="text-red-600 font-bold mr-31">Powered by</p>
            <a href="#" className="underline">
              SimpleX Technology Solutions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}