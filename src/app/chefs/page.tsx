import { sanityFetch } from "@/sanity/lib/fetch";
import { allchefs } from "@/sanity/lib/queries";
import Image from "next/image";
import Com from "../components/CommonNav/page";
import Footer from "../components/Footer/page";


type ChefItem = {
  _id: string;
  name: string;
  position: string;
  experience: number;
  specialty: string;
  image: string;
  description: string;
  available: boolean;
};

export default async function ChefPage() {
  const chefItems: ChefItem[] = await sanityFetch({ query: allchefs });

  if (!chefItems || chefItems.length === 0) {
    return <div className="text-white text-center">No chefs available at the moment.</div>;
  }

  return (
    <div className="bg-[#0d0d0d] text-white min-h-screen">
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
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-wide">
            Meet Our <span className="text-[#FF9F0D]">Chefs</span>
          </h1>
          <p className="text-lg">
            Home / <span className="text-[#FF9F0D]">Our Chefs</span>
          </p>
        </div>
      </div>

      {/* Chef Cards */}
      <div className="max-w-screen-xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {chefItems.map((chef) => (
            <div
              key={chef._id}
              className="bg-[#1F1F1F] border border-[#333333] rounded-2xl overflow-hidden shadow-lg transition-all hover:scale-105 hover:shadow-2xl"
            >
              <Image
                src={chef.image}
                alt={chef.name}
                width={500}
                height={500}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-[#FF9F0D]">{chef.name}</h2>
                <p className="text-gray-400">{chef.position}</p>
                <p className="mt-2 text-sm text-gray-500">{chef.description}</p>
                <div className="mt-4">
                  <span
                    className={`px-3 py-1 rounded-lg font-semibold ${
                      chef.available ? "bg-green-500 text-black" : "bg-red-500 text-black"
                    }`}
                  >
                    {chef.available ? "Available" : "Not Available"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}