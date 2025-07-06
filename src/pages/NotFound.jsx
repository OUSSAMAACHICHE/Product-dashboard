import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500">
    <h1 className="text-5xl font-bold text-red-500 mb-4">404</h1>
    <p className="text-xl text-white mb-6">Page not found!</p>
    <Link
      to="/"
      className="py-2 px-6 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
    >
      Go back to Dashboard
    </Link>
  </div>
);

export default NotFound;
