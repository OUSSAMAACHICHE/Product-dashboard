import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AlertProvider } from "./context/AlertContext.jsx";
import { CategoryContext, categories } from "./context/CategoriesContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AlertProvider>
      <CategoryContext.Provider value={categories}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CategoryContext.Provider>
    </AlertProvider>
  </StrictMode>
);
