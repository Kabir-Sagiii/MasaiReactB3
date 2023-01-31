let initialData = {
  name: "",
  city: "",
};
const myReducer = (state = initialData, action) => {
  if (action.type === "NAME") {
    return (state = {
      ...state,
      name: action.payload,
    });
  }

  return state;
};

export default myReducer;
