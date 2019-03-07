/*
 * src/redux/createStore.js
 * No initialState
*/
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const configureStore = () => {
 return createStore(rootReducer, applyMiddleware(thunk));
}

export default configureStore;
