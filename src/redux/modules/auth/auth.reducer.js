import * as Actions from './auth.actions';

const initialState = {
  authenticated: false,
  authorizationToken: null,
  error: null,
}

const authReducer = (state = initialState, action) => {
  let newState = state;
  switch (action.type) {
    case Actions.LOGGED_IN:
      newState = Object.assign({}, state, action.state);
      break;
    case Actions.LOGIN_FAILED:
      newState = Object.assign({}, state, action.state);
      break;
    default:
      break;
  }
  return newState;
}

export default authReducer;
