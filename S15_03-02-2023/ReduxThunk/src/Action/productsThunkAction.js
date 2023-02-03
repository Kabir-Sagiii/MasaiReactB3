// const productThunkAction = (dispatch, getState) => {
//   if (getState().productReducer.products.length === 0) {
//     fetch(api)
//       .then((res) => res.json())
//       .then((data) => {
//         dispatch({
//           type: "PRODUCTS",
//           payload: data,
//         });
//       });
//   }
// };

// export default productThunkAction;

const thunkActionCreator = (api) => {
  return (dispatch, getState) => {
    if (getState().productReducer.products.length === 0) {
      fetch(api)
        .then((res) => res.json())
        .then((data) => {
          dispatch({
            type: "PRODUCTS",
            payload: data,
          });
        });
    }
  };
};

export default thunkActionCreator;
