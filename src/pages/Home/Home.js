import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoaderElement from "../../components/Loader/LoaderElement";
import ProductElement from "../../components/ProductElement/ProductElement";
import TableauHomePage from "../../components/TableauHomePage/TableauHomePage";
import { getProductsByLocation } from "../../redux/reducers/Products/querries";
import { selectProductsByCategory } from "../../redux/reducers/Products/selectors";
import { placeLocation } from "../../_const";

const Home = ({ loading, setLoading }) => {
  const products = useSelector(selectProductsByCategory);
  const dispatch = useDispatch();
  useEffect(() => {
    getProductsByLocation(placeLocation, "today", dispatch, setLoading);
  }, [dispatch, setLoading]);
  return (
    <main>
      <TableauHomePage>
        {loading ? (
          <LoaderElement />
        ) : (
          products?.map((product) => (
            <ProductElement key={product._id} product={product} />
          ))
        )}
      </TableauHomePage>
    </main>
  );
};

export default Home;
