import * as Actions from './visits.actions';
import axios from 'axios';

const visitsApi = 'http://localhost:63691/Events/EntityEvent';

export const loadVisits = () => (dispatch, getState) =>
  axios
    .get(visitsApi, {
      entityIds: 2,
      authorizationToken: getState().auth.authorizationToken,
    })
    .then(res => {
      debugger;
      dispatch(Actions.loadVisitsAction(res.data));
    })
    .catch(err => {
      debugger;
      dispatch(Actions.loadVisitsFailed(err.message));
    });
