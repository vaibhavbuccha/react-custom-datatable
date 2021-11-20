export const user = (user) => {
  return (dispatch) => {
    dispatch({
      type: "user",
      payload: user,
    });
  };
};
