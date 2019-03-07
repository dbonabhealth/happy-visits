export const LOGGED_IN = 'LOGGED_IN';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const loggedIn = (session) => (
  {
    type: LOGGED_IN,
    state: {
        authorizationToken: session.userToken,
        authenticated: true,
    },
  }
)

export const loginFailed = (error) => ({
  type: LOGIN_FAILED,
    state: {
        visits: [],
        error,
    },
})
