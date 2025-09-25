import Link from "next/link";
import React, { useState } from "react";
import { NavIcon1, NavIcon2 } from "../../../public/icons/icon";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 lg:p-12 bg-[#faf2fe] md:px-24 relative">
      {/* Left Section: Logo */}
      <Link href="/" aria-label="Go to homepage">
        <div className="flex cursor-pointer items-center space-x-2 lg:space-x-3">
          <div className="max-w-[244px]">
            <NavIcon1 />
          </div>
          <div className="border-l-2 border-[#00000033] pl-3">
            <NavIcon2 />
          </div>
        </div>
      </Link>

      {/* Desktop Right Section */}
      <div className="hidden md:flex items-center space-x-6">
        <div className="text-right">
          <p className="text-[14px] text-[#29357299] md:text-[18px]">
            For Free Counselling Contact
          </p>
          <Link href="tel:+918792358999">
            <p className="text-[14px] font-semibold text-[#293572] md:text-[18px]">
              +91 879 235 8999
            </p>
          </Link>
        </div>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
          aria-label="Toggle menu"
        >
          {/* Hamburger icon */}
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-gray-800"></span>
            <span className="block w-6 h-0.5 bg-gray-800"></span>
            <span className="block w-6 h-0.5 bg-gray-800"></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
  <div className="fixed inset-0 z-[9999999999999999999999999999999] bg-[#faf2fe] flex flex-col items-center justify-center space-y-8 md:hidden">
    {/* Close Button */}
    <button
      onClick={() => setIsOpen(false)}
      className="absolute top-5 right-5 focus:outline-none"
      aria-label="Close menu"
    >
      <span className="text-3xl font-bold text-[#293572]">×</span>
    </button>

    {/* Menu Links */}
    <Link href="/about-us">
      <p className="text-2xl text-[#293572] font-bold cursor-pointer hover:text-[#CEB3FE]">
        About Us
      </p>
    </Link>
    <Link href="/contact-us">
      <p className="text-2xl text-[#293572] font-bold cursor-pointer hover:text-[#CEB3FE]">
        Contact Us
      </p>
    </Link>
  </div>
)}

    </nav>
  );
};

export default Navbar;
