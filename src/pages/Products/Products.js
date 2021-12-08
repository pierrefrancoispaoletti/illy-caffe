import React from "react";
import { useSelector } from "react-redux";
import ProductOverview from "../../components/ProductOverview/ProductOverview";
import { selectProductsByCategory } from "../../redux/reducers/Products/selectors";
import useFetchProducts from "../../useFetchProducts/useFetchProducts";

const Products = ({ loading, setLoading }) => {
  const products = useSelector(selectProductsByCategory);
  useFetchProducts(setLoading);

  return (
    <main>
      <ProductOverview products={products} loading={loading} />
    </main>
  );
};

export default Products;
