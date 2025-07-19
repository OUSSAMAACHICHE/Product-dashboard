import { NavLink } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import useDarkMode from "../hooks/useDarkMode";

const Navbar = () => {
const [ setIsDark, isDark ] = useDarkMode();


const handleModeChange = () => {
  setIsDark(prev => !prev);
};


  return (
    <nav className="bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-gray-800 dark:to-gray-600 shadow-md px-8 py-4">
      <ul className="flex gap-8 list-none m-0 p-0">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-white font-medium text-lg px-4 py-2 rounded-md transition-colors duration-200 hover:bg-white/20 hover:text-yellow-200 ${
                isActive ? "bg-white/20 text-yellow-200" : ""
              }`
            }
            aria-current={({ isActive }) => (isActive ? "page" : undefined)}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/add"
            className={({ isActive }) =>
              `text-white font-medium text-lg px-4 py-2 rounded-md transition-colors duration-200 hover:bg-white/20 hover:text-yellow-200 ${
                isActive ? "bg-white/20 text-yellow-200" : ""
              }`
            }
            aria-current={({ isActive }) => (isActive ? "page" : undefined)}
          >
            Add Product
          </NavLink>
        </li>
      </ul>

      <div className="fixed right-10 top-5 text-white font-bold">
        <button
          onClick={handleModeChange}
          className="border border-white px-2 py-1 rounded-md flex items-center gap-2 bg-white/10 hover:bg-white/20 transition"
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
