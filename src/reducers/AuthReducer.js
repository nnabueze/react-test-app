import { LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT } from "../constants";

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        isError: false,
        data: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isAuth: false,
        isError: false,
        data: {},
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isAuth: false,
        isError: true,
        data: action.payload,
      };
    default:
      return state;
  }
};
