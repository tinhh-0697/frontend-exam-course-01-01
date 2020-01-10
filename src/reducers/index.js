import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import authReducer from './authReducer';
import articlesReducer from './articlesReducer';
import themeReducer from './themeReducer';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  auth: authReducer,
  articles: articlesReducer,
  theme: themeReducer
});

export default rootReducer
