import { GETALLUSER } from "../constants";

export const GetAllUser = (payload) => {
  return {
    type: GETALLUSER,
    payload: payload,
  };
};
