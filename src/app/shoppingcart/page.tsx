"use client";
import { useEffect } from "react";
import useStore, { loadCartFromLocalStorage } from "@/store/store";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, totalAmount, setCart } = useStore();

  useEffect(() => {
    const loadedCart = loadCartFromLocalStorage();
    setCart(loadedCart); // Set the cart from localStorage
  }, [setCart]);

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity >= 1) {
      updateQuantity(id, quantity);
    }
  };

  const handleRemove = (id: string) => {
    removeFromCart(id);
  };

  if (cart.length === 0) {
    return <div className="text-center mt-10">Your cart is empty!</div>;
  }

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">Your Shopping Cart</h1>

      {cart.map((item) => (
        <div key={item.id} className="flex items-center justify-between border-b py-4">
          <div className="flex items-center space-x-4">
            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
            <div>
              <p className="font-semibold text-lg">{item.name}</p>
              <p className="text-gray-500 text-sm">{item.category}</p>
              <p className="text-gray-700">${item.price.toFixed(2)}</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              className="text-gray-600"
              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              className="text-gray-600"
              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
            >
              +
            </button>
            <button
              className="text-red-500"
              onClick={() => handleRemove(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <div className="flex justify-between items-center mt-6">
        <p className="text-xl font-semibold">Total: ${totalAmount().toFixed(2)}</p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">Checkout</button>
      </div>
    </div>
  );
}