import axios from "axios";
import { ADMIN_ALL_USERS } from "../constants";

export const getAllUsers = async (payload) => {
  console.log(payload);
  try {
    let res = await axios.get(ADMIN_ALL_USERS, {
      headers: {
        Authorization: `Bearer ${payload}`,
      },
    });

    if (res.status === 200) {
      //return res.data;
      console.log(res.data);
    } else {
      //return null;
      console.log("no");
    }
  } catch (error) {}
};
