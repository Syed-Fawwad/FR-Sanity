import React from 'react'
import Com from '../components/CommonNav/page'
import Footer from '../components/Footer/page'
import Image from 'next/image'

const menu = () => {
  return (
    <div>
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
          <h1 className="text-2xl md:text-4xl font-extrabold mb-2">Our Menu</h1>
          <p className="text-sm md:text-lg mb-2">
            Home / <span className="text-[#FF9F0D]">Menu</span>
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-24 py-8">
  {/* Starter Menu */}
  <div className="grid grid-cols-1 md:grid-cols-2  mb-8">
    <div>
    <Image
  src="/foodpic1.jpeg"
  alt="Starter Dish"
  className="object-cover mx-auto rounded-sm shadow-md"
  width={240} // Or any width that suits your design
  height={336} // Maintain aspect ratio
  layout="intrinsic"
/>
    </div>
    <div className="flex flex-col justify-center">
      <h2 className="text-xl font-bold text-gray-800 mb-3">Starter Menu</h2>
      <ul className="space-y-2">
        <li className="flex justify-between items-start">
          <div>
            <h3 className="text-base font-semibold text-gray-700">
              Alder Grilled Chinook Salmon
            </h3>
            <p className="text-gray-500 text-sm">
              Toasted French bread topped with salmon, chives
            </p>
            <span className="text-gray-400 text-xs">580 CAL</span>
          </div>
          <span className="text-yellow-500 text-sm font-bold">325$</span>
        </li>
        <li className="flex justify-between items-start">
          <div>
            <h3 className="text-base font-semibold text-gray-700">
              Berries and creme tart
            </h3>
            <p className="text-gray-500 text-sm">
              Grapeskin, ricotta, mozzarella, taleggio
            </p>
            <span className="text-gray-400 text-xs">700 CAL</span>
          </div>
          <span className="text-yellow-500 text-sm font-bold">435$</span>
        </li>
        <li className="flex justify-between items-start">
          <div>
            <h3 className="text-base font-semibold text-gray-700">
              Tormentoso Bush Pizza Pinotage
            </h3>
            <p className="text-gray-500 text-sm">
              Ground cumin, avocado, peeled and cubed
            </p>
            <span className="text-gray-400 text-xs">1000 CAL</span>
          </div>
          <span className="text-yellow-500 text-sm font-bold">145$</span>
        </li>
        <li className="flex justify-between items-start">
          <div>
            <h3 className="text-base font-semibold text-gray-700">
              Spicy Vegan Potato Curry
            </h3>
            <p className="text-gray-500 text-sm">
              Spreadable cream cheese, crushed blue cheese
            </p>
            <span className="text-gray-400 text-xs">560 CAL</span>
          </div>
          <span className="text-yellow-500 text-sm font-bold">355$</span>
        </li>
      </ul>
    </div>
  </div>

  {/* Main Course */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="flex flex-col justify-center">
      <h2 className="text-xl font-bold text-gray-800 mb-3">Main Course</h2>
      <ul className="space-y-2">
        <li className="flex justify-between items-start">
          <div>
            <h3 className="text-base font-semibold text-gray-700">
              Optic Big Breakfast Combo Menu
            </h3>
            <p className="text-gray-500 text-sm">
              Toasted French bread topped with romesco, cheddar
            </p>
            <span className="text-gray-400 text-xs">560 CAL</span>
          </div>
          <span className="text-yellow-500 text-sm font-bold">325$</span>
        </li>
        <li className="flex justify-between items-start">
          <div>
            <h3 className="text-base font-semibold text-gray-700">
              Cashew Chicken With Stir-Fry
            </h3>
            <p className="text-gray-500 text-sm">
              Grapeskin, ricotta, mozzarella, taleggio
            </p>
            <span className="text-gray-400 text-xs">700 CAL</span>
          </div>
          <span className="text-yellow-500 text-sm font-bold">435$</span>
        </li>
        <li className="flex justify-between items-start">
          <div>
            <h3 className="text-base font-semibold text-gray-700">
              Vegetables & Green Salad
            </h3>
            <p className="text-gray-500 text-sm">
              Ground cumin, avocado, peeled and cubed
            </p>
            <span className="text-gray-400 text-xs">1000 CAL</span>
          </div>
          <span className="text-yellow-500 text-sm font-bold">145$</span>
        </li>
        <li className="flex justify-between items-start">
          <div>
            <h3 className="text-base font-semibold text-gray-700">
              Spicy Vegan Potato Curry
            </h3>
            <p className="text-gray-500 text-sm">
              Spreadable cream cheese, crushed blue cheese
            </p>
            <span className="text-gray-400 text-xs">560 CAL</span>
          </div>
          <span className="text-yellow-500 text-sm font-bold">355$</span>
        </li>
      </ul>
    </div>
    <div>
    <Image
  src="/mainCourse.png"
  alt="Starter Dish"
  className="object-cover mx-auto rounded-sm shadow-md"
  width={240} // Or any width that suits your design
  height={336} // Maintain aspect ratio
  layout="intrinsic"
/>
    </div>
  </div>
</div>



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
    <div className="text-3xl hidden lg:block sm:text-4xl md:text-5xl mb-2 transition duration-300 group-hover:scale-110 group-hover:text-yellow-400">🍳</div>
    <h3 className="text-sm hidden lg:block sm:text-lg md:text-xl font-extrabold uppercase tracking-wide transition duration-300 group-hover:text-yellow-400">
      Professional Chefs
    </h3>
    <p className="text-xl hidden lg:block sm:text-2xl md:text-3xl font-semibold mt-1 md:mt-2 group-hover:text-yellow-300">420</p>
  </div>
  <div className="group">
    <div className="text-3xl sm:text-4xl md:text-5xl mb-2 transition duration-300 group-hover:scale-110 group-hover:text-yellow-400">🍔</div>
    <h3 className="text-sm sm:text-lg md:text-xl font-extrabold uppercase tracking-wide transition duration-300 group-hover:text-yellow-400">
      Items Of Food
    </h3>
    <p className="text-xl sm:text-2xl md:text-3xl font-semibold mt-1 md:mt-2 group-hover:text-yellow-300">320</p>
  </div>
  <div className="group">
    <div className="text-3xl sm:text-4xl md:text-5xl mb-2 transition duration-300 group-hover:scale-110 group-hover:text-yellow-400">🍴</div>
    <h3 className="text-sm sm:text-lg md:text-xl font-extrabold uppercase tracking-wide transition duration-300 group-hover:text-yellow-400">
      Years Of Experience
    </h3>
    <p className="text-xl sm:text-2xl md:text-3xl font-semibold mt-1 md:mt-2 group-hover:text-yellow-300">30+</p>
  </div>
  <div className="group">
    <div className="text-3xl hidden lg:block sm:text-4xl md:text-5xl mb-2 transition duration-300 group-hover:scale-110 group-hover:text-yellow-400">🍕</div>
    <h3 className="text-sm hidden lg:block sm:text-lg md:text-xl font-extrabold uppercase tracking-wide transition duration-300 group-hover:text-yellow-400">
      Happy Customers
    </h3>
    <p className="text-xl hidden lg:block sm:text-2xl md:text-3xl font-semibold mt-1 md:mt-2 group-hover:text-yellow-300">220</p>
  </div>
</div>
</div>

<div className="max-w-5xl mx-auto px-24 py-8">
  {/* Starter Menu */}
  <div className="grid grid-cols-1 md:grid-cols-2  mb-8">
    <div>
    <Image
  src="/menu.png"
  alt="Starter Dish"
  className="object-cover mx-auto rounded-sm shadow-md"
  width={240} // Or any width that suits your design
  height={336} // Maintain aspect ratio
  layout="intrinsic"
/>
    </div>
    <div className="flex flex-col justify-center">
      <h2 className="text-xl font-bold text-gray-800 mb-3">Starter Menu</h2>
      <ul className="space-y-2">
        <li className="flex justify-between items-start">
          <div>
            <h3 className="text-base font-semibold text-gray-700">
              Alder Grilled Chinook Salmon
            </h3>
            <p className="text-gray-500 text-sm">
              Toasted French bread topped with salmon, chives
            </p>
            <span className="text-gray-400 text-xs">580 CAL</span>
          </div>
          <span className="text-yellow-500 text-sm font-bold">325$</span>
        </li>
        <li className="flex justify-between items-start">
          <div>
            <h3 className="text-base font-semibold text-gray-700">
              Berries and creme tart
            </h3>
            <p className="text-gray-500 text-sm">
              Grapeskin, ricotta, mozzarella, taleggio
            </p>
            <span className="text-gray-400 text-xs">700 CAL</span>
          </div>
          <span className="text-yellow-500 text-sm font-bold">435$</span>
        </li>
        <li className="flex justify-between items-start">
          <div>
            <h3 className="text-base font-semibold text-gray-700">
              Tormentoso Bush Pizza Pinotage
            </h3>
            <p className="text-gray-500 text-sm">
              Ground cumin, avocado, peeled and cubed
            </p>
            <span className="text-gray-400 text-xs">1000 CAL</span>
          </div>
          <span className="text-yellow-500 text-sm font-bold">145$</span>
        </li>
        <li className="flex justify-between items-start">
          <div>
            <h3 className="text-base font-semibold text-gray-700">
              Spicy Vegan Potato Curry
            </h3>
            <p className="text-gray-500 text-sm">
              Spreadable cream cheese, crushed blue cheese
            </p>
            <span className="text-gray-400 text-xs">560 CAL</span>
          </div>
          <span className="text-yellow-500 text-sm font-bold">355$</span>
        </li>
      </ul>
    </div>
  </div>

  {/* Main Course */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="flex flex-col justify-center">
      <h2 className="text-xl font-bold text-gray-800 mb-3">Dessert</h2>
      <ul className="space-y-2">
        <li className="flex justify-between items-start">
          <div>
            <h3 className="text-base font-semibold text-gray-700">
              Optic Big Breakfast Combo Menu
            </h3>
            <p className="text-gray-500 text-sm">
              Toasted French bread topped with romesco, cheddar
            </p>
            <span className="text-gray-400 text-xs">560 CAL</span>
          </div>
          <span className="text-yellow-500 text-sm font-bold">325$</span>
        </li>
        <li className="flex justify-between items-start">
          <div>
            <h3 className="text-base font-semibold text-gray-700">
              Cashew Chicken With Stir-Fry
            </h3>
            <p className="text-gray-500 text-sm">
              Grapeskin, ricotta, mozzarella, taleggio
            </p>
            <span className="text-gray-400 text-xs">700 CAL</span>
          </div>
          <span className="text-yellow-500 text-sm font-bold">435$</span>
        </li>
        <li className="flex justify-between items-start">
          <div>
            <h3 className="text-base font-semibold text-gray-700">
              Vegetables & Green Salad
            </h3>
            <p className="text-gray-500 text-sm">
              Ground cumin, avocado, peeled and cubed
            </p>
            <span className="text-gray-400 text-xs">1000 CAL</span>
          </div>
          <span className="text-yellow-500 text-sm font-bold">145$</span>
        </li>
        <li className="flex justify-between items-start">
          <div>
            <h3 className="text-base font-semibold text-gray-700">
              Spicy Vegan Potato Curry
            </h3>
            <p className="text-gray-500 text-sm">
              Spreadable cream cheese, crushed blue cheese
            </p>
            <span className="text-gray-400 text-xs">560 CAL</span>
          </div>
          <span className="text-yellow-500 text-sm font-bold">355$</span>
        </li>
      </ul>
    </div>
    <div>
    <Image
  src="/dessert.png"
  alt="Starter Dish"
  className="object-cover mx-auto rounded-sm shadow-md"
  width={240} // Or any width that suits your design
  height={336} // Maintain aspect ratio
  layout="intrinsic"
/>
    </div>
  </div>
</div>

      <Footer/>
    </div>
  )
}

export default menu
