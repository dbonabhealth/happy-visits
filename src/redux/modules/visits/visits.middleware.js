import * as Actions from './visits.actions';
import axios from 'axios';

const visitsApi = '/Events/EntityEvent';

export const loadVisits = () => dispatch =>
  axios
    .get(visitsApi, {
      entityIds: 2,
    })
    .then(res => {
      dispatch(Actions.loadVisitsAction(res.data));
    });