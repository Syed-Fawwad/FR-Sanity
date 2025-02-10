"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { NextPage } from "next";
import Image from "next/image";
import Com from "../components/CommonNav/page";
import Footer from "../components/Footer/page";

const MyOrders: NextPage = () => {
  const { user } = useUser();
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const userId = (user as any)?.id; // Ensure userId is passed correctly from Clerk

  useEffect(() => {
    if (userId) {
      fetchOrders(userId); // Fetch orders based on userId
    }
  }, [userId]);

  const fetchOrders = async (userId: string) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`/api/orders?userId=${userId}`); // Correct endpoint path
      const ordersData = await res.json();

      if (ordersData.error) {
        setError(ordersData.error); // Set error if no orders are found or API fails
      } else {
        setOrders(ordersData.orders); // Set fetched orders
      }
    } catch (err) {
      setError("Error fetching orders. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = async (orderId: string) => {
    try {
      const res = await fetch(`/api/orders`, {
        method: "PATCH",
        body: JSON.stringify({ orderId }),
        headers: { "Content-Type": "application/json" },
      });

      const result = await res.json();

      if (result.message) {
        fetchOrders(userId); // Re-fetch orders after canceling
      } else {
        setError(result.error); // Set error if cancel fails
      }
    } catch (error) {
      setError("Error cancelling order. Please try again.");
    }
  };

  return (
    <div className="bg-gray-800 text-white">
      <Com />
      <div className="relative">
        <Image
          src="/heropic.png"
          alt="My Orders Header"
          className="w-full h-[410px] object-cover"
          width="1920"
          height="410"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white ">
          <h1 className="text-4xl font-extrabold mb-2">My Orders</h1>
          <p className="text-lg mb-2">Manage your orders below</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : orders.length === 0 ? (
          <p>No orders found</p>
        ) : (
          <ul className="space-y-6">
            {orders.map((order) => (
              <li key={order._id} className="p-6 bg-gray-700 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">{order.firstName} {order.lastName}</h3>
                <p>Email: {order.email}</p>
                <p>Total: <span className="text-[#FF9F0D]">${order.total}</span></p>
                <p>Order Date: {new Date(order.orderDate).toLocaleDateString()}</p>
                <p>Status: <span className={`text-${order.status === "Cancelled" ? "red" : order.status === "Shipped" ? "green" : "yellow"}-600`}>{order.status}</span></p>
                {order.status === "Pending" && (
                  <button
                    onClick={() => handleCancel(order._id)}
                    className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500"
                  >
                    Cancel Order
                  </button>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default MyOrders;