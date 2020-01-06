import { doSignInWithEmailAndPassword, doLogout } from "./../firebase";
import { push } from "connected-react-router";
import { all, put, takeLatest } from "redux-saga/effects";
import { LOGIN, LOGOUT } from "../constants/types";
import { loginErrorAction, logOutSuccessAction } from "../actions/authActions";

function* handleLogin(payload) {
  const { email, password } = payload.user;

  try {
    yield doSignInWithEmailAndPassword(email, password);
  } catch (error) {
    if (error.code === "auth/wrong-password")
      return yield put(loginErrorAction("Mật khẩu không đúng"));
    if (error.code === "auth/user-disabled")
      return yield put(loginErrorAction("Tài khoản này đã bị khoá"));
    if (error.code === "auth/user-not-found")
      return yield put(loginErrorAction("Tài khoản không tồn tại"));
    yield put(loginErrorAction("Lỗi hệ thống"))
  }
}

function* handleLogout() {
  try {
    yield doLogout();
    yield put(logOutSuccessAction());
    yield put(push('/login'));
  } catch (error ) {
    console.log('Đăng xuất thất bại!');
  }
}

// All export
export default function* rootSaga() {
  yield all([takeLatest(LOGIN, handleLogin)]);
  yield all([takeLatest(LOGOUT, handleLogout)]);
}
