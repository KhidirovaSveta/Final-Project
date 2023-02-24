let initialState = {
    loading: true,
    data: undefined,
    error: undefined,
    products: []
  };
  
  export default function productsReducer(state = initialState, action) {
    switch (action.type) {
      case "PENDING":
        return {
          loading: true,
        };
      case "FULFILLED":
        return {
          loading: false,
          data: action.payload,
        };
      case "REJECTED":
        return {
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  }