import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AlertContext } from "../context/AlertContext";
import { CategoryContext } from "../context/CategoriesContext";

// Lucide icons
import { BadgePlus } from 'lucide-react';


const Add = () => {
  const { showAlertMsg } = useContext(AlertContext);
  const categories = useContext(CategoryContext);
  const [error, setError] = useState("");
  
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    productName: "",
    productPrice: "",
    productCategory: "",
    productDescription: "",
    productImage: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImgChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    console.log(reader)
    reader.onloadend = () => {
      setFormData((prevData) => ({
        ...prevData,
        productImage: reader.result, // Base64 string
      }));
    };
    reader.readAsDataURL(file);
  }
};


  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Validation
     // Check if there's no name added
    if(!formData.productName.trim()) return setError("Please enter your name.");
    // Check if the price is not valid
    if (
      isNaN(Number(formData.productPrice)) ||
      Number(formData.productPrice) <= 0 || 
      (!formData.productPrice)
    ) {
      setError("Please enter a valid price.");
      return;
    }
    // Check if there's no image added
    if (!formData.productImage.trim()) {
      formData.productImage = "../assets/images.png"; // Default image if none provided
    }
   
    // Get existing products from localStorage or start with an empty array
    const existingProducts = JSON.parse(localStorage.getItem("products")) || [];
    // Add the new product
    const newProduct = { ...formData, productId: Date.now().toString() };
    const updatedProducts = [...existingProducts, newProduct];
    // Save to localStorage
    localStorage.setItem("products", JSON.stringify(updatedProducts));


    showAlertMsg("Product added successfully!");
    setFormData({
      productName: "",
      productPrice: "",
      productCategory: "",
      productDescription: "",
      productImage: "",
    });
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] bg-gradient-to-r from-blue-500 to-green-500 dark:from-slate-950 dark:to-slate-900 text-white">
      <h1 className="text-3xl font-bold mb-6 text-white drop-shadow flex items-center">
        <BadgePlus /> Add Product
      </h1>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-5 w-full max-w-md p-8 bg-white dark:bg-slate-800 rounded-xl shadow-2xl"
      >
        <div className="flex flex-col gap-1">
          <label
            htmlFor="productName"
            className="text-gray-700 dark:text-white font-semibold"
          >
            Product Name
          </label>
          <input
            value={formData.productName}
            onChange={handleChange}
            type="text"
            id="productName"
            name="productName"
            required
            className="px-4 text-gray-900 dark:text-white dark:bg-slate-950 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="productPrice"
            className="text-gray-700 dark:text-white font-semibold"
          >
            Price
          </label>
          <input
            value={formData.productPrice}
            onChange={handleChange}
            type="number"
            min="0"
            id="productPrice"
            name="productPrice"
            required
            className="px-4 py-2 text-gray-900 dark:text-white dark:bg-slate-950 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>
        <div className="flex flex-col gap-1">
          <select
            required
            onChange={handleChange}
            value={formData.productCategory}
            name="productCategory"
            className="bg-white block py-2 mt-2 rounded-md border border-gray-300 text-gray-900 dark:text-white dark:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="" disabled>
              Choose Category
            </option>
            {categories.map((cat) => {
              return (
                <option key={cat.id} value={cat.name}>
                  {cat.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="productDescription"
            className="text-gray-700 dark:text-white font-semibold"
          >
            Description
          </label>
          <textarea
            value={formData.productDescription}
            onChange={handleChange}
            id="productDescription"
            name="productDescription"
            required
            rows={3}
            className="px-4 py-2 text-gray-900 dark:text-white dark:bg-slate-950 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="productImage"
            className="text-gray-700 dark:text-white font-semibold"
          >
            Image URL
          </label>
          <input
            onChange={handleImgChange}
            accept="image/*"
            type="file"
            id="productImage"
            name="productImage"
            placeholder="Optional: Enter image URL"
            className="px-4 py-2 text-gray-900 dark:text-white dark:bg-slate-950 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>
        {error && <div className="text-red-600 text-sm">{error}</div>}
        <button
          type="submit"
          className="mt-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-md hover:from-indigo-600 hover:to-purple-700 transition-colors duration-300 shadow"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Add;
