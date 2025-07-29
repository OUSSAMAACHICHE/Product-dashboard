import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import defaultImage from "../assets/images.png"; // Default image path
import { CategoryContext } from "../context/CategoriesContext";
import { AlertContext } from "../context/AlertContext";

// components
import ConfirmDeleteDialog from "./ConfirmDeleteDialog";

const ProductCard = ({ product, setAllProducts }) => {
  const { showAlertMsg } = useContext(AlertContext);
  const [imgError, setImgError] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const categories = useContext(CategoryContext);

  const navigate = useNavigate();
  // Open delete dialog when click delete btn
  const handleDelete = () => {
    setOpenDialog(true);
  };
  
  const handleConfirmDelete = () => {
    // Retrieve existing products from localStorage
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];

    // Filter out the product to be deleted
    const updatedProducts = storedProducts.filter(
      (p) => p.productId !== product.productId
    );

    // Show delete message
    showAlertMsg("Product deleted successfully!");

    // Update localStorage with the new product list
    localStorage.setItem("products", JSON.stringify(updatedProducts));

    // Update the state to reflect the changes
    setAllProducts(updatedProducts);
  };

  // Format price as currency
  const formatPrice = (price) => {
    if (!price) return "";
    return Number(price).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const handleEdit = () => {
    // Navigate to the edit page with the product ID
    const editUrl = `/edit/${product.productId}`;
    navigate(editUrl);
  };

  const categoryIcon = categories.find((cat) => {
    return cat.name === product.productCategory;
  });

  return (
    <div className="bg-white dark:bg-slate-800 shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <ConfirmDeleteDialog
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        onConfirmDelete={handleConfirmDelete}
      />
      <img
        src={
          imgError || !product.productImage
            ? defaultImage
            : product.productImage
        }
        alt={product.productName || "Product"}
        className="w-full h-48 object-cover mb-4 rounded-md transform hover:scale-110 transition-transform duration-300"
        onError={() => setImgError(true)}
      />
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {product.productName}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">
        {formatPrice(product.productPrice)}
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
        <span>{categoryIcon ? categoryIcon.icon : null}</span>
        {product.productCategory}
      </p>

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
          onClick={handleEdit}
          className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition-colors duration-300"
          aria-label="Edit Product"
        >
          Edit
        </button>
        <Link
          to={`product/${product.productId}`}
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-300"
          aria-label="Details Product"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
// This code defines a ProductCard component that displays product information.
