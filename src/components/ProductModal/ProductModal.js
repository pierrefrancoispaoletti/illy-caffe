import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../redux/reducers/Products/actions";
import {
  selectModalType,
  selectProductToEdit,
} from "../../redux/reducers/Products/selectors";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/pro-light-svg-icons";

import ProductModalForm from "../ProductModalForm/ProductModalForm";
import WinePartProductModal from "../WinePartProductModal/WinePartProductModal";

import { placeLocation } from "../../_const";

import {
  AddProductModalContainer,
  AddProductTitle,
  CloseIconButton,
} from "./product-modal.style";

const ProductModal = ({ currentCategory }) => {
  const { type, open } = useSelector(selectModalType);
  const productToEdit = useSelector(selectProductToEdit);

  const dispatch = useDispatch();
  const initialState = {
    _id: "",
    title: "",
    description: "",
    price: "",
    location: placeLocation,
    category: "",
    visible: true,
    couleur: [
      { value: "rouge", isChecked: false, price: "" },
      { value: "blanc", isChecked: false, price: "" },
      { value: "rosé", isChecked: false, price: "" },
    ],
  };

  const [product, setProduct] = useState(initialState);

  useEffect(() => {
    if (type === "ajouter") {
      setProduct((prevState) => ({
        ...prevState,
        category: currentCategory,
        location: placeLocation,
      }));
    }
    if (type === "editer") {
      setProduct((prevState) => ({
        ...prevState,
        ...productToEdit,
      }));
    }
  }, [currentCategory, productToEdit, type, open]);

  return (
    <AddProductModalContainer open={open}>
      <AddProductTitle>
        <h3>{`${type?.toUpperCase()} dans ${currentCategory}`}</h3>
        <CloseIconButton
          type="button"
          onClick={() => dispatch(toggleModal(type))}
        >
          <FontAwesomeIcon icon={faTimes} size="1x" />
        </CloseIconButton>
      </AddProductTitle>
      <ProductModalForm
        type={type}
        setProduct={setProduct}
        initialState={initialState}
        dispatch={dispatch}
        {...product}
      >
        {currentCategory === "le-vin" && (
          <WinePartProductModal
            couleur={product.couleur}
            setProduct={setProduct}
          />
        )}
      </ProductModalForm>
    </AddProductModalContainer>
  );
};

export default ProductModal;
