import { sanityFetch } from "@/sanity/lib/fetch";
import { allchefs } from "@/sanity/lib/queries";
import Image from "next/image";
import Com from '../components/CommonNav/page';
import Footer from "../components/Footer/page";

type ChefItem = {
  name: string;
  position: string;
  experience: number;
  specialty: string;
  image: string;
  description: string;
  available: Boolean;
};

export default async function ChefPage() {
  const chefItems: ChefItem[] = await sanityFetch({ query: allchefs });

  if (!chefItems || chefItems.length === 0) {
    return <div className="text-white text-center">No chefs available at the moment.</div>;
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 bg-black text-white dark:bg-[#121212]">
      <Com />
      <div className="max-w-screen-xl mx-auto px-6 py-16">
        <h1 className="text-6xl font-extrabold text-center mb-14 tracking-wide dark:text-[#F1F1F1]">
          Meet Our <span className="text-[#FF9F0D]">Chefs</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {chefItems.map((item) => (
            <div
              key={item.name}
              className="group relative border border-[#333333] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl transform dark:border-[#444444] dark:bg-[#1F1F1F] dark:hover:bg-[#333333]"
            >
              <div className="relative">
                {item.image && (
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={500}
                    height={500}
                    className="rounded-3xl object-cover w-full h-72 group-hover:opacity-90 transition-opacity duration-300"
                    blurDataURL={item.image}
                    placeholder="blur"
                  />
                )}
              </div>
              <div className="p-6 space-y-4 bg-[#222222] rounded-b-3xl group-hover:bg-[#333333] transition-all duration-300 dark:bg-[#2C2C2C] dark:hover:bg-[#3A3A3A]">
                <h2 className="text-2xl font-semibold text-[#E4E4E4] group-hover:text-[#FF6347] transition-colors duration-200 dark:text-[#F1F1F1] dark:group-hover:text-[#FF4500]">
                  {item.name}
                </h2>
                <p className="text-[#B0B0B0] text-sm dark:text-[#A0A0A0]">{item.description}</p>
                <p className="text-[#888888] text-xs dark:text-[#888888]">
                  Position: <span className="font-medium">{item.position}</span>
                </p>
                <p className="text-[#888888] text-xs dark:text-[#888888]">
                  Specialty: <span className="font-medium">{item.specialty}</span>
                </p>
                <p className="text-[#888888] text-xs dark:text-[#888888]">
                  Experience: <span className="font-medium">{item.experience} years</span>
                </p>
                <p
                  className={`text-sm font-semibold mt-2 ${
                    item.available ? "text-green-600" : "text-red-600"
                  } dark:${item.available ? "text-green-400" : "text-red-500"}`}
                >
                  {item.available ? "Available" : "Not Available"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}