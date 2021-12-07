import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductElement from "../../components/ProductElement/ProductElement";
import TableauHomePage from "../../components/TableauHomePage/TableauHomePage";
import { getProductsByLocation } from "../../redux/reducers/Products/querries";
import { selectProductsByCategory } from "../../redux/reducers/Products/selectors";
import { placeLocation } from "../../_const";

const Home = () => {
  const products = useSelector(selectProductsByCategory);
  const dispatch = useDispatch();
  useEffect(() => {
    getProductsByLocation(placeLocation, "today", dispatch);
  }, [dispatch]);
  return (
    <main>
      <TableauHomePage>
        {products?.map((product) => (
          <ProductElement key={product._id} product={product} />
        ))}
      </TableauHomePage>
    </main>
  );
};

export default Home;
