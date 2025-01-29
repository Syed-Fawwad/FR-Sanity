"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Com from "@/app/components/CommonNav/page";
import Footer from "@/app/components/Footer/page";

export type FoodItem = {
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  tags: string[];
  image: string;
  _id: string;
  description: string;
  available: boolean;
};

export default function FoodDetailsClient({ food }: { food: FoodItem }) {
  const router = useRouter();

  const handleAddToCart = () => {
    const storedCart = localStorage.getItem("cart");
    const cart = storedCart ? JSON.parse(storedCart) : [];
    cart.push(food);
    localStorage.setItem("cart", JSON.stringify(cart));
    router.push("/cart");
  };

  return (
    <div className="bg-[#0d0d0d] text-white">
      <Com /> {/* Navbar */}

      {/* Hero Section */}
      <div className="relative">
        <Image
          src="/heropic.png"
          alt="Food Hero"
          className="w-full h-[400px] object-cover"
          width={1920}
          height={400}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-2 tracking-widest italic">
            {food.name}
          </h1>
          <p className="text-base md:text-lg font-medium">
            Home / <span className="text-[#FF9F0D]">{food.category}</span>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Section: Food Image */}
            <div className="lg:w-1/2">
              <Image
                src={food.image}
                alt={food.name}
                width={600}
                height={600}
                className="rounded-xl shadow-lg object-cover w-full"
              />
            </div>

            {/* Right Section: Food Details */}
            <div className="lg:w-1/2">
              <span
                className={`inline-block px-4 py-2 rounded-lg text-sm font-semibold ${
                  food.available ? "bg-green-500" : "bg-red-500"
                }`}
              >
                {food.available ? "Available" : "Out of Stock"}
              </span>
              <h2 className="text-3xl font-bold text-[#FF9F0D] mt-4">{food.name}</h2>
              <p className="text-gray-400 mt-4">{food.description}</p>

              {/* Price Section */}
              <div className="mt-6">
                <span className="text-4xl font-bold text-[#FF9F0D]">${food.price.toFixed(2)}</span>
                {food.originalPrice && (
                  <span className="text-xl text-red-500 line-through ml-4">
                    ${food.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>

              {/* Tags */}
              <div className="mt-6">
                <p className="text-sm font-medium text-gray-500">Tags:</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {food.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 mt-8">
                <button
                  onClick={handleAddToCart}
                  className="bg-[#FF9F0D] text-black px-6 py-3 rounded-lg font-semibold hover:scale-110 hover:shadow-lg hover:shadow-[#FF9F0D]/50 transform transition-all duration-300"
                >
                  Add to Cart
                </button>
              </div>

              {/* Social Share */}
              <div className="mt-8">
                <p className="text-sm font-medium text-gray-500">Share:</p>
                <div className="flex gap-4 mt-4">
                  <a href="#" className="text-gray-500 hover:text-blue-500 text-2xl">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-blue-400 text-2xl">
                    <i className="fab fa-twitter-square"></i>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-pink-500 text-2xl">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-blue-700 text-2xl">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
