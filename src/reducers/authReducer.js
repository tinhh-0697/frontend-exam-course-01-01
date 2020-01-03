import produce from "immer";
import {
  LOGIN,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  ENTER_EMAIL,
  ENTER_PASSWORD
} from "../constants/types";

const initialState = {
  isAuthenticated: false,
  loading: false,
  error: "",
  email: "",
  password: ""
};

/* eslint-disable default-case, no-param-reassign */
const authReducer = produce((draft, action) => {
  switch (action.type) {
    case ENTER_EMAIL:
      draft.email = action.email;
      break;
    case ENTER_PASSWORD:
      draft.password = action.password;
      break;
    case LOGIN:
      draft.error = "";
      draft.loading = true;
      break;
    case LOGIN_SUCCESS:
      draft.loading = false;
      draft.isAuthenticated = true;
      break;
    case LOGIN_ERROR:
      draft.loading = false;
      draft.error = action.error;
      break;
  }
}, initialState);

export default authReducer;
