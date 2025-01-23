"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Com from "../components/CommonNav/page";
import Footer from "../components/Footer/page";
import { fetchFoodData, FoodItem } from "./CarData";

export default function FoodPage() {
  const [foodItems, setFoodItems] = useState<FoodItem[]>([]);
  const [filteredFood, setFilteredFood] = useState<FoodItem[]>([]);
  const [filterPopup, setFilterPopup] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    async function loadData() {
      const data = await fetchFoodData();
      setFoodItems(data);
      setFilteredFood(data);
    }
    loadData();
  }, []);

  // Filter Logic
  const applyFilter = (filter: string) => {
    setActiveFilter(filter);

    if (filter === "All") {
      setFilteredFood(foodItems);
    } else {
      const filtered = foodItems.filter(
        (food) => food.category.toLowerCase() === filter.toLowerCase()
      );
      setFilteredFood(filtered);
    }

    setFilterPopup(false);
  };

  return (
    <div className="bg-[#0d0d0d] text-white min-h-screen">
      {/* Navbar */}
      <Com />

      {/* Hero Section */}
      <div className="relative">
        <Image
          src="/heropic.png"
          alt="Hero Header"
          className="w-full h-[410px] object-cover"
          width="1920"
          height="410"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-extrabold mb-2">Our Shop</h1>
          <p className="text-lg">
            Home / <span className="text-[#FF9F0D]">Our Shop</span>
          </p>
        </div>
      </div>

      {/* Filter Button */}
      <div className="flex justify-end mb-6 mt-4 px-4">
        <button
          onClick={() => setFilterPopup(true)}
          className="bg-gradient-to-r from-[#ff9f0d] to-orange-500 text-black px-6 py-3 rounded-lg shadow-lg hover:scale-110 hover:shadow-lg hover:shadow-[#ff9f0d]/50 transform transition-all duration-300 font-semibold"
        >
          Filter Food
        </button>
      </div>

      {/* Filter Popup */}
      {filterPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-gray-900 rounded-lg p-6 w-96 text-center shadow-2xl">
            <h2 className="text-2xl font-bold mb-6 text-[#ff9f0d]">
              Select Food Category
            </h2>
            <button
              onClick={() => applyFilter("All")}
              className={`w-full mb-3 py-3 rounded-lg font-medium ${
                activeFilter === "All"
                  ? "bg-[#ff9f0d] text-black shadow-lg"
                  : "bg-gray-800 text-gray-300 hover:bg-[#ff9f0d] hover:text-black transition-all"
              }`}
            >
              All
            </button>
            {["Sandwich", "Drink", "Appetizer", "Dessert", "Main Course"].map(
              (category) => (
                <button
                  key={category}
                  onClick={() => applyFilter(category)}
                  className={`w-full mb-3 py-3 rounded-lg font-medium ${
                    activeFilter === category
                      ? "bg-[#ff9f0d] text-black shadow-lg"
                      : "bg-gray-800 text-gray-300 hover:bg-[#ff9f0d] hover:text-black transition-all"
                  }`}
                >
                  {category}
                </button>
              )
            )}
          </div>
        </div>
      )}

      {/* Food Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
        {filteredFood.map((food) => (
          <div
            key={food._id}
            className="bg-gray-900 shadow-lg rounded-xl overflow-hidden transform hover:scale-105 hover:shadow-xl hover:shadow-[#ff9f0d]/50 transition-all duration-300"
          >
            <div className="relative group">
              <Image
                src={food.image}
                alt={food.name}
                width={300}
                height={300}
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-sm text-white bg-black bg-opacity-50 p-2 rounded-lg">
                  Click "View Details" to learn more about{" "}
                  <strong>{food.name}</strong>!
                </p>
              </div>
            </div>
            <div className="p-5">
              <h2 className="text-2xl font-extrabold text-[#ff9f0d]">
                {food.name}
              </h2>
              <p className="text-gray-400 mt-2">{food.category}</p>
              <p className="text-gray-300 mt-3">{food.description}</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-xl font-bold text-[#ff9f0d]">
                  ${food.price}
                </span>
                {food.originalPrice && (
                  <span className="text-sm text-red-500 line-through">
                    ${food.originalPrice}
                  </span>
                )}
              </div>
              <div className="mt-4 flex justify-between items-center">
                <Link href={`/carcard/${food._id}`}>
                  <button className="bg-[#ff9f0d] text-black px-6 py-2 rounded-lg font-semibold hover:scale-110 hover:shadow-lg hover:shadow-[#ff9f0d]/50 transform transition-all duration-300">
                    View Details
                  </button>
                </Link>
                <span
                  className={`px-3 py-1 rounded-lg font-semibold ${
                    food.available
                      ? "bg-green-500 text-black"
                      : "bg-red-500 text-black"
                  }`}
                >
                  {food.available ? "Available" : "Out of Stock"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}