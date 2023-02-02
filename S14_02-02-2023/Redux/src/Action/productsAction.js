const productAction = (data, dispatch) => {
  if (data.length === 0) {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({
          type: "PRODUCTS",
          payload: data,
        });
      });
  }
};

export default productAction;
