import { useState } from "react";

export function useProducts() {
  const [products, setProducts] = useState(() => {
    const stored = localStorage.getItem("products");
    return stored ? JSON.parse(stored) : [];
  });

  return [products, setProducts];
}
