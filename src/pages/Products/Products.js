import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import LoaderElement from "../../components/Loader/LoaderElement";
import ProductElement from "../../components/ProductElement/ProductElement";
import TableauHomePage from "../../components/TableauHomePage/TableauHomePage";
import { getProductsByLocation } from "../../redux/reducers/Products/querries";
import { selectProductsByCategory } from "../../redux/reducers/Products/selectors";
import { placeLocation } from "../../_const";

const Products = ({ loading, setLoading }) => {
  const products = useSelector(selectProductsByCategory);
  const params = useParams();
  const dispatch = useDispatch();
  const { category } = params;

  useEffect(() => {
    getProductsByLocation(placeLocation, category, dispatch, setLoading);
  }, [category, dispatch, setLoading]);

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

export default Products;
