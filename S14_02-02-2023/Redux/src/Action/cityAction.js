export const cityAction = (cityData, dispatch) => {
  //   alert(cityData);

  dispatch({
    type: "CITY",
    payload: cityData,
  });
};
