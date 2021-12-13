import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductOverview from "../../components/ProductOverview/ProductOverview";
import { selectProductsBySubCategory } from "../../redux/reducers/Products/selectors";
import useFetchProducts from "../../useFetchProducts/useFetchProducts";

const ProductsPage = ({ loading, setLoading }) => {
  useFetchProducts(setLoading);
  const [filter, setFilter] = useState("");
  const products = useSelector(selectProductsBySubCategory(filter));

  useEffect(() => {
    setFilter("");
  }, [loading]);

  return (
    <main>
      <ProductOverview
        products={products}
        loading={loading}
        setFilter={setFilter}
        filter={filter}
      />
    </main>
  );
};

export default ProductsPage;
