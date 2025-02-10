"use client";

import React, { useEffect, useState, useRef } from "react";
import Footer from "../components/Footer/page";
import Com from "../components/CommonNav/page";
import Image from "next/image";
import Swal from "sweetalert2"; // SweetAlert2 import

type CartItem = {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

const CheckOut = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const firstNameRef = useRef<HTMLInputElement | null>(null);
  const lastNameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);
  const companyRef = useRef<HTMLInputElement | null>(null);
  const countryRef = useRef<HTMLSelectElement | null>(null);
  const cityRef = useRef<HTMLSelectElement | null>(null);
  const zipCodeRef = useRef<HTMLInputElement | null>(null);
  const address1Ref = useRef<HTMLInputElement | null>(null);
  const address2Ref = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const storedCart = localStorage.getItem("checkout");
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      const validCart = parsedCart.map((item: CartItem) => ({
        ...item,
        price: item.price || 0,
        quantity: item.quantity || 1,
      }));
      setCartItems(validCart);
    }
  }, []);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + (item.price * item.quantity || 0),
    0
  );
  const discount = subtotal * 0.1;
  const tax = subtotal * 0.05;
  const total = subtotal - discount + tax;

  const handlePlaceOrder = async () => {
    const firstName = firstNameRef.current?.value;
    const lastName = lastNameRef.current?.value;
    const email = emailRef.current?.value;
    const phone = phoneRef.current?.value;
    const company = companyRef.current?.value;
    const country = countryRef.current?.value;
    const city = cityRef.current?.value;
    const zipCode = zipCodeRef.current?.value;
    const address1 = address1Ref.current?.value;
    const address2 = address2Ref.current?.value;
  
    if (!firstName || !lastName || !email || !phone || !country || !city || !zipCode || !address1) {
      Swal.fire({
        icon: "error",
        title: "All fields are required!",
        text: "Please fill in all the fields before proceeding.",
        confirmButtonText: "OK",
      });
      return;
    }
  
    const orderData = {
      firstName,
      lastName,
      email,
      phone,
      company,
      country,
      city,
      zipCode,
      address1,
      address2,
      items: cartItems.map((item) => ({
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
    };
  
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData),
    });
  
    const data = await response.json();
  
    if (response.ok && data.url) {
      Swal.fire({
        icon: "success",
        title: "Order placed successfully!",
        text: "Redirecting to payment...",
        confirmButtonText: "OK",
      }).then(() => {
        window.location.href = data.url;
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Something went wrong!",
        text: data.error || "Please try again later.",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="bg-[#0d0d0d] text-white min-h-screen">
      <Com />
      <div className="relative">
        <Image
          src="/heropic.png"
          alt="Sign-in Header"
          className="w-full h-[410px] object-cover"
          width="1920"
          height="410"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-extrabold mb-2">Checkout Page</h1>
          <p className="text-lg mb-2">
            Home / <span className="text-[#FF9F0D]">Checkout</span>
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center min-h-screen mt-6">
        <div className="w-full max-w-5xl bg-[#1a1a1a] shadow-2xl rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-2 bg-[#212121] rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-white mb-4">Shipping Address</h2>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  ref={firstNameRef}
                  type="text"
                  placeholder="First name"
                  className="border p-3 w-full rounded-md text-black"
                />
                <input
                  ref={lastNameRef}
                  type="text"
                  placeholder="Last name"
                  className="border p-3 w-full rounded-md text-black"
                />
                <input
                  ref={emailRef}
                  type="email"
                  placeholder="Email address"
                  className="border p-3 w-full rounded-md text-black"
                />
                <input
                  ref={phoneRef}
                  type="text"
                  placeholder="Phone number"
                  className="border p-3 w-full rounded-md text-black"
                />
                <input
                  ref={companyRef}
                  type="text"
                  placeholder="Company"
                  className="border p-3 w-full rounded-md text-black"
                />
                <select
                  ref={countryRef}
                  className="border p-3 w-full rounded-md text-black"
                  defaultValue="Choose country"
                >
                  <option disabled>Choose country</option>
                  <option>Pakistan</option>
                  <option>UAE</option>
                </select>
                <select
                  ref={cityRef}
                  className="border p-3 w-full rounded-md text-black"
                  defaultValue="Choose city"
                >
                  <option disabled>Choose city</option>
                  <option>Karachi</option>
                  <option>Dubai</option>
                </select>
                <input
                  ref={zipCodeRef}
                  type="text"
                  placeholder="Zip code"
                  className="border p-3 w-full rounded-md text-black"
                />
                <input
                  ref={address1Ref}
                  type="text"
                  placeholder="Address 1"
                  className="border p-3 w-full rounded-md text-black"
                />
                <input
                  ref={address2Ref}
                  type="text"
                  placeholder="Address 2"
                  className="border p-3 w-full rounded-md text-black"
                />
              </form>

              <div className="mt-6 text-white">
                <h3 className="text-lg font-medium mb-2">Billing Address</h3>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Same as shipping address
                </label>
              </div>

              <div className="flex justify-between gap-4 mt-auto pt-6">
                <button className="w-full text-gray-800 font-medium py-3 shadow-md bg-gray-400 hover:bg-gray-500 rounded-md transition">
                  Back to cart
                </button>
                <button
                  onClick={handlePlaceOrder}
                  className="w-full bg-[#FF9F0D] text-white font-medium py-3 shadow-md hover:bg-orange-600 rounded-md transition"
                >
                  Proceed to shipping
                </button>
              </div>
            </div>

            <div className="bg-[#212121] rounded-lg shadow-lg p-6 flex flex-col justify-between">
              <div>
                <ul className="space-y-4 text-white">
                  {cartItems.map((item, index) => (
                    <li key={item.name || index} className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gray-200 rounded-md">
                        <Image
                          src={item.image}
                          alt={item.name}
                          className="object-cover w-full h-full rounded-md"
                          width={64}
                          height={64}
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-400">Quantity: {item.quantity}</p>
                      </div>
                      <p>${(item.price * item.quantity).toFixed(2)}</p>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 border-t pt-4 space-y-2">
                  <div className="flex justify-between text-white">
                    <span>Sub-total</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span>Discount</span>
                    <span>${discount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex justify-between mt-4 font-bold text-lg text-white">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                <button
                  onClick={handlePlaceOrder}
                  className="w-full bg-[#FF9F0D] text-white py-3 rounded-md mt-4 shadow-md hover:bg-orange-600 transition"
                >
                  Place an order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CheckOut;