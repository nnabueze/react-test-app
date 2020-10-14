import axios from "axios";
import { ADMIN_ALL_USERS } from "../constants";

export const getAllUsers = async (payload) => {
  console.log(payload);
  try {
    if (payload !== "undefined") {
      let res = await axios.get(ADMIN_ALL_USERS, {
        headers: {
          Authorization: `Bearer ${payload.access}`,
        },
      });
      return res.data;
    }
  } catch (e) {
    throw handler(e);
  }
};

export const handler = (err) => {
  return err.response.data;
};
