import { doSignInWithEmailAndPassword } from "./../firebase";
import { push } from "connected-react-router";
import { fork, all, put, call, takeLatest } from "redux-saga/effects";
import { LOGIN } from "../constants/types";
import { loginErrorAction } from "../actions/authActions";

function* handleLogin(payload) {
  const { email, password } = payload.user;

  try {
    let res;
    yield res = doSignInWithEmailAndPassword(email, password);

    console.log(res);
  } catch (error) {
    if (error.code === "auth/wrong-password")
      yield put(loginErrorAction("Mật khẩu không đúng"));
    console.log(error);
  }
}

// All export
export default function* rootSaga() {
  yield all([takeLatest(LOGIN, handleLogin)]);
}
