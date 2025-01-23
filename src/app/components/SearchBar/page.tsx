import { useState } from "react";

type Product = {
  _id: string;
  name: string;
  tags: string[];
};

interface SearchBarProps {
  allProducts: Product[];
  onProductSelect: (productId: string) => void; // This function will handle the redirection
}

const SearchBar: React.FC<SearchBarProps> = ({ allProducts, onProductSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setIsDropdownVisible(true);

    if (!term) {
      setFilteredProducts([]);
      return;
    }

    const filtered = allProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(term.toLowerCase()) ||
        product.tags.some((tag) =>
          tag.toLowerCase().includes(term.toLowerCase())
        )
    );
    setFilteredProducts(filtered);
  };

  const handleProductClick = (productId: string) => {
    onProductSelect(productId); // Call parent handler to navigate
    setIsDropdownVisible(false);
  };

  return (
    <div className="relative">
      <input
        type="text"
        className="search-input"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        onFocus={() => setIsDropdownVisible(true)}
        onBlur={() => setTimeout(() => setIsDropdownVisible(false), 200)} // Delay to allow click on suggestion
      />

      {isDropdownVisible && filteredProducts.length > 0 && (
        <div className="absolute bg-black text-white w-full mt-2 rounded-md shadow-lg z-10">
          {filteredProducts.map((product) => (
            <div
              key={product._id}
              className="cursor-pointer p-2 hover:bg-gray-800"
              onClick={() => handleProductClick(product._id)}
            >
              {product.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;