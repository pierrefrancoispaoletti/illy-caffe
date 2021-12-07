import React from "react";
import {
  WinePriceContainer,
  WinePriceElement,
} from "../TableauHomePage/tableau-homepage.style";

const WineElement = ({ couleur }) => {
  return (
    <WinePriceContainer>
      {couleur.map(
        (color) =>
          color?.isChecked && (
            <WinePriceElement
              className="price"
              key={color.value}
              color={color.value}
            >
              {Number(color.price).toFixed(2)} €
            </WinePriceElement>
          )
      )}
    </WinePriceContainer>
  );
};

export default WineElement;
