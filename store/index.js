import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxPromise from 'redux-promise';
import reduxThunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { saveState, restoreState } from '../utils/session';

require('dotenv').config();

export const configureStore = () => {

  const persistedState = restoreState();
  const middlewares = [reduxPromise, reduxThunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const storeEnhancers = [middlewareEnhancer];
  const composedEnhancer  = composeWithDevTools(...storeEnhancers);

  const store = createStore(
    rootReducer,
    persistedState,
    // preloadedState,
    composedEnhancer,
  );

  store.subscribe(()=> {
    saveState(store.getState());
  });

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('./rootReducer', () => {
        const newRootReducer = require('./rootReducer').default;
        store.replaceReducer(newRootReducer)
      })
    }
  }

  return store;
}