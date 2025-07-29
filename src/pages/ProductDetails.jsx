import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

// Lucide icons
import { ReceiptText } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    const productToShow = storedProducts.find(
      (product) => product.productId === id
    );
    setProduct(productToShow);
  }, [id]);

  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] bg-gradient-to-r from-orange-500 to-yellow-500 dark:from-slate-950 dark:to-slate-900 text-white px-4 py-8">
      <h1 className="text-4xl font-extrabold mb-10 text-white drop-shadow-lg tracking-wide flex items-center">
        <ReceiptText />Product Details
      </h1>
      <div className="flex flex-col md:flex-row bg-white/80 dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden max-w-4xl w-full">
        {/* Image */}
        <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-yellow-400 to-orange-400 p-8">
          <img
            src={product?.productImage}
            alt={product?.productName}
            className="w-fit h-80 object-cover rounded-xl shadow-lg border-4 border-white"
          />
        </div>
        {/* Details */}
        <div className="flex-1 flex flex-col justify-center p-8 text-gray-900">
          <h2 className="text-3xl font-bold mb-4 text-orange-600">
            {product?.productName}
          </h2>
          <p className="text-2xl font-semibold mb-2 text-yellow-700">
            {Number(product?.productPrice).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </p>
          <p className="mb-4 text-lg text-gray-700 dark:text-gray-400">
            {product?.productDescription}
          </p>
          <span className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-semibold text-sm mb-6">
            {product?.productCategory}
          </span>
          <Link
            to="/"
            className="inline-block mt-auto bg-gradient-to-r from-green-500 to-lime-500 text-white font-bold py-2 px-6 rounded-md shadow hover:from-green-600 hover:to-lime-600 transition-colors duration-300 text-center"
          >
            Go back Dashboard
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
