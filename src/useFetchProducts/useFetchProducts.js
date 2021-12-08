import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getProductsByLocation } from "../redux/reducers/Products/querries";
import { placeLocation } from "../_const";

function useFetchProducts(setLoading) {
  const { category } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    getProductsByLocation(placeLocation, category, dispatch, setLoading);
  }, [dispatch, setLoading, category]);
}

export default useFetchProducts;
