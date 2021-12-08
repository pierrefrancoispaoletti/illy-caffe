import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import ProductOverview from "../../components/ProductOverview/ProductOverview";
import { getProductsByLocation } from "../../redux/reducers/Products/querries";
import { selectProductsByCategory } from "../../redux/reducers/Products/selectors";
import { placeLocation } from "../../_const";

const Products = ({ loading, setLoading }) => {
  const products = useSelector(selectProductsByCategory);
  const { category } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    getProductsByLocation(placeLocation, category, dispatch, setLoading);
  }, [category, dispatch, setLoading]);

  return (
    <main>
      <ProductOverview products={products} loading={loading} />
    </main>
  );
};

export default Products;
