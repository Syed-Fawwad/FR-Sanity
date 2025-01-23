import { sanityFetch } from "@/sanity/lib/fetch";
import { foodById } from "@/sanity/lib/queries";
import CarDetailsClient from "./CarDetailsClient";

type FoodDetailsProps = {
  params: { id: string };
};

export async function generateStaticParams() {
  const FoodItems: { _id: string }[] = await sanityFetch({
    query: `*[_type == "food"]{id}`,
  });

  return FoodItems.map((item) => ({ id: item._id }));
}

export default async function FoodDetailsPage({ params }: FoodDetailsProps) {
  const FoodItem = await sanityFetch({
    query: foodById,
    params: { id: params.id },
  });

  if (!FoodItem || FoodItem.length === 0) {
    return <div>Food not found</div>;
  }

  return <CarDetailsClient food={FoodItem[0]} />;
}