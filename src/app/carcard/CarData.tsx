import { sanityFetch } from "@/sanity/lib/fetch";
import { allfoods } from "@/sanity/lib/queries";

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

// Server component function to fetch data
export async function fetchFoodData(): Promise<FoodItem[]> {
  const FoodItems: FoodItem[] = await sanityFetch({ query: allfoods });
  return FoodItems;
}