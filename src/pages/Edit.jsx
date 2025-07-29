import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Context
import { useContext } from "react";
import { AlertContext } from "../context/AlertContext";
import { CategoryContext } from "../context/CategoriesContext";

// Lucide icons 
import { UserRoundPen } from 'lucide-react';

const Edit = () => {
  const { showAlertMsg } = useContext(AlertContext);
  const categories = useContext(CategoryContext);
  const navigate = useNavigate();
  // Get the product ID from the URL parameters
  const { id } = useParams();
  const [product, setProduct] = useState({
    productId: id,
    productName: "",
    productPrice: "",
    productCategory: "",
    productDescription: "",
    productImage: "",
  });

  useEffect(() => {
    // Fetch the product data from localStorage
    const products = JSON.parse(localStorage.getItem("products")) || [];
    const product = products.find((p) => p.productId === id);
    if (product) {
      setProduct(product);
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !product.productName.trim() ||
      !product.productPrice ||
      Number(product.productPrice) <= 0
    ) {
      setError("Please enter valid product details.");
      return;
    }

    const products = JSON.parse(localStorage.getItem("products")) || [];
    // Find the product index 
    const index = products.findIndex((p) => p.productId === id);

    if (index !== -1) {
      products[index] = { ...product };
      localStorage.setItem("products", JSON.stringify(products));
      showAlertMsg("Product updated successfully!");
      navigate("/");
    } else {
      navigate("*");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] bg-gradient-to-r from-purple-500 to-pink-500 dark:from-slate-950 dark:to-slate-900 text-white">
      <h1 className="text-3xl font-bold mb-4 flex items-center"><UserRoundPen />Edit Page</h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-6 bg-white dark:bg-slate-800 rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <label
            htmlFor="productName"
            className="block text-gray-700 dark:text-white font-semibold mb-2"
          >
            Product Name
          </label>
          <input
            value={product.productName}
            onChange={handleChange}
            type="text"
            id="productName"
            name="productName"
            required
            className="w-full px-4 py-2 text-gray-900 dark:text-white dark:bg-slate-950 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="productPrice"
            className="block text-gray-700 dark:text-white font-semibold mb-2"
          >
            Price
          </label>
          <input
            value={product.productPrice}
            onChange={handleChange}
            type="number"
            id="productPrice"
            name="productPrice"
            min="0"
            required
            className="w-full px-4 py-2 text-gray-900 dark:text-white dark:bg-slate-950 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />
        </div>
        <div className="mb-4">
          <select
            name="productCategory"
            value={product.productCategory}
            onChange={handleChange}
            className="bg-white block py-2 mt-2 rounded-md border border-gray-300 text-gray-900 dark:text-white dark:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            {categories.map((cat) => {
              return <option key={cat.id}>{cat.name}</option>;
            })}
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="productDescription"
            className="block text-gray-700 dark:text-white font-semibold mb-2"
          >
            Description
          </label>
          <textarea
            value={product.productDescription}
            onChange={handleChange}
            id="productDescription"
            name="productDescription"
            rows="3"
            required
            className="w-full px-4 py-2 text-gray-900 dark:text-white dark:bg-slate-950 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          ></textarea>
        </div>
        <div className="flex gap-1">
          <button
            type="submit"
            className="w-full bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition"
          >
            Update Product
          </button>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
