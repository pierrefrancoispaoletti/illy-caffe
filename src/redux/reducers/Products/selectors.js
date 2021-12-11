import { createSelector } from "reselect";

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
      : products
  );
