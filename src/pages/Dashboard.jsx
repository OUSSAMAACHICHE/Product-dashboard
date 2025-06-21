import ProductCard from "../components/ProductCard";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from localStorage on component mount
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  return (
    <main className="flex flex-col items-center min-h-screen bg-gradient-to-r from-blue-500 to-green-500 text-white px-2 sm:px-6 py-6">
      <h1 className="text-3xl font-bold text-white text-center">
        Dashboard
      </h1>
      <p className="mt-4 text-lg text-center">Welcome to the Dashboard!</p>
      <div className="w-full max-w-7xl">
        {products.length === 0 ? (
          <p className="text-center text-gray-300 mt-8">
            No products available. Please add some products.
          </p>
        ) : (
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {products.map((product) => (
              <ProductCard
                key={product.productId}
                product={product}
                setProducts={setProducts}
              />
            ))}
          </section>
        )}
      </div>
    </main>
  );
};

export default Dashboard;
