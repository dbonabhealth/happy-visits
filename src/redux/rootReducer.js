/*
 src/redux/rootReducer.js
*/

import { combineReducers } from 'redux';
import visitsReducer from './modules/visits/visits.reducer';


export default combineReducers({
    visit: visitsReducer,
});
