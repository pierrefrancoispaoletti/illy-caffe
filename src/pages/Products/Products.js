import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import ProductElement from "../../components/ProductElement/ProductElement";
import TableauHomePage from "../../components/TableauHomePage/TableauHomePage";
import { getProductsByLocation } from "../../redux/reducers/Products/querries";
import { selectProductsByCategory } from "../../redux/reducers/Products/selectors";
import { placeLocation } from "../../_const";

const Products = () => {
  const products = useSelector(selectProductsByCategory);
  const params = useParams();
  const dispatch = useDispatch();
  const { category } = params;

  useEffect(() => {
    getProductsByLocation(placeLocation, category, dispatch);
  }, [category, dispatch]);

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

export default Products;
