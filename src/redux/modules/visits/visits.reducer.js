import * as Actions from './visits.actions';

const initialState = {
  visits: [],
}

const visitsReducer = (state = initialState, action) => {
  let newState = state;
  switch (action.type) {
    case Actions.VISITS_LOADED:
      newState = Object.assign({}, state, action.state);
      break;
    default:
      break;
  }
  return newState;
}

export default visitsReducer;