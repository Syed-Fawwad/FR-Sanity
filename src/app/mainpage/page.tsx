"use client";
import React from "react";
import Navbar from "../components/Navbar/page"; // Navbar import
import Footer from "../components/Footer/page"; // Footer import
import Chef from "../about/page"; // Chef page import
import Link from "next/link"; // Link from Next.js
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="w-full bg-[#0D0D0D] min-h-screen relative">
      {/* Navbar */}
      <Navbar />

      {/* Background Image */}
      <Image
        src="/home-bg.png"
        alt="Background"
        className="opacity-20 object-cover w-full h-[100vh] bg-center absolute top-0 left-0"
        width="1920"
        height="800"
      />

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-20 pt-10 relative z-10">
        {/* Sidebar Section */}
        <div className="hidden lg:flex lg:flex-col lg:items-center lg:space-y-6 lg:px-4 text-white">
          <div className="h-16 w-[1px] bg-gray-500"></div>
          <a href="#" className="hover:text-[#FF9F0D]">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-[#FF9F0D] hover:text-[#FF9F0D]">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-[#FF9F0D]">
            <i className="fab fa-pinterest"></i>
          </a>
          <div className="h-16 w-[1px] bg-gray-500"></div>
        </div>

        {/* Main Content */}
        <div className="text-white text-left max-w-lg md:max-w-none">
          <h3 className="text-[#FF9F0D] font-serif italic text-lg mb-2">
            It's Quick & Amusing!
          </h3>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            <span className="text-[#FF9F0D]">The</span> Art of <br /> speed food{" "}
            <span className="text-[#FF9F0D]">Quality </span>
          </h1>
          <p className="text-gray-400 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue
          </p>
          <Link href="menu">
            <button className="bg-[#FF9F0D] text-black font-semibold px-6 py-2 rounded-lg hover:bg-orange-500">
              See Menu
            </button>
          </Link>
        </div>

        {/* Right Circular Section */}
        <div className="relative flex justify-center items-center mt-8 md:mt-0">
          <Image src="/food.png" alt="food" width="800" height="800" />
        </div>
      </div>

      {/* main2 */}

      <div className="m-16">
        <div className=" text-white py-16 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="text-[#FF9F0D] font-semibold text-3xl font-serif">
                About us
              </h2>
              <h1 className="text-4xl font-bold">
                <span className="text-[#FF9F0D]"> We</span> Create the best
                foody product
              </h1>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non ullamcorper fringilla bibendum.
                Urna, elit augue urna, feugiat at semper.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 text-[#FF9F0D] mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Lorem nisi, et ac dapibus duis et elit in consequat.
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 text-[#FF9F0D] mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Quisque diam pellentesque bibendum non duis.
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 text-[#FF9F0D] mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
              </ul>
              <Link
                href="carcard"
                className="inline-block px-6 py-3 bg-[#FF9F0D] text-black font-semibold rounded-full hover:bg-yellow-500"
              >
                Read More
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <Image
                  className="w-full h-[250px] object-cover rounded"
                  src="/foodpic1.jpeg"
                  alt="Main food image"
                  width="500"
                  height="220"
                />
              </div>
              <div>
                <Image
                  className="w-full h-[120px] object-cover rounded"
                  src="/child1.png"
                  alt="Food image 1"
                  width="250"
                  height="120"
                />
              </div>
              <div>
                <Image
                  className="w-full h-[120px] object-cover rounded"
                  src="/child2.png"
                  alt="Food image 1"
                  width="250"
                  height="120"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* main 3 */}

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-center text-3xl font-semibold text-[#FF9F0D] mb-6">
          Food Category
        </h1>
        <h2 className="text-center text-4xl font-bold text-white mb-8">
          <span className="text-[#FF9F0D]">Ch</span>oose Food Item
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="relative bg-white shadow-lg rounded-sm overflow-hidden">
            <Image
              src="/food1.png"
              alt="Dish 1"
              className="w-full h-48 object-cover"
              width="250"
              height="48"
            />
            <div className="absolute top-2 left-2 bg-[#FF9F0D] text-white text-sm font-semibold py-1 px-3 rounded">
              Save 30%
            </div>
            <p className="absolute top-10 left-2 bg-gray-900 text-white text-xs py-1 px-2 rounded">
              Fast Food Dish
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-sm overflow-hidden">
            <Image
              src="/food2.png"
              alt="Dish 1"
              className="w-full h-48 object-cover"
              width="250"
              height="48"
            />
          </div>
          <div className="bg-white shadow-lg rounded-sm overflow-hidden">
            <Image
              src="/food3.png"
              alt="Dish 1"
              className="w-full h-48 object-cover"
              width="250"
              height="48"
            />
          </div>
          <div className="bg-white shadow-lg rounded-sm overflow-hidden">
            <Image
              src="/food4.png"
              alt="Dish 1"
              className="w-full h-48 object-cover"
              width="250"
              height="48"
            />
          </div>
        </div>

        {/* 2nd part */}
        <div className="max-w-7xl mt-16 mx-auto p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Image
                  src="/paratha.png"
                  alt="Tacos"
                  className="rounded-lg w-full"
                  height="400"
                  width="300"
                />
              </div>
              <div>
                <Image
                  src="/burger-real.png"
                  alt="Burger"
                  className="mt-8 rounded-lg w-full"
                  height="400"
                  width="300"
                />
              </div>
              <div>
                <Image
                  src="/kabab.png"
                  alt="Burger"
                  className="mt-8 rounded-lg w-full"
                  height="400"
                  width="300"
                />
              </div>
              <div>
                <Image
                  src="/cheezburger.png"
                  alt="Burger"
                  className="rounded-lg  h-40 object-cover w-full"
                  height="400"
                  width="300"
                />

                <Image
                  src="/Blog/recentpost3.jpeg"
                  alt="Cheeseburger"
                  className="rounded-lg mt-4 object-cover w-full"
                  width={640} // Width adjusted to your requirement
                  height={160} // Height adjusted to your requirement
                  layout="intrinsic" // Ensures correct aspect ratio
                />
              </div>
            </div>

            <div className="text-white">
              <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
              <h3 className="text-4xl font-bold text-white">
                <span className="text-[#FF9F0D]">Ex</span>traordinary Taste
                <br />
                And Experienced
              </h3>
              <p className="mt-4 text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat fringilla bibendum.
                Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              </p>
              <div className="flex mt-2 space-x-6">
                <div className="text-center">
                  <div className="bg-[#FF9F0D] p-3 rounded-sm items-center  inline-block">
                    <i className="fas fa-hamburger w-8 h-8 text-2xl text-white"></i>
                  </div>
                  <p className="mt-2 text-sm">Fast Food</p>
                </div>

                <div className="text-center">
                  <div className="bg-[#FF9F0D] p-3 rounded-sm items-center  inline-block">
                    <i className="fas fa-cookie-bite w-8 h-8 text-2xl text-white"></i>
                  </div>
                  <p className="mt-2 text-sm">Lunch</p>
                </div>

                <div className="text-center">
                  <div className="bg-[#FF9F0D] p-3 rounded-sm items-center inline-block">
                    <i className="fas fa-glass-martini-alt w-8 h-8 text-2xl text-white"></i>
                  </div>
                  <p className="mt-2 text-sm">Dinner</p>
                </div>
              </div>
              <div className="mt-8 flex items-center gap-3 rounded-sm h-12 w-52 bg-white">
                <div className="w-2 bg-[#FF9F0D] h-12"></div>
                <p className="text-2xl pl-2 font-bold text-[#FF9F0D]">30+</p>
                <p className="text-base text-black">
                  Years of <span className="font-extrabold">Experience</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* main page 4 */}
      <div
        className="relative h-80 bg-cover bg-center text-white flex items-center justify-center"
        style={{
          backgroundImage: "url('/about.png')",
          opacity: 0.9,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 text-center max-w-5xl mx-auto">
          <div className="group">
            <div className="text-3xl hidden lg:block sm:text-4xl md:text-5xl mb-2 transition duration-300 group-hover:scale-110 group-hover:text-yellow-400">
              🍳
            </div>
            <h3 className="text-sm hidden lg:block sm:text-lg md:text-xl font-extrabold uppercase tracking-wide transition duration-300 group-hover:text-yellow-400">
              Professional Chefs
            </h3>
            <p className="text-xl hidden lg:block sm:text-2xl md:text-3xl font-semibold mt-1 md:mt-2 group-hover:text-yellow-300">
              420
            </p>
          </div>
          <div className="group">
            <div className="text-3xl sm:text-4xl md:text-5xl mb-2 transition duration-300 group-hover:scale-110 group-hover:text-yellow-400">
              🍔
            </div>
            <h3 className="text-sm sm:text-lg md:text-xl font-extrabold uppercase tracking-wide transition duration-300 group-hover:text-yellow-400">
              Items Of Food
            </h3>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold mt-1 md:mt-2 group-hover:text-yellow-300">
              320
            </p>
          </div>
          <div className="group">
            <div className="text-3xl sm:text-4xl md:text-5xl mb-2 transition duration-300 group-hover:scale-110 group-hover:text-yellow-400">
              🍴
            </div>
            <h3 className="text-sm sm:text-lg md:text-xl font-extrabold uppercase tracking-wide transition duration-300 group-hover:text-yellow-400">
              Years Of Experience
            </h3>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold mt-1 md:mt-2 group-hover:text-yellow-300">
              30+
            </p>
          </div>
          <div className="group">
            <div className="text-3xl hidden lg:block sm:text-4xl md:text-5xl mb-2 transition duration-300 group-hover:scale-110 group-hover:text-yellow-400">
              🍕
            </div>
            <h3 className="text-sm hidden lg:block sm:text-lg md:text-xl font-extrabold uppercase tracking-wide transition duration-300 group-hover:text-yellow-400">
              Happy Customers
            </h3>
            <p className="text-xl hidden lg:block sm:text-2xl md:text-3xl font-semibold mt-1 md:mt-2 group-hover:text-yellow-300">
              220
            </p>
          </div>
        </div>
      </div>

      {/* // main 5 */}

      <div className="px-8 py-16  text-white">
        <div className="text-center mb-12">
          {/* <h2 className="text-3xl font-semibold text-yellow-500">Chefs</h2> */}
          <h3 className="text-4xl font-bold">
            Meet Our <span className="text-[#FF9F0D]">Chefs</span>
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className=" p-4 rounded-lg">
            <Image
              src="/chef1.png"
              alt="Chef D. Estwood"
              className="w-full h-64 object-cover rounded-t-lg"
              width="80"
              height="150"
            />
            <div className="mt-4">
              <h4 className="text-xl font-semibold">D. Estwood</h4>
              <p className="text-sm text-gray-400">Chief Chef</p>
            </div>
          </div>
          <div className=" p-4 rounded-lg">
            <Image
              src="/chef2.png"
              alt="Chef D. Estwood"
              className="w-full h-64 object-cover rounded-t-lg"
              width="80"
              height="150"
            />
            <div className="mt-4">
              <h4 className="text-xl font-semibold">D. Scoriesh</h4>
              <p className="text-sm text-gray-400">Assistant Chef</p>
            </div>
          </div>
          <div className=" p-4 rounded-lg">
            <Image
              src="/chef3.png"
              alt="Chef D. Estwood"
              className="w-full h-64 object-cover rounded-t-lg"
              width="80"
              height="150"
            />
            <div className="mt-4">
              <h4 className="text-xl font-semibold">M. William</h4>
              <p className="text-sm text-gray-400">Advertising Chef</p>
            </div>
          </div>
          <div className="p-4 rounded-lg">
            <Image
              src="/chef4.png"
              alt="Chef D. Estwood"
              className="w-full h-64 object-cover rounded-t-lg"
              width="80"
              height="150"
            />
            <div className="mt-4">
              <h4 className="text-xl font-semibold">W. Readfroad</h4>
              <p className="text-sm text-gray-400">Chef</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <button className="px-6 py-2 border-[#FF9F0D] bg-transparent border-[2px] text-white font-semibold rounded-full hover:bg-yellow-600 transition">
            <Link href="/chefs">See More</Link>
          </button>
        </div>
      </div>
      {/* main 6 */}

      <div className=" text-white py-10 px-4">
        <div className="max-w-xl mx-auto ">
          <h2 className="text-gold text-lg text-[#FF9F0D] font-medium mb-4">
            Testimonials
          </h2>
          <h3 className="text-2xl font-semibold mb-8">
            What our client are saying
          </h3>

          <div className="bg-white text-black p-6 rounded-lg relative shadow-md mt-10">
            <div className="absolute -top-12 mt-6 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full overflow-hidden border-4 border-white">
              <Image
                src="/profile.png"
                alt="profile"
                className="w-full h-full object-cover"
                width="50"
                height="50"
              />
            </div>

            <div className="mt-12 text-center">
              <p className="text-6xl text-[#FF9F0D] text-gold font-bold">99</p>
              <p className="text-gray-600 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non volutpat tristique tincidunt.
              </p>
            </div>

            <div className="mt-6">
              <div className="flex justify-center mt-2">
                <div className="flex space-x-1">
                  <span className="text-gold text-[#FF9F0D] text-xl">★</span>
                  <span className="text-gold text-[#FF9F0D] text-xl">★</span>
                  <span className="text-gold text-[#FF9F0D] text-xl">★</span>
                  <span className="text-gold text-[#FF9F0D] text-xl">★</span>
                  <span className="text-gold text-xl">★</span>
                </div>
              </div>
              <p className="font-medium text-center text-lg">Alaimin Hasan</p>
              <p className="text-sm text-center text-gray-500">
                Food Specialist
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            <span className="h-2 w-2 rounded-full bg-gold"></span>
            <span className="h-2 w-2 rounded-full bg-[#FF9F0D]"></span>
            <span className="h-2 w-2 rounded-full bg-[#FF9F0D]"></span>
            <span className="h-2 w-2 rounded-full bg-[#FF9F0D] opacity-20"></span>
          </div>
        </div>
      </div>

      {/* main 7 */}
      <div
        className="relative h-80 bg-cover bg-center text-white flex items-center px-8"
        style={{
          backgroundImage: "url('/kitchen.jpg')",
        }}
      >
        <div className="max-w-lg text-right  py-6 px-6 rounded-md shadow-lg ml-auto">
          <h3 className="text-lg font-semibold text-[#FF9F0D] uppercase tracking-wide mb-2">
            Restaurant Active Process
          </h3>
          <h1 className="text-3xl font-bold text-white mb-4">
            <span className="text-[#FF9F0D]">We</span> Document Every Food Bean
            Process until it is saved
          </h1>
          <p className="text-white text-sm mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque Bibendum non dui volutpat fringilla Bibendum. Ut
            ac augue urna.
          </p>
          <div className="flex justify-end gap-4">
            <Link href="carcard">
              <button className="border-[#FF9F0D] border-[2px] bg-transparent text-white font-medium py-2 px-4 rounded-full hover:bg-yellow-600">
                Read More
              </button>
            </Link>
            <button className="flex items-center bg-[#FF9F0D] text-gray-900 font-medium py-2 px-4 rounded hover:bg-gray-300">
              <span className="mr-2">Play Video</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-11.414v6.828a1 1 0 001.707.707l3.586-3.586a1 1 0 000-1.414L10.707 6.293A1 1 0 009 6.586z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* last */}

      <div className="flex justify-center items-center min-h-screen  text-white">
        <div className="w-full max-w-6xl px-4 py-8">
          <h2 className="text-center text-2xl font-bold text-[#FF9F0D]">
            Blog Post
          </h2>
          <h3 className="text-center text-4xl font-bold mb-8">
            <span className="text-[#FF9F0D]">La</span>test News & Blog
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-white border-[2px] overflow-hidden">
              <Image
                src="/card1.png"
                alt="Blog 1"
                className="w-full h-60 object-cover"
                height="60"
                width="70"
              />
              <div className="p-4">
                <p className="text-[#FF9F0D] text-xs mb-1">10 February 2022</p>
                <h4 className="text-lg font-semibold mb-3">
                  Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis
                </h4>
                <a href="#" className="text-[#FF9F0D] text-sm font-medium">
                  Learn More
                </a>
                <div className="flex justify-between mt-3 text-gray-500 text-xs">
                  <i className="fas fa-thumbs-up"></i>
                  <i className="fas fa-comment"></i>
                </div>
              </div>
            </div>
            <div className="  border-white border-[2px] overflow-hidden">
              <Image
                src="/card2.png"
                alt="Blog 1"
                className="w-full h-60 object-cover"
                height="60"
                width="70"
              />
              <div className="p-4">
                <p className="text-[#FF9F0D] text-xs mb-1">10 February 2022</p>
                <h4 className="text-lg font-semibold mb-3">
                  Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A
                </h4>
                <a href="#" className="text-[#FF9F0D] text-sm font-medium">
                  Learn More
                </a>
                <div className="flex justify-between mt-3 text-gray-500 text-xs">
                  <i className="fas fa-thumbs-up"></i>
                  <i className="fas fa-comment"></i>
                </div>
              </div>
            </div>
            <div className=" border-white border-[2px]  overflow-hidden">
              <Image
                src="/card3.png"
                alt="Blog 1"
                className="w-full h-60 object-cover"
                height="60"
                width="70"
              />
              <div className="p-4">
                <p className="text-yellow-400 text-xs mb-1">10 February 2022</p>
                <h4 className="text-lg font-semibold mb-3">
                  Curabitur rutrum velit ac congue malesuada
                </h4>
                <a href="#" className="text-yellow-400 text-sm font-medium">
                  Learn More
                </a>
                <div className="flex justify-between mt-3 text-gray-500 text-xs">
                  <i className="fas fa-thumbs-up"></i>
                  <i className="fas fa-comment"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
