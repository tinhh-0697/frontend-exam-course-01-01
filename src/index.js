import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import App from "./App";
import { ConnectedRouter } from "connected-react-router";
import configureStore, { history } from "./configureStore";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';

import auth from "./firebase";
import { loginSuccessAction, logOutSuccessAction } from "./actions/authActions";

const initialState = {};
export const store = configureStore(initialState);

auth.onAuthStateChanged(user => {
  if (user) {
    store.dispatch(loginSuccessAction());
  } else {
    store.dispatch(logOutSuccessAction());
  }
});

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
