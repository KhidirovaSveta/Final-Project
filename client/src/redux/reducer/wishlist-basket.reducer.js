export default function wishlistBasketReducer(state = [], action) {
  switch (action.type) {
    case "WISHLIST_BASKET":
      return [...state, action.payload];
    case "DELETE_WISHLIST_BASKET":
      return [...state.filter((product) => product._id !== action.payload._id)];

    default:
      return state;
  }
}
