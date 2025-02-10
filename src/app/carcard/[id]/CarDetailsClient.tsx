'use client'
import { useUser, useClerk } from '@clerk/nextjs'; // useUser hook from Clerk
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Com from '@/app/components/CommonNav/page';
import Footer from '@/app/components/Footer/page';

export type FoodItem = {
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  tags: string[];
  image: string;
  _id: string;
  description: string;
  available: Boolean;
};

export default function FoodDetailsClient({ food }: { food: FoodItem }) {
  const { isLoaded, user } = useUser(); // Clerk hook to get user info
  const { openSignIn } = useClerk(); // Clerk hook to open sign-in modal
  const router = useRouter();

  const handleAddToCart = () => {
    if (!isLoaded || !user) {
      // If not authenticated or Clerk is not loaded, show login prompt
      Swal.fire({
        title: 'Login Required!',
        text: 'You must be logged in to add items to the cart.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Login',
        cancelButtonText: 'Cancel',
      }).then((result) => {
        if (result.isConfirmed) {
          openSignIn(); // Open Clerk's sign-in modal
        }
      });
    } else {
      // If user is logged in, add item to cart
      if (typeof window !== 'undefined') {
        const storedCart = localStorage.getItem('cart');
        const cart = storedCart ? JSON.parse(storedCart) : [];
        cart.push(food);
        localStorage.setItem('cart', JSON.stringify(cart));
        router.push('/cart'); // Navigate to cart page
      }
    }
  };

  // Check if food data is available
  if (!food) {
    return <div>Loading...</div>; // Show loading state if no data
  }

  return (
    <div className="bg-[#0d0d0d] text-white">
      <Com /> {/* Navbar */}

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
          <h1 className="text-3xl md:text-5xl font-bold mb-2 tracking-widest italic">
            {food.name}
          </h1>
          <p className="text-base md:text-lg font-medium">
            Home / <span className="text-[#FF9F0D]">{food.category}</span>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Section: Food Image */}
            <div className="lg:w-1/2">
              <Image
                src={food.image || '/default-image.png'}
                alt={food.name}
                width={600}
                height={600}
                className="rounded-xl shadow-lg object-cover w-full"
              />
            </div>

            {/* Right Section: Food Details */}
            <div className="lg:w-1/2">
              <span
                className={`inline-block px-4 py-2 rounded-lg text-sm font-semibold ${
                  food.available ? 'bg-green-500' : 'bg-red-500'
                }`}
              >
                {food.available ? 'Available' : 'Out of Stock'}
              </span>
              <h2 className="text-3xl font-bold text-[#FF9F0D] mt-4">{food.name}</h2>
              <p className="text-gray-400 mt-4">{food.description}</p>

              {/* Price Section */}
              <div className="mt-6">
                <span className="text-4xl font-bold text-[#FF9F0D]">${food.price.toFixed(2)}</span>
                {food.originalPrice && (
                  <span className="text-xl text-red-500 line-through ml-4">
                    ${food.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>

              {/* Tags */}
              <div className="mt-6">
                <p className="text-sm font-medium text-gray-500">Tags:</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {food.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 mt-8">
                <button
                  onClick={handleAddToCart}
                  className="bg-[#FF9F0D] text-black px-6 py-3 rounded-lg font-semibold hover:scale-110 hover:shadow-lg hover:shadow-[#FF9F0D]/50 transform transition-all duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}