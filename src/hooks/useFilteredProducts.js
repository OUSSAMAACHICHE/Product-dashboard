import { useMemo } from "react";

export function useFilteredProducts(allProducts, searchTerm, category) {
  return useMemo(() => {
    let filtered = allProducts;
    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.productName.toLowerCase().includes(searchTerm)
      );
    }
    if (category && category !== "All") {
      filtered = filtered.filter(
        (product) => product.productCategory === category
      );
    }
    return filtered;
  }, [allProducts, searchTerm, category]);
}
