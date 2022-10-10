import React from "react";
import { useProducts } from "../hooks/useProducts";
import Products from "./Products";

const ProductList = ({ category }) => {
  const { data, isLoading, isError } = useProducts({ category: category });


  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Something went wrong, try again later, please.</div>;
  return <Products products={data} />;
};

export default ProductList;
