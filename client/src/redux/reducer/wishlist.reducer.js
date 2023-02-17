export default function wishlistReducer(state = [], action) {
  switch (action.type) {
    case "WISHLIST":
      return [...state, action.payload];
    case "DELETE_WISHLIST":
      return [...state.filter((product) => product._id !== action.payload._id)];

    default:
      return state;
  }
}
