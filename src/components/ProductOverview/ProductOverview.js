import React from "react";
import LoaderElement from "../Loader/LoaderElement";
import ProductElement from "../ProductElement/ProductElement";
import TableauHomePage from "../TableauHomePage/TableauHomePage";

const ProductOverview = ({ loading, products, setFilter, filter }) => {
  return (
    <TableauHomePage setFilter={setFilter} filter={filter}>
      {loading ? (
        <LoaderElement />
      ) : (
        products?.map((product) => (
          <ProductElement key={product._id} product={product} />
        ))
      )}
    </TableauHomePage>
  );
};

export default ProductOverview;
