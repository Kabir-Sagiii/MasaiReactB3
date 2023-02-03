const initialData = {
  products: [],
};

const productReducer = (state = initialData, action) => {
  // console.log("Reducer execution started");
  if (action.type === "PRODUCTS") {
    return (state = {
      ...state,
      products: action.payload,
    });
  }
  return state;
};

export default productReducer;
