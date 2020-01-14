import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import authReducer from './authReducer';
import articlesReducer from './articlesReducer';
import themeReducer from './themeReducer';
import sidebarReducer from './sidebarReducer';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  auth: authReducer,
  articles: articlesReducer,
  theme: themeReducer,
  sidebar: sidebarReducer
});

export default rootReducer
