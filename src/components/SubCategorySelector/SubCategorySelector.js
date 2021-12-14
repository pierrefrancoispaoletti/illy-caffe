import { faChevronDown, faChevronUp } from "@fortawesome/pro-solid-svg-icons";
import React, { useEffect, useState } from "react";
import {
  OpenSubMenuChevron,
  SubCategoryFilterContainer,
} from "../TableauHomePage/tableau-homepage.style";

const SubCategorySelector = ({ filter, findCategory, setFilter }) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) {
      setFilter("");
    }
  }, [open, setFilter]);
  return (
    <SubCategoryFilterContainer className={open ? "isOpen" : ""}>
      <div
        className={`${filter === "" ? " menu selected" : "menu"}`}
        onClick={() => setFilter("")}
      >
        <span>Tous</span>
      </div>
      {open &&
        findCategory?.subCategory?.map((sub, index) => (
          <div
            identifier={index + 1}
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
