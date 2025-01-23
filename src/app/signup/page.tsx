import React from "react";

import Footer from "../components/Footer/page";
import Link from "next/link";
import Com from "../components/CommonNav/page";
import Image from "next/image";

const SignUp = () => {
  return (
    <>
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
          className="w-full h-[410px] object-cover"
          width="1920"
          height="410"
        />
        {/* Text Overlay on the Image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white ">
          <h1 className="text-4xl font-extrabold mb-2">Sign-Up Page</h1>
          <p className="text-lg mb-2">
            Home / <span className="text-[#FF9F0D]">Sign-Up</span>
          </p>
        </div>
      </div>

      {/* Sign-In Card Section */}
      <div className="min-h-screen flex mt-10 items-center justify-center bg-white">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg font-[sans-serif]">
          <form>
            <div className="mb-8">
              <h3 className="text-gray-800 text-3xl font-extrabold">Sign Up</h3>
            </div>
            <div>
              <label className="text-gray-800 text-[15px] mb-2 mt-2 block">
                Name
              </label>
              <div
                className="relative flex items-center bg-[#f3f4f6] border border-gray-300 rounded-md"
                style={{ height: "50px", width: "100%" }}
              >
                <i className="fa-regular fa-user text-gray-600 text-lg ml-3"></i>
                <input
                  name="Name"
                  type="text"
                  required
                  className="w-full text-sm text-gray-800 bg-transparent focus:outline-none px-2"
                  placeholder="Enter Your Name"
                />
              </div>
            </div>

            <div>
              <label className="text-gray-800 text-[15px] mb-2 mt-2 block">
                Email
              </label>
              <div
                className="relative flex items-center bg-[#f3f4f6] border border-gray-300 rounded-md"
                style={{ height: "50px", width: "100%" }}
              >
                <i className="fa-regular fa-envelope text-gray-600 text-lg ml-3"></i>
                <input
                  name="email"
                  type="text"
                  required
                  className="w-full text-sm text-gray-800 bg-transparent focus:outline-none px-2"
                  placeholder="Enter Email"
                />
              </div>
            </div>

            <div>
              <label className="text-gray-800 text-[15px] mb-2 mt-2 block">
                Password
              </label>
              <div
                className="relative flex items-center bg-[#f3f4f6] border border-gray-300 rounded-md"
                style={{ height: "50px", width: "100%" }}
              >
                <i className="fa-solid fa-lock text-gray-600 text-lg ml-3"></i>
                <input
                  name="password"
                  type="text"
                  required
                  className="w-full text-sm text-gray-800 bg-transparent focus:outline-none px-2"
                  placeholder="Enter Password"
                />
              </div>
            </div>

            <div className="flex items-center gap-4 mt-4">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-[#FF9F0D] focus:ring-[#FF9F0D] border-gray-300 rounded-md"
              />
              <label htmlFor="remember-me" className="text-sm">
                Remember me
              </label>
            </div>

            <div className="mt-4 text-right">
              <p className="text-[#828282] font-normal text-sm">
                Already Have An Account
                <Link
                  href="/signin"
                  className="hover:underline text-[#FF9F0D] hover:text-[#FF9F0D] ml-2"
                >
                  Sign-In
                </Link>
              </p>
            </div>

            <div className="mt-8">
              <button
                type="button"
                className="w-full py-3 px-6 text-sm tracking-wide rounded-md text-white bg-[#FF9F0D] focus:outline-none"
              >
                Sign Up
              </button>
            </div>

            <div className="my-4 flex items-center gap-4">
              <hr className="w-full border-gray-300" />
              <p className="text-sm text-gray-800 text-center">or</p>
              <hr className="w-full border-gray-300" />
            </div>

            <button
              type="button"
              className="w-full h-[44px] flex items-center justify-center gap-4 py-3 px-6 text-sm tracking-wide text-gray-800 border border-gray-300 rounded-md bg-gray-50 hover:bg-gray-100 focus:outline-none"
            >
              <img
                src="https://s3-alpha-sig.figma.com/img/83a8/3db2/3e7815e1fed1348352cadeb488405976?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gQh2PxU9znoGIdwSwmGYjFR2LTsB-gxbtG6roAbj8EIEPRNr8~HB22eezq1RWOxGDZzcyHPBpem-SGJRTiSWjZOgOpm6ziCxsGO--FVGCXhuobQO6LvSksmhGOuFoJmR3Q9~Sn6CbBvMUcOqw18VLeHP5nShN8CO0GSvWfgXxtlh3RvRMU-1nT5To2vTLQwa3hd24AIukuhHYcvhAkRT6LwKxUk-P~yqBwbEwVuy7Bk3KZ02GMd4CKzAc1Y15c4u6a5FjapFGfSdkxUIIE6EnIC9g5EmWzcZjNCSBYqBknP6ATdrbrKE5Ka12UxeHPgbXcyjCDaD40peqUG01kQ~fQ__"
                alt="Google logo"
                className="w-5 h-5"
                width="5"
                height="5"
              />
              Continue with Google
            </button>
            <button
              type="button"
              className="w-full mt-2 h-[44px] flex items-center justify-center gap-4 py-3 px-6 text-sm tracking-wide text-gray-800 border border-gray-300 rounded-md bg-gray-50 hover:bg-gray-100 focus:outline-none"
            >
              <i className="text-black text-[22px] fa-brands fa-apple"></i>
              Continue with Apple
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
