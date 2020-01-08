import { GET_ARTICLES, GET_ARTICLES_SUCCESS, GET_ARTICLES_ERROR, OPEN_FORM, CLOSE_FORM, ADD_ARTICLE, ADD_ARTICLE_SUCCESS, ADD_ARTICLE_ERROR, ENTER_TITLE, CHANGE_STATUS } from "../constants/types"

/**
 * Article Actions
 */
export const openFormAction = () => {
  return {
    type: OPEN_FORM
  }
}

export const closeFormAction = () => {
  return {
    type: CLOSE_FORM
  }
}

export const getArticlesAction = () => {
  return {
    type: GET_ARTICLES
  }
}

export const getArticlesSuccessAction = (data) => {
  return {
    type: GET_ARTICLES_SUCCESS,
    data
  }
}

export const getArticlesErrorAction = (error) => {
  return {
    type: GET_ARTICLES_ERROR,
    error
  }
}

export const addArticleAction = () => {
  return {
    type: ADD_ARTICLE
  }
}

export const addArticleSuccessAction = (article) => {
  return {
    type: ADD_ARTICLE_SUCCESS,
    article
  }
}

export const addArticleErrorAction = (error) => {
  return {
    type: ADD_ARTICLE_ERROR,
    error
  }
}

export const enterTitleAction = (title) => {
  return {
    type: ENTER_TITLE,
    title
  }
}

export const changeStatusAction = (status) => {
  return {
    type: CHANGE_STATUS,
    status
  }
}
