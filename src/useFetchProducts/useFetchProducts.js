import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getProductsByLocation } from "../redux/reducers/Products/querries";
import { placeLocation } from "../_const";
import { selectProductsByCategory } from "../redux/reducers/Products/selectors";

function useFetchProducts(setLoading) {
  const products = useSelector(selectProductsByCategory);
  const { category } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    getProductsByLocation(placeLocation, category, dispatch, setLoading);
  }, [dispatch, setLoading, category]);

  return products;
}

export default useFetchProducts;
