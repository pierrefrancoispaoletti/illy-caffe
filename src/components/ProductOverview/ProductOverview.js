import React, { useCallback, useEffect } from "react";
import { categories } from "../../data/categories/categories";
import LoaderElement from "../Loader/LoaderElement";
import ProductElement from "../ProductElement/ProductElement";
import TableauHomePage from "../TableauHomePage/TableauHomePage";
const ProductOverview = ({ loading, products, setFilter, filter }) => {
  const findSubCategoryName = useCallback((product) => {
    let scSlug;
    let categoryName = categories
      .map(
        (category) =>
          category?.slug === product?.category &&
          category?.subCategory?.find((sc) => {
            if (sc?.slug === product?.subCategory) {
              scSlug = sc?.slug;
            }
            return sc?.slug === product?.subCategory;
          })
      )
      .filter((p) => p)[0]?.name;
    return <span className={`subcategory ${scSlug}`}>{categoryName}</span>;
  }, []);

  useEffect(() => {
    console.log("here");
    const removeDuplicateSpans = (classname) => {
      let spans = document.querySelectorAll(`.${classname}`);
      spans.forEach((element, index) => {
        if (index > 0) {
          element?.remove();
        }
      });
    };
    let classNames = [
      "classiques",
      "monoarabica",
      "spéciaux",
      "illy-crema",
      "domori",
      "recettes-froides",
      "sodas",
      "eaux",
      "softs",
      "granita",
      "bieres",
    ];
    classNames.forEach((className) => removeDuplicateSpans(className));
    //methode caca pour faire ça
  });
  return (
    <TableauHomePage setFilter={setFilter} filter={filter}>
      {loading ? (
        <LoaderElement />
      ) : (
        products?.map((product) => {
          return (
            <div key={product._id} style={{ width: "100%" }}>
              {product?.subCategory && findSubCategoryName(product)}
              <ProductElement product={product} />
            </div>
          );
        })
      )}
    </TableauHomePage>
  );
};

export default ProductOverview;
