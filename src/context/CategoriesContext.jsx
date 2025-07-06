import { createContext } from "react";
import {
  Monitor,
  Shirt,
  Home,
  Book,
  Droplet,
  Dumbbell,
  Gamepad,
} from "lucide-react";

const categories = [
  { name: "Electronics", icon: <Monitor className="w-6 h-6" />, id: 1 },
  { name: "Clothing & Apparel", icon: <Shirt className="w-6 h-6" />, id: 2 },
  { name: "Home & Kitchen", icon: <Home className="w-6 h-6" />, id: 3 },
  { name: "Books & Stationery", icon: <Book className="w-6 h-6" />, id: 4 },
  {
    name: "Beauty & Personal Care",
    icon: <Droplet className="w-6 h-6" />,
    id: 5,
  },
  { name: "Sports & Outdoors", icon: <Dumbbell className="w-6 h-6" />, id: 6 },
  { name: "Toys & Games", icon: <Gamepad className="w-6 h-6" />, id: 7 },
];

const CategoryContext = createContext(categories);

export { categories, CategoryContext };
