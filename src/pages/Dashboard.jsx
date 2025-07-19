import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import { useState, useEffect, useMemo, useContext } from "react";
import { CategoryContext } from "../context/CategoriesContext";

// hooks
import { useProducts } from "../hooks/useProducts";
import { useFilteredProducts } from "../hooks/useFilteredProducts";
const itemsPerPage = 4;

const Dashboard = () => {
  // State for all products, search term, selected category, and current page
  const [allProducts, setAllProducts] = useProducts();
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState(() => {
    return localStorage.getItem("category") || "All";
  });
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    localStorage.setItem("category", category);
  }, [category]);

  const filteredProducts = useFilteredProducts(
    allProducts,
    searchTerm,
    category
  );
  // Get categories from context
  const categories = useContext(CategoryContext);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, category]);

  // Handle search input change
  const handleSearch = (event) => {
    const term = event.target.value.trim().toLowerCase();
    setSearchTerm(term);
  };

  // Handle category dropdown change
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  // Get products for the current page
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredProducts.slice(startIndex, endIndex);
  }, [filteredProducts, currentPage]);

  // Calculate total number of pages
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <main className="flex flex-col items-center min-h-[calc(100vh-4rem)]  bg-gradient-to-r from-blue-500 to-green-500 dark:from-slate-950 dark:to-slate-900 text-white px-2 sm:px-6 py-6">
      <h1 className="text-3xl font-bold text-white text-center">Dashboard</h1>
      <p className="mt-4 text-lg text-center">Welcome to the Dashboard!</p>
      <div className="w-full max-w-7xl">
        <div className="flex items-center justify-center gap-2">
          {/* Search input */}
          <input
            onChange={handleSearch}
            type="search"
            aria-label="Search products"
            className="block w-full mt-2 px-4 py-2 rounded-md border border-gray-300 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition bg-white dark:bg-slate-800 placeholder-gray-400"
            placeholder="Search products..."
          />
          {/* Category dropdown */}
          <select
            value={category}
            onChange={handleCategoryChange}
            aria-label="categorySelect"
            className="bg-white dark:bg-slate-800 block py-2 mt-2 rounded-md border border-gray-300 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="All">All</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        {/* Show message if no products are available */}
        {filteredProducts.length === 0 ? (
          <>
            <p className="text-center text-gray-300 mt-8">
              No products available.
            </p>
          </>
        ) : (
          <>
            {/* Product grid */}
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
              {paginatedProducts.map((product) => (
                <ProductCard
                  key={product.productId}
                  product={product}
                  categories={categories}
                  setAllProducts={setAllProducts}
                />
              ))}
            </section>
            {/* Pagination controls */}
            {totalPages > 1 && (
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            )}
          </>
        )}
      </div>
    </main>
  );
};

export default Dashboard;
