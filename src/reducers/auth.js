import actions from '../actions';
const { authActions } = actions;

const initialState = {
  isLogin: false,
  accessToken: '',
  loader: false,
  data: null
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case authActions.LOGIN_REQUEST:
      return {
        ...state,
        loader: true
      };
    case authActions.LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: true,
        accessToken: action.data.token,
        loader: false
      };
    case authActions.LOGIN_FAILED:
      return {
        ...state,
        isLogin: false,
        accessToken: null,
        loader: false
      };
    case authActions.LOGOUT:
      return {
        isLogin: false,
        accessToken: null
      };
    default:
      return state;
  }
}
