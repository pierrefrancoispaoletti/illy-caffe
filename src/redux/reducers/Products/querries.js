import axios from "axios";
import { developmentServer } from "../../../_const";
import { setUserMessage } from "../User/actions";
import {
  addProductAction,
  deleteProductAction,
  getProductsByLocationAction,
  toggleModal,
  updateProductAction,
} from "./actions";

export const getProductsByLocation = async (location, category, dispatch) => {
  try {
    const response = await axios({
      method: "GET",
      url: `${developmentServer}/api/products/${location}/${category}`,
    });
    dispatch(getProductsByLocationAction(response.data));
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (productId, dispatch) => {
  if (!productId) {
    return false;
  }

  try {
    const response = await axios({
      method: "DELETE",
      url: `${developmentServer}/api/products/deleteProduct`,
      data: { _id: productId },
    });
    dispatch(deleteProductAction(response.data.deletedProduct));
    dispatch(setUserMessage(response.data.message));
  } catch (error) {
    console.log(error);
  }
};

export const addProduct = async (product, dispatch) => {
  try {
    const response = await axios({
      method: "POST",
      url: `${developmentServer}/api/products/addProduct`,
      data: { product },
    });

    dispatch(addProductAction(response.data.newProduct));
    dispatch(setUserMessage(response.data.message));
    dispatch(toggleModal(""));
  } catch (error) {
    console.log(error);
  }
};

export const updateProdut = async (update, dispatch) => {
  try {
    const response = await axios({
      method: "POST",
      url: `${developmentServer}/api/products/updateProduct`,
      data: { update },
    });

    dispatch(updateProductAction(response.data.updatedProduct));
    dispatch(setUserMessage(response.data.message));
    dispatch(toggleModal(""));
  } catch (error) {
    console.log(error);
  }
};
