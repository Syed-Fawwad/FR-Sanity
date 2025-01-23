import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0D0D0D] text-gray-300 font-sans">
      {/* "Still Need Our Support?" Section */}
      <div className="container mx-auto py-10 px-6 mt-10">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css" />
        <div className="flex flex-wrap items-center justify-between">
          {/* Left-aligned Heading and Text */}
          <div className="text-left mb-6 md:mb-0">
            <h2 className="text-xl text-white font-bold">
              <span className="text-[#FF9F0D]">st</span>ill Need Our Support?
            </h2>
            <p className="text-sm text-gray-400 mt-2">
              Dont wait, make a smart & logical quote here. It's pretty easy.
            </p>
          </div>
          {/* Right-aligned Input and Button */}
          <div className="flex w-full md:w-auto items-center">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="px-4 py-2 w-full md:w-auto rounded-l text-opacity-55 bg-[#FF9F0D] text-white focus:outline-none"
            />
            <button className="px-4 py-2 bg-white text-[#FF9F0D] rounded-r hover:bg-orange-600">
              Subscribe Now
            </button>
          </div>
        </div>
        {/* Divider Line */}
        <hr className="border-[#FF9F0D] my-8" />
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto pb-14 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Us */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold text-lg mt-4">About Us</h4>
          <p>
            Corporate clients and leisure travelers have been relying on
            Groundlink for dependable, safe, and professional chauffeured car
            service in major cities across the world.
          </p>
          <div className="flex items-center space-x-2">
            <div className="w-14 h-14 border rounded-sm border-[#FF9F0D] bg-[#FF9F0D] flex justify-center items-center">
              <span className="text-white text-[25px] font-bold">
                <i className="fa-regular fa-clock"></i>
              </span>
            </div>
            <p className="text-sm">
              Mon - Sat (8.00 - 6.00) <br />
              Sunday - Closed
            </p>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-white font-semibold text-lg mt-4">Useful Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                News
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Partners
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Team
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="text-white font-semibold text-lg mt-4">Help?</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Reporting
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Documentation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Support Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Recent Posts */}
        <div>
          <h4 className="text-white font-semibold text-lg mt-4">Recent Posts</h4>
          <ul className="space-y-4">
            <li className="flex gap-4 items-center">
              <Image
                src="/recentPost.png"
                alt="Post thumbnail"
                className="w-16 h-16 object-cover rounded"
                width={64}
                height={64}
              />
              <div>
                <h5 className="text-sm hover:text-white">
                  Is fast food good for your body?
                </h5>
                <p className="text-xs text-gray-400">February 28, 2022</p>
              </div>
            </li>
            <li className="flex gap-4 items-center">
            <Image
                src="/recentPost.png"
                alt="Post thumbnail"
                className="w-16 h-16 object-cover rounded"
                width={64}
                height={64}
              />
              <div>
                <h5 className="text-sm hover:text-white">
                  Change your food habit with organic food
                </h5>
                <p className="text-xs text-gray-400">February 28, 2022</p>
              </div>
            </li>
            <li className="flex gap-4 items-center">
            <Image
                src="/recentPost.png"
                alt="Post thumbnail"
                className="w-16 h-16 object-cover rounded"
                width={64}
                height={64}
              />
              <div>
                <h5 className="text-sm hover:text-white">
                  Benefits of a plant-based diet
                </h5>
                <p className="text-xs text-gray-400">February 28, 2022</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#4f4f4f] py-6 mt-8">
        <div className="container mx-auto flex flex-wrap justify-between items-center px-6">
          <p className="text-sm">Copyright© 2024 Your Company. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-[#4f4f4f] h-8 w-8 rounded-[4px] bg-white items-center flex justify-center">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-[#4f4f4f] h-8 w-8 rounded-[4px] bg-white items-center flex justify-center">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-[#4f4f4f] h-8 w-8 rounded-[4px] bg-white items-center flex justify-center">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-[#FF9F0D] h-8 w-8 rounded-[4px] bg-white items-center flex justify-center">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="#" className="text-[#4f4f4f] h-8 w-8 rounded-[4px] bg-white items-center flex justify-center">
              <i className="fa-brands fa-pinterest"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
