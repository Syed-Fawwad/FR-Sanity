import { NextResponse } from "next/server";
import Stripe from "stripe";
import { client } from "@/sanity/lib/client"; // Sanity client import

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

// Define type for cart items
interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

export async function POST(req: Request) {
  try {
    const { items, firstName, lastName, email, phone, company, country, city, zipCode, address1, address2 } = await req.json();

    // Calculate the order totals
    const subtotal = items.reduce((sum: number, item: { price: number; quantity: number; }) => sum + item.price * item.quantity, 0);
    const discount = subtotal * 0.1; // 10% discount for example
    const tax = subtotal * 0.05; // 5% tax
    const total = subtotal - discount + tax;

    // Create a Stripe session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: items.map((item: CartItem) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
          },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      success_url: `http://localhost:3000/success`,
      cancel_url:`http://localhost:3000/cancel`,
    });

    // ✅ Fix: Assign _key to each item
    const orderItems = items.map((item: { name: any; }) => ({
      _key: `${item.name}-${Math.random().toString(36).substring(2, 9)}`,
      ...item,
    }));

    // Store order details in Sanity
    await client.create({
      _type: "order",
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
      items: orderItems, // ✅ Fixed: Items now have _key
      subtotal,
      discount,
      tax,
      total,
      orderDate: new Date().toISOString(),
      status: "Pending",
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}