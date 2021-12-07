import React from "react";
import {
  TableauContainer,
  TableauWrapper,
  TableauTitle,
} from "./tableau-homepage.style";
import { useLocation } from "react-router-dom";
import { categories } from "../../data/categories/categories";
import AddProductButton from "../AddProductButton/AddProductButton";
import ProductModal from "../ProductModal/ProductModal";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/reducers/User/selector";

const TableauHomePage = ({ children }) => {
  const location = useLocation();
  let findCategory = categories.find(
    (category) => category.link === location.pathname
  );
  const user = useSelector(selectCurrentUser);

  return (
    <TableauContainer>
      <TableauWrapper>
        <TableauTitle>{findCategory?.name}</TableauTitle>
        {user && user.role === "isAdmin" && (
          <>
            <AddProductButton />
            <ProductModal currentCategory={findCategory?.slug} />
          </>
        )}
        {children}
      </TableauWrapper>
    </TableauContainer>
  );
};

export default TableauHomePage;
