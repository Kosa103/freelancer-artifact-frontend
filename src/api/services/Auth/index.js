import axios from "axios";
import Paths from "../../../utils/paths";
import { API_URL } from "../../../utils/constants";

export const postLogin = async body => {
  const response = await axios.post(
    `${API_URL}/${Paths.Auth.login}`,
    {
      email: body.email,
      password: body.password,
    }
  );

  return response;
};

export const postRegister = async body => {
  const response = await axios.post(
    `${API_URL}/${Paths.Auth.register}`,
    {
      name: body.name,
      email: body.email,
      password: body.password,
      passwordConfirmation: body.passwordConfirmation,
    },
  );

  return response;
};
