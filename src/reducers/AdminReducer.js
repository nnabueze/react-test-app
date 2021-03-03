import { GETALLUSER, LOGOUT } from "../constants";

export const AdminReducer = (state, action) => {
  switch (action.type) {
    case LOGOUT:
      return {
        ...state,
        isError: false,
        data: {},
      };
    case GETALLUSER:
      return {
        ...state,
        isError: false,
        data: action.payload,
      };
    default:
      return state;
  }
};
