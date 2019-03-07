import * as Actions from './visits.actions';

const visitsApi = '/Entity/EntityEvent';

export const loadVisits = () => dispatch =>
  axios
    .post(visitsApi, {
      title,
      userId,
      completed: false
    })
    .then(res => {
      dispatch(Actions.loadVisitsAction(res.data));
    })
    .catch(err => {
      dispatch(addTodoFailure(err.message));
    });