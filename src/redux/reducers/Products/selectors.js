import { createSelector } from "reselect";

const selectProducts = (state) => state.products;

export const selectProductsByCategory = createSelector(
  [selectProducts],
  ({ products }) => products
);

export const selectModalType = createSelector(
  [selectProducts],
  ({ modalType }) => modalType
);

export const selectProductToEdit = createSelector(
  [selectProducts],
  ({ productToEdit }) => productToEdit
);
