'use client'

import React, { useState } from 'react';
import Link from 'next/link';

const Com = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css"
      />

      <nav className="bg-[#0d0d0d] text-white py-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold">
            Food<span className="text-[#FF9F0D]">tuck</span>
          </a>

          {/* Navigation Links (Desktop) */}
          <ul className="hidden md:flex space-x-6 text-sm font-medium">
            <li>
              <Link href="/mainpage" className="hover:underline hover:text-[#FF9F0D]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline hover:text-[#FF9F0D]">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/carcard" className="hover:underline hover:text-[#FF9F0D]">
                Our Shop
              </Link>
            </li>
            <li>
              <Link href="/info" className="hover:underline hover:text-[#FF9F0D]">
                About
              </Link>
            </li>
            <li>
              <Link href="/chefs" className="hover:underline hover:text-[#FF9F0D]">
                Our Chefs
              </Link>
            </li>
            <li>
              <Link href="/menu" className="hover:underline hover:text-[#FF9F0D]">
                Menu
              </Link>
            </li>
          </ul>

          {/* Icons (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-white hover:text-[#FF9F0D] transition">
              <i className="fas fa-search"></i>
            </a>
            <Link
              href="/signup"
              className="text-white transition hover:underline hover:text-[#FF9F0D]"
            >
              <i className="far fa-user"></i>
            </Link>
            <Link
              href="/cart"
              className="text-white transition hover:underline hover:text-[#FF9F0D]"
            >
              <i className="fas fa-shopping-cart"></i>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#0d0d0d] text-white py-6 px-4">
            {/* Mobile Menu Items */}
            <ul className="space-y-4 text-center">
              <li>
                <Link
                  href="/mainpage"
                  className="block hover:text-[#FF9F0D]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="block hover:text-[#FF9F0D]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/carcard"
                  className="block hover:text-[#FF9F0D]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Our Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/info"
                  className="block hover:text-[#FF9F0D]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/chefs"
                  className="block hover:text-[#FF9F0D]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Our Chefs
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="block hover:text-[#FF9F0D]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Menu
                </Link>
              </li>
            </ul>

            {/* Icons for Mobile */}
            <div className="flex justify-center mt-6 space-x-8">
              <a href="#" className="text-white hover:text-[#FF9F0D] transition">
                <i className="fas fa-search text-xl"></i>
              </a>
              <Link
                href="/signup"
                className="text-white transition hover:text-[#FF9F0D]"
              >
                <i className="far fa-user text-xl"></i>
              </Link>
              <Link
                href="/cart"
                className="text-white transition hover:text-[#FF9F0D]"
              >
                <i className="fas fa-shopping-cart text-xl"></i>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Com;