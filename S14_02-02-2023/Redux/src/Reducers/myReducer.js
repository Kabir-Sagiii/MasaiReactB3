let initialData = {
  name: "Masai",
  city: "Banglore",
  electronics: [],
  jewelery: [],
};
const myReducer = (state = initialData, action) => {
  if (action.type === "NAME") {
    return (state = {
      ...state,
      name: action.payload,
    });
  } else if (action.type === "CITY") {
    return (state = {
      ...state,
      city: action.payload,
    });
  } else if (action.type === "ELECTRONIC") {
    return (state = {
      ...state,
      electronics: action.payload,
    });
  }

  return state;
};

export default myReducer;
