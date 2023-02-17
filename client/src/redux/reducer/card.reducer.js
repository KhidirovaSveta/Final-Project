export default function cardReducer(state = [], action) {
    switch (action.type) {
      case "CARD":
        return [...state, action.payload];
      case "DELETE_CARD":
        return [...state.filter((product) => product._id !== action.payload._id)];
  
      default:
        return state;
    }
  }
  