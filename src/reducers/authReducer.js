import produce from "immer";
import {
  LOGIN,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  ENTER_EMAIL,
  ENTER_PASSWORD,
  IS_LOGGED,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR
} from "constants/types";

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
      draft.email = '';
      draft.password = '';
      draft.loading = false;
      draft.isAuthenticated = true;
      break;
    case LOGIN_ERROR:
      draft.loading = false;
      draft.error = action.error;
      break;
    case IS_LOGGED:
      draft.isAuthenticated = true;
      break;
    case LOGOUT:
      draft.loading = true;
      break;
    case LOGOUT_SUCCESS:
      draft.isAuthenticated = false;
      draft.loading = false;
      break;
    case LOGOUT_ERROR:
      draft.loading = false;
      break;
  }
}, initialState);

export default authReducer;
