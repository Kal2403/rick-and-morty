import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
