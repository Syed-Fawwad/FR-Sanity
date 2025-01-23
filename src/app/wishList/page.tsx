"use client";
import useStore from "@/store/store";

export default function WishlistPage() {
  const { wishlist, addToCart, removeFromWishlist } = useStore();

  const handleAddToCart = (product: any) => {
    addToCart(product); // Add product to cart
    alert(`${product.name} has been added to your cart!`);
  };

  const handleRemoveFromWishlist = (id: string) => {
    removeFromWishlist(id); // Remove product from wishlist
  };

  if (wishlist.length === 0) {
    return <div className="text-center mt-10">Your wishlist is empty!</div>;
  }

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">My Wishlist</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlist.map((item) => (
          <div
            key={item.id}
            className="border p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-gray-600">${item.price.toFixed(2)}</p>
            <div className="flex items-center justify-between mt-4">
              <button
                onClick={() => handleAddToCart(item)}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Add to Cart
              </button>
              <button
                onClick={() => handleRemoveFromWishlist(item.id)}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}