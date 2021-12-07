import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/pro-light-svg-icons";
import FormInput from "../FormInput/FormInput";
import { useDispatch, useSelector } from "react-redux";
import {
  AddProductButtonStyled,
  AddProductModalContainer,
  AddProductTitle,
  CheckBoxContainer,
} from "./product-modal.style";
import {
  addProduct,
  updateProdut,
} from "../../redux/reducers/Products/querries";
import {
  selectModalType,
  selectProductToEdit,
} from "../../redux/reducers/Products/selectors";
import { toggleModal } from "../../redux/reducers/Products/actions";
import { placeLocation } from "../../_const";
import { selectCurrentUser } from "../../redux/reducers/User/selector";

const ProductModal = ({ currentCategory }) => {
  const { type, open } = useSelector(selectModalType);
  const productToEdit = useSelector(selectProductToEdit);
  const { token } = useSelector(selectCurrentUser);

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
      { value: "rouge", isChecked: false },
      { value: "blanc", isChecked: false },
      { value: "rosé", isChecked: false },
    ],
  };

  const [
    { _id, title, description, price, category, location, couleur, visible },
    setProduct,
  ] = useState(initialState);

  const clearState = () => setProduct({ ...initialState });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newProduct = {
      title,
      description,
      price,
      category,
      location,
      visible,
      couleur,
    };
    if (type === "ajouter") {
      addProduct(newProduct, dispatch, token).then(() => clearState());
    }
    if (type === "editer") {
      updateProdut({ ...newProduct, _id }, dispatch, token).then(() =>
        clearState()
      );
    }
  };

  return (
    <AddProductModalContainer open={open}>
      <AddProductTitle>
        <h3>{`${type?.toUpperCase()} dans ${currentCategory}`}</h3>
        <FontAwesomeIcon
          icon={faTimes}
          size="1x"
          onClick={() => dispatch(toggleModal(type))}
        />
      </AddProductTitle>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="title"
          label="Nom du produit"
          value={title}
          handleChange={handleChange}
          required
        />
        <FormInput
          type="text"
          name="description"
          label="Description"
          value={description}
          handleChange={handleChange}
        />
        <FormInput
          type="number"
          name="price"
          pattern="\\d*"
          step={0.1}
          handleChange={handleChange}
          label="Prix"
          value={price}
          required
        />
        {currentCategory === "le-vin" && (
          <CheckBoxContainer>
            {couleur.map((color) => (
              <div key={color.value}>
                <label htmlFor={color.value}>{color.value.toUpperCase()}</label>
                <input
                  name={color.value}
                  type="checkbox"
                  checked={color.isChecked}
                  value={color.value}
                  onChange={() =>
                    setProduct((prevState) => ({
                      ...prevState,
                      ...(color.isChecked = !color.isChecked),
                    }))
                  }
                />
              </div>
            ))}
          </CheckBoxContainer>
        )}
        <AddProductButtonStyled type="submit" modalType={type}>
          {`${type} un produit`?.toUpperCase()}
        </AddProductButtonStyled>
      </form>
    </AddProductModalContainer>
  );
};

export default ProductModal;
