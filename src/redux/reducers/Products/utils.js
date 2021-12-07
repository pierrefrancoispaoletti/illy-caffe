export const filteredProductsList = (actionType, state, payload) => {
  switch (actionType) {
    case "ADD_PRODUCT":
      return [...state.products, { ...payload }];
    case "DELETE_PRODUCT":
      return state.products.filter((product) => product._id !== payload._id);
    case "UPDATE_PRODUCT": {
      let index = state.products.findIndex(
        (product) => product._id === payload._id
      );
      let update = [...state.products];
      update[index] = payload;
      return [...update];
    }
    default:
      return state.products;
  }
};
