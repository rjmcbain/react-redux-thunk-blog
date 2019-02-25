export default (state = [], action) => {
  // if (action.type === "FETCH_POSTS") {
  //   return action.payload;
  // }

  // return state;
  switch (
    action.type // Common syntax in reducers
  ) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return state;
  }
};
