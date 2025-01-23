'use client'
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-transparent text-white relative z-50">
      {/* Desktop Navbar */}
      <div className="hidden md:flex container w-[1320px] h-[87px]  mx-auto items-center justify-between py-4 px-6 relative z-10">
        {/* Links */}
        <ul className="flex space-x-6 text-sm font-medium">
          <li>
            <Link href="/" className="hover:underline hover:text-[#FF9F0D]">
              Home
            </Link>
          </li>
          <li>
            <Link href="/menu" className="hover:underline hover:text-[#FF9F0D]">
              Menu
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:underline hover:text-[#FF9F0D]">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/details" className="hover:underline hover:text-[#FF9F0D]">
              FAQ
            </Link>
          </li>
          <li>
            <Link href="/info" className="hover:underline hover:text-[#FF9F0D]">
              About
            </Link>
          </li>
          <li>
            <Link href="/carcard" className="hover:underline hover:text-[#FF9F0D]">
              Our Shop
            </Link>
          </li>
          <li>
            <Link href="/chefs" className="hover:underline hover:text-[#FF9F0D]">
              Our Chefs
            </Link>
          </li>
        </ul>

        {/* Logo */}
        <Link href="/" className="text-white text-[24px] mt-0 self-start font-medium">
          <span className="text-[#FF9F0D]">Food</span>tuck
        </Link>

        {/* Search and Cart */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border border-[#FF9F0D] text-white placeholder-white text-sm rounded-full pl-4 pr-10 py-1 w-[310px] h-[54px] text-[16px] font-400 focus:outline-none focus:ring-2 focus:ring-[#FF9F0D]"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-7 h-7 absolute font-400 top-1/2 transform -translate-y-1/2 right-3 text-[#FF9F0D]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <button>
            <Link href="/cart" className="text-white transition hover:underline hover:text-[#FF9F0D]">
              <i className="fa-solid fa-bag-shopping text-[20px]"></i>
            </Link>
          </button>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden">
        <div className="container mx-auto flex items-center justify-between py-4 px-4 relative z-50">
          {/* Logo */}
          <Link href="/" className="text-white text-[24px] font-medium">
            <span className="text-[#FF9F0D]">Food</span>tuck
          </Link>

          {/* Hamburger Menu */}
          <button
            className="text-white text-[24px] relative z-50" // Ensure the button is above all other elements
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="bg-transparent text-white py-4 px-6 z-40"> {/* Ensure this is below the button */}
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#FF9F0D]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/carcard"
                  className="hover:text-[#FF9F0D]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Our Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/chefs"
                  className="hover:text-[#FF9F0D]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Our Chefs
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="hover:text-[#FF9F0D]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Manu
                </Link>
              </li>
              <li>
                <Link
                  href="/info"
                  className="hover:text-[#FF9F0D]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-[#FF9F0D]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/cart"
                  className="hover:text-[#FF9F0D]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
