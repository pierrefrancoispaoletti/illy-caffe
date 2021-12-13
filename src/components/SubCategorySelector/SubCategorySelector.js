import React from "react";
import { SubCategoryFilterContainer } from "../TableauHomePage/tableau-homepage.style";

const SubCategorySelector = ({ filter, findCategory, setFilter }) => {
  return findCategory?.subCategory ? (
    <SubCategoryFilterContainer>
      <div
        className={`${filter === "" ? " menu selected" : "menu"}`}
        onClick={() => setFilter("")}
      >
        <span>Tous</span>
      </div>
      {findCategory?.subCategory?.map((sub) => (
        <div
          key={sub.name}
          className={`${filter === sub.slug ? "menu selected" : "menu"}`}
          onClick={() => setFilter(sub.slug)}
        >
          <span className="subcategory-name">{sub.name}</span>{" "}
          {sub?.logo && (
            <img width={sub?.width} src={sub?.logo} alt={sub?.alt} />
          )}
        </div>
      ))}
    </SubCategoryFilterContainer>
  ) : (
    <></>
  );
};

export default SubCategorySelector;
