"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Com from "../components/CommonNav/page"; // Navbar
import Footer from "../components/Footer/page"; // Footer

type FoodItem = {
  _id: string;
  name: string;
  category: string;
  tags: string[];
  price: number;
  originalPrice?: number;
  image: string;
  available: Boolean;
  quantity: number; // Added quantity property
};

export default function CartPage() {
  const [cart, setCart] = useState<FoodItem[]>([]);
  const router = useRouter();

  // Fetch cart from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Remove item from cart
  const handleRemoveItem = (id: string) => {
    const updatedCart = cart.filter((item) => item._id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Handle quantity change
  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return; // Prevent quantity from going below 1

    const updatedCart = cart.map((item) =>
      item._id === id ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Proceed to checkout (send cart data)
  const handleCheckout = () => {
    localStorage.setItem("checkout", JSON.stringify(cart)); // Save cart data for checkout
    router.push("/checkout"); // Redirect to checkout page
  };

  // Calculate total price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * (item.quantity || 1), // Default to 1 if quantity is undefined
    0
  );

  return (
    <div className="bg-[#0d0d0d] text-white min-h-screen">
      <Com /> {/* Navbar */}
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#FF9F0D]">
          Your Food Cart
        </h1>
        {cart.length === 0 ? (
          <p className="text-center text-xl text-gray-500">
            Your cart is empty. Start adding delicious food!
          </p>
        ) : (
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item._id}
                className="flex justify-between items-center p-4 bg-gray-800 rounded-lg shadow-md"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-24 h-24 rounded-lg overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-white">
                      {item.name}
                    </h2>
                    <p className="text-gray-400">{item.category}</p>
                    <div className="flex items-center gap-2 mt-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-[#FF9F0D] text-black text-sm rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="text-lg font-bold text-green-400 mb-4">
                    ${item.price * (item.quantity || 1)} {/* Update total price based on quantity */}
                  </div>
                  {item.originalPrice && (
                    <div className="text-sm text-red-500 line-through">
                      ${item.originalPrice}
                    </div>
                  )}

                  {/* Quantity change using only + and - buttons */}
                  <div className="flex items-center space-x-4 mt-2">
                    <button
                      onClick={() =>
                        handleQuantityChange(item._id, item.quantity - 1)
                      }
                      className="px-2 py-1 bg-gray-600 text-white rounded-lg"
                    >
                      -
                    </button>
                    <span className="text-white text-lg">{item.quantity || 1}</span>
                    <button
                      onClick={() =>
                        handleQuantityChange(item._id, item.quantity + 1)
                      }
                      className="px-2 py-1 bg-gray-600 text-white rounded-lg"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => handleRemoveItem(item._id)}
                    className="text-red-500 hover:text-red-700 font-semibold mt-2"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            {/* Total Price Section */}
            <div className="flex justify-between items-center py-4 bg-gray-700 rounded-lg shadow-md">
              <div className="text-2xl font-semibold text-white">Total Price</div>
              <div className="text-xl font-bold text-green-400">${totalPrice}</div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={handleCheckout}
              className="mt-6 bg-[#FF9F0D] text-black py-3 px-8 rounded-lg hover:bg-yellow-600 w-full text-lg font-bold"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
      <Footer /> {/* Footer */}
    </div>
  );
}