import React from "react";
import AdminButtonBar from "../AdminButtonBar/AdminButtonBar";
import {
  TableauContent,
  WineColorContainer,
  WineItemElement,
} from "../TableauHomePage/tableau-homepage.style";
import { selectCurrentUser } from "../../redux/reducers/User/selector";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWineBottle } from "@fortawesome/pro-solid-svg-icons";

const ProductElement = ({ product }) => {
  const { _id, price, description, title, visible, couleur } = product;
  const user = useSelector(selectCurrentUser);
  return (
    <TableauContent visible={user?.role === "isAdmin" || visible}>
      {user && user.role === "isAdmin" && (
        <AdminButtonBar _id={_id} product={product} />
      )}
      <h3 className="title">
        {`${visible ? "" : "CACHÉ : "} ${title}`}
        <span className="price">{price?.toFixed(2)}€</span>
      </h3>
      <WineColorContainer>
        {couleur.map(
          (color) =>
            color.isChecked && (
              <WineItemElement key={color.value} color={color.value}>
                <FontAwesomeIcon icon={faWineBottle} size="2x" />
              </WineItemElement>
            )
        )}
      </WineColorContainer>
      <p className="description">{description}</p>
    </TableauContent>
  );
};

export default ProductElement;
