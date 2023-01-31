import myStore from "../ReduxStore/Store";
export const myAction = (data) => {
  //   alert(data);

  myStore.dispatch({
    type: "NAME",
    payload: data,
  });
};
