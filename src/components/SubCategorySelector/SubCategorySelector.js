import { faChevronDown, faChevronUp } from "@fortawesome/pro-solid-svg-icons";
import React, { useEffect, useState } from "react";
import {
  OpenSubMenuChevron,
  SubCategoryFilterContainer,
} from "../TableauHomePage/tableau-homepage.style";

const SubCategorySelector = ({ filter, findCategory, setFilter }) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    let selectedElement = document.querySelector(".menu.selected");
    let firstElement = document.querySelector(".menu");
    if (selectedElement && open) {
      firstElement?.before(selectedElement);
    }
    if (selectedElement && !open) {
      firstElement?.replaceWith(selectedElement);
    }
  });
  return (
    <SubCategoryFilterContainer
      className={
        open ? "subcategory-container isOpen" : "subcategory-container"
      }
    >
      <div
        className={`${filter === "" ? " menu selected" : "menu"}`}
        onClick={() => setFilter("")}
      >
        <span>Tous</span>
      </div>
      {open &&
        findCategory?.subCategory?.map((sub, index) => (
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
      <OpenSubMenuChevron
        className="chevron"
        icon={open ? faChevronUp : faChevronDown}
        size="2x"
        onClick={() => setOpen(!open)}
      />
    </SubCategoryFilterContainer>
  );
};

export default SubCategorySelector;
