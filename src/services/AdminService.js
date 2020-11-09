import axios from "axios";
import {
  ADMIN_ACTIVE_USERS,
  ADMIN_ALL_USERS,
  ADMIN_INACTIVE_USERS,
  ADMIN_USERS_BYID,
  USER_ACTIVATE,
} from "../constants";

export const getAllUsers = async (payload) => {
  console.log(payload);
  try {
    if (payload !== "undefined") {
      let res = await axios.get(ADMIN_ALL_USERS, {
        headers: {
          Authorization: `Bearer ${payload.access}`,
        },
      });
      console.log(res);
      return res.data;
    }
  } catch (e) {
    throw handler(e);
  }
};

export const getActiveUsers = async (payload) => {
  try {
    if (payload !== "undefined") {
      let res = await axios.get(ADMIN_ACTIVE_USERS, {
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

export const getInActiveUsers = async (payload) => {
  try {
    if (payload !== "undefined") {
      let res = await axios.get(ADMIN_INACTIVE_USERS, {
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

export const getUsersById = async (payload) => {
  try {
    if (payload !== "undefined") {
      let res = await axios.get(ADMIN_USERS_BYID + payload.id, {
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

export const activateUser = async (payload, isActivate) => {
  //console.log(isActivate);
  try {
    if (isActivate) {
      let res = await axios.post(USER_ACTIVATE, payload.data, {
        headers: {
          Authorization: `Bearer ${payload.access}`,
        },
      });
      return res.data;
    } else {
      let res = await axios.post(USER_ACTIVATE, payload.data, {
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
