import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import authReducer from './authReducer';
import articlesReducer from './articlesReducer';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  auth: authReducer,
  articles: articlesReducer
});

export default rootReducer
