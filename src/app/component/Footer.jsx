

import Image from "next/image";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1c1816] text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-10">

          {/* Logo + Social */}
          <div className="flex flex-col items-start gap-8">
            <Image
              src="/images/kfc-logo.png"
              alt="KFC Logo"
              width={80}
              height={80}
            />

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center cursor-pointer hover:bg-red-600 transition">
                <FaYoutube size={20} />
              </div>

              <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center cursor-pointer hover:bg-red-600 transition">
                <FaInstagram size={20} />
              </div>

              <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center cursor-pointer hover:bg-red-600 transition">
                <FaFacebookF size={20} />
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1">

            <div className="flex flex-col gap-3 text-sm">
              <a href="#" className="hover:text-red-500">About Us</a>
              <a href="#" className="hover:text-red-500">Mitao Bhook</a>
              <a href="#" className="hover:text-red-500">
                Mitao Bhook - Scholarship
              </a>
              <a href="#" className="hover:text-red-500">Privacy Policy</a>
              <a href="#" className="hover:text-red-500">Careers</a>
            </div>

            <div className="flex flex-col gap-3 text-sm">
              <a href="#" className="hover:text-red-500">Contact Us</a>
              <a href="#" className="hover:text-red-500">Store Locator</a>
              <a href="#" className="hover:text-red-500">Track Order</a>
            </div>

            <div className="flex flex-col gap-3 text-sm">
              <a href="#" className="hover:text-red-500">
                Terms & Conditions
              </a>
            </div>

            {/* App Buttons */}
            <div className="flex flex-col gap-4">
              <Image
                src="/images/app-store.png"
                alt="App Store"
                width={150}
                height={50}
              />

              <Image
                src="/images/google-play.png"
                alt="Google Play"
                width={150}
                height={50}
              />
            </div>

          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">

          <p>© 2026 KFC. All rights reserved.</p>

          <div className="flex gap-2">
            <span>Powered by</span>
            <a
              href="#"
              className="text-white hover:text-red-500 transition"
            >
              SimpleX Technology Solutions
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}