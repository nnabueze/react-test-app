import { LOGIN_SUCCESS, LOGIN_FAILED } from "../constants";

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: action.payload.status,
        isError: false,
        data: action.payload.data,
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
