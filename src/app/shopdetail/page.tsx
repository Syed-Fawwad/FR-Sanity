import React from "react";

import Image from "next/image";
import Footer from "../components/Footer/page";
import Com from "../components/CommonNav/page";

const ShoppingDetail = () => {
  return (
    <div>
      <Com />

      {/* Full-Screen Header Image Section */}
      <div className="relative">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css"
        />

        <Image
          src="/heropic.png"
          alt="Sign-in Header"
          width={1920}
          height={410}
          className="object-cover"
        />

        {/* Text Overlay on the Image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
          <h1 className="text-2xl md:text-4xl font-extrabold mb-2">
            Shop Details
          </h1>
          <p className="text-sm md:text-lg mb-2">
            Home / <span className="text-[#FF9F0D]">Shop Details</span>
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {/* Main Section */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Left Section: Product Images */}

          <div className="flex flex-col space-y-2">
            {["slide1.png", "slide2.png", "slide3.png", "slide4.png"].map(
              (src, index) => (
                <div
                  key={index}
                  className="w-24 h-24 border border-gray-300 rounded-md overflow-hidden cursor-pointer"
                >
                  <Image
                    src={`/shop-detail/${src}`} // Updated path to images inside shop-detail folder
                    alt={`Thumbnail ${index + 1}`}
                    width={96} // Adjusted width for the 24x24 size
                    height={96} // Adjusted height for the 24x24 size
                    className="object-cover"
                  />
                </div>
              )
            )}
          </div>
          {/* Main Image */}
          <div className="flex-1">
            <Image
              src="/shop-detail/slidebgpic.png" // Updated path to image inside shop-detail folder
              alt="Main Product"
              width={1920} // Adjusted width for main image
              height={800} // Adjusted height for main image (you can adjust this value)
              className="w-full h-full object-cover rounded-md"
              style={{
                height: "calc(5 * 5rem + 8px)", // Adjust height as needed
              }}
            />
          </div>

          {/* Right Section: Product Details */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm bg-yellow-500 text-white px-2 py-1 rounded-md">
                In Stock
              </span>
              <div className="flex items-center space-x-4">
                <button className="text-gray-500 flex items-center space-x-1">
                  <i className="fas fa-chevron-left"></i>
                  <span>Prev</span>
                </button>
                <button className="text-gray-500 flex items-center space-x-1">
                  <span>Next</span>
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-4">Yummy Chicken Chup</h1>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum ut tristique et egestas quis. Nulla
              facilisi. Urna, vitae feugiat pretium donec id elementum. Ut
              mattis sed vitae mus risus.
            </p>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex space-x-1 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
              <p className="text-gray-600">
                <span className="font-semibold">5.0</span> | 22 reviews
              </p>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-4">$54.00</div>
            <div className="text-sm text-gray-500 mb-4">
              Dictum/Cursus/Risus
            </div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center border border-gray-300 rounded">
                <button className="px-3 py-2 text-gray-700">-</button>
                <input
                  type="text"
                  className="w-12 text-center border-l border-r border-gray-300"
                  defaultValue="1"
                />
                <button className="px-3 py-2 text-gray-700">+</button>
              </div>
              <button className="bg-yellow-500 text-white px-6 py-3 rounded hover:bg-yellow-600">
                Add to Cart
              </button>
            </div>
            <div className="flex items-center space-x-4 mb-4">
              <button className="flex items-center space-x-1 text-gray-500">
                <i className="fas fa-heart"></i>
                <span>Add to Wishlist</span>
              </button>
              <button className="flex items-center space-x-1 text-gray-500">
                <i className="fas fa-exchange-alt"></i>
                <span>Compare</span>
              </button>
            </div>
            <div className="text-sm text-gray-500 mb-2">
              Category: <span className="font-medium">Pizza</span>
            </div>
            <div className="text-sm text-gray-500 mb-6">
              Tag: <span className="font-medium">Our Shop</span>
            </div>
            <div className="mb-6">
              <p className="text-sm font-medium text-gray-500 mb-2">Share:</p>
              <div className="flex space-x-4">
                <button className="text-gray-500">
                  <i className="fab fa-facebook-square text-xl"></i>
                </button>
                <button className="text-gray-500">
                  <i className="fab fa-twitter-square text-xl"></i>
                </button>
                <button className="text-gray-500">
                  <i className="fab fa-instagram text-xl"></i>
                </button>
                <button className="text-gray-500">
                  <i className="fab fa-linkedin text-xl"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Description and Reviews */}
        <div className="mt-12">
          <div className="flex items-center space-x-8 border-b border-gray-300 pb-2 mb-6">
            <button className="text-lg font-medium text-gray-900">
              Description
            </button>
            <button className="text-lg font-medium text-gray-500">
              Reviews (24)
            </button>
          </div>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            This is the detailed description of the product. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Viverra orci sagittis
            eu volutpat odio. Faucibus interdum posuere lorem ipsum.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>High-quality product</li>
            <li>Made from fresh ingredients</li>
            <li>Available for quick delivery</li>
            <li>Special discounts for bulk orders</li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ShoppingDetail;
