import {
  doSignInWithEmailAndPassword,
  doLogout,
  getArticles,
  addArticle,
  deleteArticle,
  updateArticle
} from "./../firebase";
import { push } from "connected-react-router";
import { all, put, takeLatest, call, select } from "redux-saga/effects";
import {
  LOGIN,
  LOGOUT,
  GET_ARTICLES,
  ADD_ARTICLE,
  DELETE_ARTICLE,
  UPDATE_ARTICLE
} from "../constants/types";
import { loginErrorAction, logOutSuccessAction } from "actions/authActions";
import {
  getArticlesSuccessAction,
  getArticlesErrorAction,
  addArticleErrorAction,
  addArticleSuccessAction,
  deleteArticleSuccessAction,
  deleteArticleErrorAction,
  updateArticleSuccessAction,
  updateArticleErrorAction
} from "../actions/articleActions";

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
    yield put(loginErrorAction("Lỗi hệ thống"));
  }
}

function* handleLogout() {
  try {
    yield doLogout();
    yield put(logOutSuccessAction());
    yield put(push("/login"));
  } catch (error) {
    console.log("Đăng xuất thất bại!");
  }
}

function* handleGetArticles() {
  try {
    const result = yield call(() => getArticles());
    yield put(getArticlesSuccessAction(result));
  } catch (error) {
    put(getArticlesErrorAction("Loi he thong"));
  }
}

function* handleAddArticle() {
  try {
    let article = {
      title: yield select(state => state.articles.article.title),
      status: yield select(state => state.articles.article.status)
    };

    const response = yield call(() => addArticle(article));

    const key = response.key;
    const articleObj = {
      key,
      article
    };
    yield put(addArticleSuccessAction(articleObj));
  } catch (error) {
    yield put(addArticleErrorAction("Loi he thong"));
  }
}

function* handleDeleteArticle({ key }) {
  try {
    const response = yield call(() => deleteArticle(key));
    yield put(deleteArticleSuccessAction(key));

  } catch (error) {
    yield put(deleteArticleErrorAction('Lỗi hệ thống!'));
  }
}

function* handleUpdateArticle() {
  try {
    let articleObj = {
      key: yield select(state => state.articles.article.key),
      article: {
        title: yield select(state => state.articles.article.title),
        status: yield select(state => state.articles.article.status)
      }
    };

    // console.log(articleObj);
    const response = yield call(() => updateArticle(articleObj));
    yield put(updateArticleSuccessAction(articleObj));

  } catch (error) {
    yield put(updateArticleErrorAction('Lỗi hệ thống!'));
  }
}

// All export
export default function* rootSaga() {
  yield all([takeLatest(LOGIN, handleLogin)]);
  yield all([takeLatest(LOGOUT, handleLogout)]);
  yield all([takeLatest(GET_ARTICLES, handleGetArticles)]);
  yield all([takeLatest(ADD_ARTICLE, handleAddArticle)]);
  yield all([takeLatest(DELETE_ARTICLE, handleDeleteArticle)]);
  yield all([takeLatest(UPDATE_ARTICLE, handleUpdateArticle)]);
}
