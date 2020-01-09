import {
  GET_ARTICLES,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_ERROR,
  OPEN_FORM,
  CLOSE_FORM,
  ADD_ARTICLE,
  ADD_ARTICLE_SUCCESS,
  ADD_ARTICLE_ERROR,
  ENTER_TITLE,
  CHANGE_STATUS,
  DELETE_ARTICLE,
  DELETE_ARTICLE_SUCCESS,
  DELETE_ARTICLE_ERROR,
  UPDATE_ARTICLE,
  UPDATE_ARTICLE_SUCCESS,
  UPDATE_ARTICLE_ERROR
} from "../constants/types"

/**
 * Article Actions
 */

// Form actions
export const openFormAction = (key) => {
  return {
    type: OPEN_FORM,
    key
  }
}

export const closeFormAction = () => {
  return {
    type: CLOSE_FORM
  }
}

// Get articles actions
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

// Add articles actions
export const addArticleAction = () => {
  return {
    type: ADD_ARTICLE
  }
}

export const addArticleSuccessAction = (articleObj) => {
  return {
    type: ADD_ARTICLE_SUCCESS,
    articleObj
  }
}

export const addArticleErrorAction = (error) => {
  return {
    type: ADD_ARTICLE_ERROR,
    error
  }
}

// Enter article actions
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

// Delete article actions
export const deleteArticleAction = (key) => {
  return {
    type: DELETE_ARTICLE,
    key
  }
}

export const deleteArticleSuccessAction = (key) => {
  return {
    type: DELETE_ARTICLE_SUCCESS,
    key
  }
}

export const deleteArticleErrorAction = (error) => {
  return {
    type: DELETE_ARTICLE_ERROR,
    error
  }
}

// Update article actions
export const updateArticleAction = (key) => {
  return {
    type: UPDATE_ARTICLE,
    key
  }
}

export const updateArticleSuccessAction = (articleObj) => {
  return {
    type: UPDATE_ARTICLE_SUCCESS,
    articleObj
  }
}

export const updateArticleErrorAction = (error) => {
  return {
    type: UPDATE_ARTICLE_ERROR,
    error
  }
}
