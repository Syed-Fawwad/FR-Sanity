import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

// POST request to create an order
export async function POST(req: Request) {
  try {
    const {
      items,
      userId,
      email,
      phone,
      address1,
      address2,
      subtotal,
      discount,
      tax,
      total,
    } = await req.json();

    // Add unique _key to each item
    const itemsWithKeys = items.map((item: any) => ({
      ...item,
      _key: uuidv4(), // Generate unique key for each item
    }));

    // Create the order object
    const order = {
      _type: "order",
      userId, // Using userId instead of firstName
      email,
      phone,
      address1,
      address2,
      items: itemsWithKeys, // Use items with unique keys
      subtotal,
      discount,
      tax,
      total,
      orderDate: new Date().toISOString(),
      status: "Pending", // Default status for new order
    };

    // Save the order in Sanity
    await client.create(order);

    return NextResponse.json({ message: "Order placed successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json({ error: "Failed to place order" }, { status: 500 });
  }
}

// GET request to fetch orders based on userId
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");

  try {
    // Fetch orders associated with the userId
    const orders = await client.fetch(`
      *[_type == "order" && userId == $userId] {
        _id,
        firstName,
        lastName,
        email,
        total,
        orderDate,
        status
      }
    `, { userId });

    if (orders.length === 0) {
      return NextResponse.json({ error: "No orders found" }, { status: 404 });
    }

    return NextResponse.json({ orders }, { status: 200 });
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json({ error: "Failed to fetch orders" }, { status: 500 });
  }
}

// PATCH request for cancelling an order
export async function PATCH(req: Request) {
  try {
    const { orderId } = await req.json();

    // Fetch the order by orderId
    const order = await client.getDocument(orderId);

    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    // Check if the order can be cancelled (only "Pending" orders can be cancelled)
    if (order.status !== "Pending") {
      return NextResponse.json({ error: "Only pending orders can be cancelled" }, { status: 400 });
    }

    // Update the order status to "Cancelled"
    const updatedOrder = await client.patch(orderId)
      .set({ status: "Cancelled" })
      .commit();

    return NextResponse.json({ message: "Order cancelled successfully", order: updatedOrder }, { status: 200 });
  } catch (error) {
    console.error("Error cancelling order:", error);
    return NextResponse.json({ error: "Failed to cancel order" }, { status: 500 });
  }
}

function uuidv4() {
  throw new Error("Function not implemented.");
}
