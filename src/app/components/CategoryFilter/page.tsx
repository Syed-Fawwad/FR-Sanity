import { useState } from 'react';

export default function CategoryFilter({
  categories,
  onCategoryChange,
}: {
  categories: string[];
  onCategoryChange: (category: string) => void;
}) {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  return (
    <div className="my-4 w-full sm:w-80 md:w-96 lg:w-112 flex justify-end">
      <div className="w-full">
        <label
          htmlFor="categories"
          className="block text-lg font-medium text-gray-200 mb-2 dark:text-gray-300"
        >
          Select Category
        </label>
        <select
          id="categories"
          value={selectedCategory}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-gray-800 text-gray-200 border border-gray-600 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:bg-gray-700 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:focus:ring-blue-400 capitalize text-sm"
        >
          <option value="">All</option>
          {categories && categories.length > 0 ? (
            categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))
          ) : (
            <option value="" disabled>
              No categories available
            </option>
          )}
        </select>
      </div>
    </div>
  );
}