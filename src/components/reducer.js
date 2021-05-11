import axios from "axios";

const initialState = {
  value: 0,
  users: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        value: state.value + 1,
      };
    case "decrement":
      return {
        ...state,
        value: state.value - 1,
      };
    case "setUsers":
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export const fetchUsers = () => async (dispatch, getState) => {
  const { data: users } = await axios.get("http://localhost:5100/users");

  dispatch({
    type: "setUsers",
    payload: users,
  });
};
