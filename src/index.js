import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { ConnectedRouter } from "connected-react-router";
import { push } from "connected-react-router";
import App from "./App";
import configureStore, { history } from "./configureStore";
import auth from "./firebase";
import { loginSuccessAction, logOutSuccessAction } from "./actions/authActions";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

const initialState = {};
export const store = configureStore(initialState);

auth.onAuthStateChanged(user => {
  if (user) {
    const userData = {
      uid: user.uid,
      name: user.displayName
    };
    store.dispatch(loginSuccessAction(userData));
  } else {
    store.dispatch(logOutSuccessAction());
    store.dispatch(push("/login"));
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
