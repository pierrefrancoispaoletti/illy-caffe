import React, { useEffect, useRef } from "react";
import {
  TableauContainer,
  TableauWrapper,
  TableauTitle,
  SubCategoryFilterContainer,
} from "./tableau-homepage.style";
import { useLocation } from "react-router-dom";
import { categories } from "../../data/categories/categories";
import AddProductButton from "../AddProductButton/AddProductButton";
import ProductModal from "../ProductModal/ProductModal";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/reducers/User/selector";

const TableauHomePage = ({ setFilter, children, filter }) => {
  const location = useLocation();
  let findCategory = categories.find(
    (category) => category.link === location.pathname
  );
  const user = useSelector(selectCurrentUser);

  let prevlocationValueRef = useRef(null);
  useEffect(() => {
    prevlocationValueRef.current = location.pathname;
  });
  const prevlocationValue = prevlocationValueRef.current;

  return (
    <TableauContainer>
      <TableauWrapper
        transition={prevlocationValue !== location.pathname}
        transitionType="scale"
      >
        <TableauTitle>{findCategory?.name}</TableauTitle>
        {findCategory?.subCategory && (
          <SubCategoryFilterContainer>
            <span
              className={`${filter === "" ? "selected" : ""}`}
              onClick={() => setFilter("")}
            >
              Tous
            </span>
            {findCategory?.subCategory?.map((sub) => (
              <span
                className={`${filter === sub.slug ? "selected" : ""}`}
                slug={sub.slug}
                key={sub.name}
                onClick={() => setFilter(sub.slug)}
              >
                {sub.name}
              </span>
            ))}
          </SubCategoryFilterContainer>
        )}
        {user && user.role === "isAdmin" && (
          <div style={{ position: "relative" }}>
            <AddProductButton />
            <ProductModal
              style={{ position: "fixed" }}
              currentCategory={findCategory?.slug}
            />
          </div>
        )}
        {children}
      </TableauWrapper>
    </TableauContainer>
  );
};

export default TableauHomePage;
