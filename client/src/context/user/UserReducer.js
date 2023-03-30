import * as types from "../types";

const UserReducer = (state, action) => {
  if (
    action.type === types.REGISTER_SUCCESS ||
    action.type === types.LOGIN_SUCCESS
  ) {
    localStorage.setItem("isAuthenicated", true);
    return {
      ...state,
      isAuthenicated: true,
    };
  } else if (action.type === types.GET_PROFILE_SUCCESS) {
    return {
      ...state,
      allUser: action.payload,
    };
  } else if (action.type === types.CLEAR_ERROR) {
    return {
      ...state,
      error: null,
    };
  } else {
    return state;
  }
};

export default UserReducer;
