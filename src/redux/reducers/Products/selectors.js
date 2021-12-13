import { createSelector } from "reselect";

const cafeOrders = {
  classiques: 0,
  spéciaux: 1,
  monoarabica: 2,
  "recettes-froides": 3,
  "illy-crema": 4,
  domori: 5,
  eaux: 6,
  softs: 7,
  granita: 8,
  bieres: 9,
};

const compare = (a, b) => {
  if (a === b) return 0;
  return a < b ? -1 : 1;
};
const selectProducts = (state) => state.products;

export const selectProductsByCategory = createSelector(
  [selectProducts],
  ({ products }) => products.sort((a, b) => (b.price > a.price ? -1 : 1))
);

export const selectModalType = createSelector(
  [selectProducts],
  ({ modalType }) => modalType
);

export const selectProductToEdit = createSelector(
  [selectProducts],
  ({ productToEdit }) => productToEdit
);

export const selectProductsBySubCategory = (filter) =>
  createSelector([selectProductsByCategory], (products) =>
    filter
      ? products.filter((product) =>
          product.subCategory ? product.subCategory === filter : product
        )
      : products.sort((a, b) => {
          const index_result = compare(
            cafeOrders[a?.subCategory],
            cafeOrders[b?.subCategory]
          );

          if (index_result === 0) {
            return compare(a.title, b.title);
          }

          return index_result;
        })
  );
