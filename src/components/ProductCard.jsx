import { useState } from "react";
import defaultImage from "../assets/images.png"; // Default image path

const ProductCard = ({ product, setProducts }) => {
  const [imgError, setImgError] = useState(false);

  const handleDelete = () => {
    // Retrieve existing products from localStorage
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];

    // Filter out the product to be deleted
    const updatedProducts = storedProducts.filter(
      (p) => p.productId !== product.productId
    );

    // Update localStorage with the new product list
    localStorage.setItem("products", JSON.stringify(updatedProducts));

    // Update the state to reflect the changes
    setProducts(updatedProducts);
  };

  // Format price as currency
  const formatPrice = (price) => {
    if (!price) return "";
    return Number(price).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <img
        src={
          imgError || !product.productImage
            ? defaultImage
            : product.productImage
        }
        alt={product.productName || "Product"}
        className="w-full h-48 object-cover mb-4 rounded-md"
        onError={() => setImgError(true)}
      />
      <h3 className="text-lg font-semibold text-gray-900">
        {product.productName}
      </h3>
      <p className="text-gray-600">{formatPrice(product.productPrice)}</p>
      <p className="text-sm text-gray-500">{product.productCategory}</p>
      <p className="text-gray-700 mt-2 flex-1">{product.productDescription}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
          aria-label="Add to Cart"
        >
          Add to Cart
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors duration-300"
          aria-label="Delete Product"
        >
          Delete
        </button>
        <button
          className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition-colors duration-300"
          aria-label="Edit Product"
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
// This code defines a ProductCard component that displays product information.
