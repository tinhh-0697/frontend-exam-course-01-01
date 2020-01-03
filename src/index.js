import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import App from "./App";

import { ConnectedRouter } from "connected-react-router";
import axios from "axios";

import configureStore, { history } from "./configureStore";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

const initialState = {};
export const store = configureStore(initialState);

axios.defaults.baseURL =
  "http://localhost:5000/exams-cms-functions/europe-west1/api";

const token = localStorage.FBIdToken;
// if (token) {
//   const decodedToken = jwtDecode(token);
//   if (decodedToken.exp * 1000 < Date.now()) {
//     store.dispatch(authLogout());
//   } else {
//     store.dispatch(authSuccess());
//     axios.defaults.headers.common["Authorization"] = token;
//   }
// }

// let res = onAuthUserListener();
// console.log(res);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
