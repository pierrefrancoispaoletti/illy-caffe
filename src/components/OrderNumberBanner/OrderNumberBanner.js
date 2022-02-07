import { faPhone } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { OrderBannerContainer } from "./order-number-banner.style";

const OrderNumberBanner = ({ top }) => {
  return (
    <a style={{ textDecoration: "none" }} href="tel:0495231535">
      <OrderBannerContainer top={top}>
        <button type="button">
          <div>
            <FontAwesomeIcon className="phone" icon={faPhone} size="2x" />
            <div>Commandes où Livraisons</div>
          </div>
        </button>
      </OrderBannerContainer>
    </a>
  );
};

export default OrderNumberBanner;
