import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductOverview from "../../components/ProductOverview/ProductOverview";
import { getProductsByLocation } from "../../redux/reducers/Products/querries";
import { selectProductsByCategory } from "../../redux/reducers/Products/selectors";
import { placeLocation } from "../../_const";

const Home = ({ loading, setLoading }) => {
  const products = useSelector(selectProductsByCategory);
  const dispatch = useDispatch();
  useEffect(() => {
    getProductsByLocation(placeLocation, "", dispatch, setLoading);
  }, [dispatch, setLoading]);
  return (
    <main>
      <ProductOverview products={products} loading={loading} />
    </main>
  );
};

export default Home;
