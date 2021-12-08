import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getProductsByLocation } from "../redux/reducers/Products/querries";
import { selectProductsByCategory } from "../redux/reducers/Products/selectors";
import { placeLocation } from "../_const";

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
