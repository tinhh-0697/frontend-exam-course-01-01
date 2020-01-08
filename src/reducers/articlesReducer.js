import produce from "immer";
// import { GET_ARTICLES } from "constants/types";
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
  CHANGE_STATUS
} from "../constants/types";

const initialState = {
  loading: false,
  isOpenForm: false,
  error: "",
  data: [],

  article: {
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
      draft.isOpenForm = true;
      break;
    case CLOSE_FORM:
      draft.isOpenForm = false;
      break;
    case ENTER_TITLE:
      draft.article.title = action.title;
      break;
    case CHANGE_STATUS:
      draft.article.status = action.status;
      break;
    case ADD_ARTICLE:
      draft.loading = true;
      draft.data.push(action.article);
      break;
    case ADD_ARTICLE_SUCCESS:
      draft.loading = false;
      draft.error = "";
      draft.article = initialState.article;
      break;
    case ADD_ARTICLE_ERROR:
      draft.loading = false;
      break;
  }
}, initialState);

export default articlesReducer;
