/*
 src/redux/rootReducer.js
*/

import { combineReducers } from 'redux';
import visitsReducer from './modules/visits/visits.reducer';
import authReducer from './modules/auth/auth.reducer';


export default combineReducers({
    visit: visitsReducer,
    auth: authReducer,
});
