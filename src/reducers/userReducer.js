const userReducer = (state = "", action) => {
  switch (action.type) {
    case "ADD_USER":
      // console.log("state",state,"action",action)

      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case "DELETE_USER":
      console.log("del", state, "del", action);

      return {
        ...state,
        items: state.items.filter((user) => user.id != action.payload),
      };

    default:
      return state;
  }
};
export default userReducer;
