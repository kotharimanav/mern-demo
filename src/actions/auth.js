const authActions = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILED:'LOGIN_FAILED',
  LOGOUT: 'LOGOUT',
  
  loginRequest: data => {
    return {
      type: authActions.LOGIN_REQUEST,
      data
    };
  },
  logout: () => {
    return {
      type: authActions.LOGOUT
    };
  }
};

export default authActions;