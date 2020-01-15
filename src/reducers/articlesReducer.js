import produce from "immer";
import {
  GET_ARTICLES,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_ERROR,
  OPEN_FORM,
  CLOSE_FORM,
  ENTER_TITLE,
  ADD_ARTICLE,
  ADD_ARTICLE_SUCCESS,
  ADD_ARTICLE_ERROR,
  CHANGE_STATUS,
  DELETE_ARTICLE,
  DELETE_ARTICLE_SUCCESS,
  DELETE_ARTICLE_ERROR,
  UPDATE_ARTICLE,
  UPDATE_ARTICLE_SUCCESS,
  UPDATE_ARTICLE_ERROR
} from "../constants/types";

const initialState = {
  loading: false,
  isOpenForm: false,
  error: "",
  data: {},

  article: {
    key: "",
    title: "",
    status: false
  }
};

/* eslint-disable default-case, no-param-reassign */
const articlesReducer = produce((draft, action) => {
  switch (action.type) {
    case GET_ARTICLES:
      draft.loading = true;
      break;
    case GET_ARTICLES_SUCCESS:
      draft.data = action.data;
      draft.loading = false;
      break;
    case GET_ARTICLES_ERROR:
      draft.loading = false;
      break;
    case OPEN_FORM:
      draft.article = action.key ? draft.data[action.key] : initialState.article;
      draft.article.key = action.key ? action.key : '';
      draft.isOpenForm = true;
      break;
    case CLOSE_FORM:
      draft.isOpenForm = false;
      draft.article = initialState.article;
      break;
    case ENTER_TITLE:
      draft.article.title = action.title;
      break;
    case CHANGE_STATUS:
      draft.article.status = action.status;
      break;
    case ADD_ARTICLE:
      draft.loading = true;
      break;
    case ADD_ARTICLE_SUCCESS:
      draft.data[action.articleObj.key] = action.articleObj.article;
      draft.loading = false;
      draft.isOpenForm = false;
      draft.error = "";
      draft.article = initialState.article;
      break;
    case ADD_ARTICLE_ERROR:
      draft.loading = false;
      break;
    case DELETE_ARTICLE:
      draft.loading = true;
      break;
    case DELETE_ARTICLE_SUCCESS:
      delete draft.data[action.key];
      draft.loading = false;
      break;
    case DELETE_ARTICLE_ERROR:
      draft.loading = false;
      draft.error = action.error;
      break;
    case UPDATE_ARTICLE:
      draft.loading = true;
      break;
    case UPDATE_ARTICLE_SUCCESS:
      draft.data[action.articleObj.key] = action.articleObj.article;
      draft.isOpenForm = false;
      draft.loading = false;
      break;
    case UPDATE_ARTICLE_ERROR:
      draft.error = action.error;
      draft.loading = false;
      break;
  }
}, initialState);

export default articlesReducer;
