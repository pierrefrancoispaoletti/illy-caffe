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

// ajouter une check des status dans les reponses pour savoir si onrenvoit la data ou le message

export const getProductsByLocation = async (location, category, dispatch) => {
  try {
    const response = await axios({
      method: "GET",
      url: `${developmentServer}/api/products/${location}/${category}`,
    });
    if (response.status === 200) {
      dispatch(getProductsByLocationAction(response.data));
    } else {
      dispatch(setUserMessage(response.data.message));
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (productId, dispatch, token) => {
  if (!productId) {
    return false;
  }

  try {
    const response = await axios({
      method: "DELETE",
      url: `${developmentServer}/api/products/deleteProduct`,
      data: { _id: productId },
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (response.status === 202) {
      dispatch(deleteProductAction(response.data.deletedProduct));
    }
    dispatch(setUserMessage(response.data.message));
  } catch (error) {
    console.log(error);
  }
};

export const addProduct = async (product, dispatch, token) => {
  try {
    const response = await axios({
      method: "POST",
      url: `${developmentServer}/api/products/addProduct`,
      data: { product },
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (response.status === 201) {
      dispatch(addProductAction(response.data.newProduct));
    }
    dispatch(setUserMessage(response.data.message));
    dispatch(toggleModal(""));
  } catch (error) {
    console.log(error);
  }
};

export const updateProdut = async (update, dispatch, token) => {
  try {
    const response = await axios({
      method: "POST",
      url: `${developmentServer}/api/products/updateProduct`,
      data: { update },
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (response.status === 202) {
      dispatch(updateProductAction(response.data.updatedProduct));
    }
    dispatch(setUserMessage(response.data.message));
    dispatch(toggleModal(""));
  } catch (error) {
    console.log(error);
  }
};
