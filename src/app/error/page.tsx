import React from 'react'
import Footer from '../components/Footer/page';
import Com from '../components/CommonNav/page';
import Image from "next/image";

const PageError = () => {
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
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white ">
          <h1 className="text-4xl font-extrabold mb-2">404 Error</h1>
          <p className="text-lg mb-2">Home / <span className='text-[#FF9F0D]'>404 Error</span></p>
        </div>
      </div>

      <div className="text-center py-10">
  <h1 className="text-9xl font-bold text-[#FF9F0D]">404</h1>
  <p className="text-xl font-medium text-gray-800 mt-4">Oops! Look likes something going wrong</p>
  <p className="text-gray-500 mt-2">
    Page cannot be found! We'll have it figured out in no time.<br/>
    Meanwhile, check out these fresh ideas:
  </p>
  <button 
    
    className="mt-6 px-6 py-2 text-white bg-[#FF9F0D] rounded-lg hover:bg-yellow-600">
    Go to home
  </button>
</div>
      <Footer/>
    </div>
  )
}

export default PageError;
