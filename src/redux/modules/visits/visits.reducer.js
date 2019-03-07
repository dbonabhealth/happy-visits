import * as Actions from './visits.actions';

const initialState = {
  visits: [],
  error: null,
}

const visitsReducer = (state = initialState, action) => {
  let newState = state;
  switch (action.type) {
    case Actions.VISITS_LOADED:
      newState = Object.assign({}, state, action.state);
      break;
    case Actions.VISITS_LOAD_FAILED:
      newState = Object.assign({}, state, action.state);
      break;
    default:
      break;
  }
  return newState;
}

export default visitsReducer;