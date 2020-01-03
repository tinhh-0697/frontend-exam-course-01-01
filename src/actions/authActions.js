import { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR, ENTER_EMAIL, ENTER_PASSWORD } from "../constants/types";

/**
 * Authentication Actions
 */

export const enterEmailAction = (email) => {
  return {
    type: ENTER_EMAIL,
    email
  };
};

export const enterPasswordAction = (password) => {
  return {
    type: ENTER_PASSWORD,
    password
  };
};

export const loginAction = (user) => {
  return {
    type: LOGIN,
    user
  };
};

export const loginSuccessAction = () => {
  return {
    type: LOGIN_SUCCESS
  };
};

export const loginErrorAction = (error) => {
  return {
    type: LOGIN_ERROR,
    error
  };
};
