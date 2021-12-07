import axios from "axios";
import { developmentServer } from "../../../_const";

export const logger = async (credentials) => {
  const { email, password } = credentials;
  try {
    const response = await axios({
      method: "POST",
      url: `${developmentServer}/auth/login`,
      data: { email, password },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const validateToken = (token) => {
  return axios({
    method: "POST",
    url: `${developmentServer}/verify/`,
    data: { token },
  });
};
