import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router'
import { logger } from 'redux-logger';
import rootSaga from './sagas';
import createRootReducer from './reducers'
export const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware();

export default function configureStore(preloadedState) {
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancer(
      applyMiddleware(
        sagaMiddleware,
        routerMiddleware(history),
        logger
      ),
    ),
  )

  sagaMiddleware.run(rootSaga);

  return store
}
