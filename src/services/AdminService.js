import axios from "axios";
import {
  ADMIN_ACTIVE_USERS,
  ADMIN_ALL_USERS,
  ADMIN_EDIT_USER,
  ADMIN_INACTIVE_USERS,
  ADMIN_USERS_BYID,
  CHANGE_PASSWORD,
  CHANGE_ROLE,
  EDIT_USER,
  USER_ACTIVATE,
} from "../constants";

export const getAllUsers = async (payload) => {
  console.log(`Bearer ${payload.access}`);
  try {
    if (payload !== "undefined") {
      if (payload.pageSize != null && payload.pageIndex) {
        let res = await axios.get(
          ADMIN_ALL_USERS +
            `?PageNumber=${payload.pageIndex}&PageSize=${payload.pageSize}`,
          {
            headers: {
              Authorization: `Bearer ${payload.access}`,
            },
          }
        );
        return res.data;
      } else {
        let res = await axios.get(ADMIN_ALL_USERS, {
          headers: {
            Authorization: `Bearer ${payload.access}`,
          },
        });
        return res.data;
      }
    }
  } catch (e) {
    throw handler(e);
  }
};

export const getActiveUsers = async (payload) => {
  try {
    if (payload !== "undefined") {
      let res = await axios.get(
        ADMIN_ACTIVE_USERS +
          `?PageNumber=${payload.pageIndex}&PageSize=${payload.pageSize}`,
        {
          headers: {
            Authorization: `Bearer ${payload.access}`,
          },
        }
      );
      return res.data;
    }
  } catch (e) {
    throw handler(e);
  }
};

export const getInActiveUsers = async (payload) => {
  try {
    if (payload !== "undefined") {
      let res = await axios.get(
        ADMIN_INACTIVE_USERS +
          `?PageNumber=${payload.pageIndex}&PageSize=${payload.pageSize}`,
        {
          headers: {
            Authorization: `Bearer ${payload.access}`,
          },
        }
      );
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

export const editUser = async (payload) => {
  try {
    if (payload !== "undefined") {
      let res = await axios.post(ADMIN_EDIT_USER, payload.data, {
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

export const changeRole = async (payload) => {
  try {
    if (payload !== "undefined") {
      let res = await axios.post(CHANGE_ROLE, payload.data, {
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

export const changeMyPassword = async (payload) => {
  try {
    if (payload !== "undefined") {
      let res = await axios.post(CHANGE_PASSWORD, payload.data, {
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
  if (typeof err.response === "undefined") {
    return null;
  } else {
    return err.response.data;
  }
};
