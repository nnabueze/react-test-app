import { LOGOUT } from "../constants";

export const AdminReducer = (state, action) => {
  switch (action.type) {
    case LOGOUT:
      return {
        ...state,
        isError: false,
        data: {},
      };
    default:
      return state;
  }
};
