import React from 'react'
import Com from '../components/CommonNav/page'
import Footer from '../components/Footer/page'
import Link from 'next/link'
import Image from 'next/image'

const info = () => {
  return (
    <div className='bg-[#0D0D0D]'>
      <Com/>
 {/* Full-Screen Header Image Section */}
 <div className="relative">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css" />

        <Image
                 src="/heropic.png"
                 alt="Sign-in Header"
                 className="w-full h-[410px] object-cover"
                 width="1920"
                 height="410"
               />

        {/* Text Overlay on the Image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
          <h1 className="text-2xl md:text-4xl font-extrabold mb-2">About Us</h1>
          <p className="text-sm md:text-lg mb-2">
            Home / <span className="text-[#FF9F0D]">About Us</span>
          </p>
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




      <Footer/>
    </div>
  )
}

export default info
