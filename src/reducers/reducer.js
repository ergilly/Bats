const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEMS":
      let newState = [...action.items];
      return newState;
    default:
      return state;
  }
};

export default reducer;
