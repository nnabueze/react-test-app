import axios from "axios";

import { ACCOUNT_SIGNUP_URL, ADMIN_LOGIN_URL } from "../constants";

export const LoginService = async (payload) => {
  try {
    const formData = {
      username: payload.email,
      password: payload.password,
    };
    let res = await axios.post(ADMIN_LOGIN_URL, formData);
    return res.data;
  } catch (e) {
    throw handler(e);
  }
};

export const signupService = async (payload) => {
  try {
    let res = await axios.post(ACCOUNT_SIGNUP_URL, payload);
    if (res.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    throw handler(e);
  }
};

export const handler = (err) => {
  return err.response.data;
};
