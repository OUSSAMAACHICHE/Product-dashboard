import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-indigo-500 to-purple-600 shadow-md px-8 py-4">
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
    </nav>
  );
};

export default Navbar;
