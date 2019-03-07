import * as Actions from './auth.actions';
import axios from 'axios';

const loginApi = 'http://localhost:63691/auth/login';

export const login = ({ username, password }) => dispatch =>
  axios
    .post(loginApi, {
      headers: {
        'Authorization': `Basic ${btoa(username + ':' + password)}`,
        'Authorization-DBID': 3
      },
      dbid: 3
    })
    .then(res => {
      debugger;
      dispatch(Actions.loggedIn(res.data));
    })
    .catch(err => {
      debugger;
      dispatch(Actions.loginFailed(err.message));
    });
