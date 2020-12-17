import { put, all, takeEvery, fork } from 'redux-saga/effects';
import actions from '../actions';
import { login } from '../services/auth-services';
const { authActions } = actions;

export function* loginRequest() {
  yield takeEvery(authActions.LOGIN_REQUEST, function*({ data }) {
    console.log(data);
    try {
      const response = yield login(data);
      console.log(response);
      yield put({
        type: authActions.LOGIN_SUCCESS,
        data: response
      });
    } catch (error) {
      yield put({
        type: authActions.LOGIN_FAILED,
        data: {
          isLogin: false,
          accessToken: null
        }
      });
    }
  });
}

export default function* rootSaga() {
  yield all([fork(loginRequest)]);
}
