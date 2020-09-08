import axios from "axios";

import { ADMIN_LOGIN_URL } from "../constants";

export const LoginService = async (payload) => {
  const formData = new FormData();
  formData.append("email", payload.email);
  formData.append("password", payload.password);
  let res = await axios.post(ADMIN_LOGIN_URL, formData);
  //let { data } = res;
  return res.data;
};
