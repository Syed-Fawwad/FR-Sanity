import React from 'react'
import Com from '../components/CommonNav/page'
import Footer from '../components/Footer/page'
import Image from 'next/image'

const blog = () => {
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
          <h1 className="text-2xl md:text-4xl font-extrabold mb-2">Blog List</h1>
          <p className="text-sm md:text-lg mb-2">
            Home / <span className="text-[#FF9F0D]">Blog List</span>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-5">
  {/* Main Layout */}
  <div className="flex flex-wrap gap-6">
    {/* Left Section */}
    <div className="flex-1 min-w-[65%] space-y-6">
      {/* 4 Posts with Unique Images */}
      {[
        { imageUrl: "/Blog/blogmain1.jpeg", title: "Post 1" },
        { imageUrl: "/Blog/blogmain2.jpeg", title: "Post 2" },
        { imageUrl: "/Blog/blogmain3.jpeg", title: "Post 3" },
        { imageUrl: "/Blog/blogmain4.jpeg", title: "Post 4" },
      ].map((post, index) => (
        <div key={index} className="border rounded-lg overflow-hidden">
          <div className="relative">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-[300px] object-cover"
            />
            <div className="absolute top-2 left-2 bg-[#FF9F0D] text-white px-3 py-1 rounded-md">
              14 Feb
            </div>
          </div>
          <div className="p-4">
          <div className="flex items-center text-[#FF9F0D] text-sm space-x-4 mb-4">
              <span className="flex items-center space-x-1">
                <i className="fa fa-calendar"></i>
                <span>Feb 14, 2022</span>
              </span>
              <span className="flex items-center space-x-1">
                <i className="fa fa-comments"></i>
                <span>3 Comments</span>
              </span>
              <span className="flex items-center space-x-1">
                <i className="fa fa-user"></i>
                <span>Admin</span>
              </span>
            </div>
            <h2 className="text-lg font-bold mb-2">
              {post.title} - 10 Reasons To Do A Digital Detox Challenge
            </h2>
           
            <p className="mb-4">
              At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum.
            </p>
            <button className="bg-transparent border-[2px] border-[#FF9F0D] text-[#FF9F0D] py-2 px-4 rounded-sm">
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>

   {/* Right Section */}
<div className="flex-[0.35] hidden lg:block min-w-[30%] space-y-6">
  {/* Search Input */}
  <div className="w-full flex justify-center mb-6">
    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden w-full max-w-lg">
      <input
        type="text"
        placeholder="Search Your Keyword.."
        className="flex-grow px-4 py-2 text-gray-700 focus:outline-none"
      />
      <button className="bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600">
        <i className="fas fa-search"></i>
      </button>
    </div>
  </div>

  <div className="w-full flex justify-center items-center mx-auto my-8 max-w-lg"> {/* Adjusted max-width */}
    {/* Profile Section */}
    <div className="flex flex-col space-y-6 w-full"> {/* Removed md:w-[60%] */}
      <div className="text-center border p-6 rounded-lg shadow-lg">
      <Image
  src="/Blog/righside mainpic.jpeg"
  alt="Profile"
  className="w-24 h-24 mx-auto rounded-full object-cover"
  width={96} // Match Tailwind size
  height={96} // Match Tailwind size
/>
        <h2 className="text-lg font-bold mt-4">Prince Miyako</h2>
        <p className="text-gray-500">Blogger/Photographer</p>
        <div className="flex justify-center mt-2">
          <span className="text-[#FF9F0D]">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
          <p className="ml-2 text-sm text-gray-500">(1 Review)</p>
        </div>
        <p className="text-gray-600 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Veritatis
          distinction, odio eligendi suscipit reprehenderit atque.
        </p>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="#" className="text-gray-500 hover:text-black">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-black">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-black">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-black">
            <i className="fab fa-pinterest"></i>
          </a>
        </div>
      </div>
    </div>
  </div>



  <div className="p-4">
  {/* Recent Post Section */}
  <div className="mb-8">
    <h2 className="text-lg font-bold mb-4">Recent Post</h2>
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 bg-[url('/Blog/recentpost1.jpeg')] bg-cover bg-center"></div>
        <div>
          <p className="text-sm text-gray-500">June 22, 2020</p>
          <p className="text-base font-medium">Lorem ipsum dolor sit cing elit, sed do.</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 bg-[url('/Blog/recentpost2.jpeg')] bg-cover bg-center"></div>
        <div>
          <p className="text-sm text-gray-500">June 22, 2020</p>
          <p className="text-base font-medium">Lorem ipsum dolor sit cing elit, sed do.</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 bg-[url('/Blog/recentpost3.jpeg')] bg-cover bg-center"></div>
        <div>
          <p className="text-sm text-gray-500">June 22, 2020</p>
          <p className="text-base font-medium">Lorem ipsum dolor sit cing elit, sed do.</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 bg-[url('/Blog/recentpost4.jpeg')] bg-cover bg-center"></div>
        <div>
          <p className="text-sm text-gray-500">June 22, 2020</p>
          <p className="text-base font-medium">Lorem ipsum dolor sit cing elit, sed do.</p>
        </div>
      </div>
    </div>
  </div>

  {/* Filter By Menu Section */}
  <div>
    <h2 className="text-lg font-bold mb-4">Filter By Menu</h2>
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-[url('/Blog/filtermanu1.jpeg')] bg-cover bg-center"></div>
          <p className="text-base font-medium">Chicken Fry</p>
        </div>
        <p className="text-sm text-gray-500">26</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-[url('/Blog/filtermanu2.jpeg')] bg-cover bg-center"></div>
          <p className="text-base font-medium">Burger Food</p>
        </div>
        <p className="text-sm text-gray-500">46</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-[url('/Blog/filtermanu3.jpeg')] bg-cover bg-center"></div>
          <p className="text-base font-medium">Pizza</p>
        </div>
        <p className="text-sm text-gray-500">16</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-[url('/Blog/filtermenu4.jpeg')] bg-cover bg-center"></div>
          <p className="text-base font-medium">Fresh Fruits</p>
        </div>
        <p className="text-sm text-gray-500">36</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-[url('/Blog/filtermanu5.jpeg')] bg-cover bg-center"></div>
          <p className="text-base font-medium">Vegetables</p>
        </div>
        <p className="text-sm text-gray-500">16</p>
      </div>
    </div>
  </div>
</div>


<div className="p-6">
  {/* Popular Tags */}
  <div>
    <h2 className="text-lg font-semibold mb-4">Popular Tags</h2>
    <div className="flex flex-wrap gap-2">
      {[
        "Sandwich",
        "Tikka",
        "Bbq",
        "Restaurant",
        "Chicken Sharma",
        "Health",
        "Fastfood",
        "Food",
        "Pizza",
        "Burger",
        "Chicken",
      ].map((tag, index) => (
        <span
          key={index}
          className="bg-gray-200 text-sm px-3 py-1 rounded-md hover:bg-gray-300 cursor-pointer"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>

  {/* Photo Gallery */}
  <div className="mt-8">
    <h2 className="text-lg font-semibold mb-4">Photo Gallery</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {Array(6)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="w-full h-32 bg-gray-300 rounded-md flex items-center justify-center relative"
            style={{
              backgroundImage: "url('/Blog/gal1.png')",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          >
            {index === 1 && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-md">
                <i className="fas fa-eye text-white text-2xl"></i>
              </div>
            )}
          </div>
        ))}
    </div>
  </div>

  {/* Follow Us */}
  <div className="mt-8">
    <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
    <div className="flex space-x-4">
      <a
        href="#"
        className="w-10 h-10 bg-gray-200 rounded-sm flex items-center justify-center hover:bg-gray-300"
      >
        <i className="fab fa-twitter text-xl"></i>
      </a>
      <a
        href="#"
        className="w-10 h-10 bg-gray-200 rounded-sm flex items-center justify-center hover:bg-gray-300"
      >
        <i className="fab fa-youtube text-xl"></i>
      </a>
      <a
        href="#"
        className="w-10 h-10 bg-[#FF9F0D] rounded-sm flex items-center justify-center hover:bg-gray-300"
      >
        <i className="fab fa-pinterest text-xl"></i>
      </a>
      <a
        href="#"
        className="w-10 h-10 bg-gray-200 rounded-sm flex items-center justify-center hover:bg-gray-300"
      >
        <i className="fab fa-instagram text-xl"></i>
      </a>
      <a
        href="#"
        className="w-10 h-10 bg-gray-200 rounded-sm flex items-center justify-center hover:bg-gray-300"
      >
        <i className="fab fa-facebook text-xl"></i>
      </a>
    </div>
  </div>
</div>


</div>

</div>

</div>
      <Footer/>
    </div>
  )
}

export default blog
