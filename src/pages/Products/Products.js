import React from "react";
import ProductOverview from "../../components/ProductOverview/ProductOverview";
import useFetchProducts from "../../useFetchProducts/useFetchProducts";

const Products = ({ loading, setLoading }) => {
  const products = useFetchProducts(setLoading);

  return (
    <main>
      <ProductOverview products={products} loading={loading} />
    </main>
  );
};

export default Products;
