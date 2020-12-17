import { put, all, takeEvery, fork } from 'redux-saga/effects';
import actions from '../actions';
import { login } from '../services/auth-services';
import { notification } from 'antd';

const { authActions } = actions;

export function* loginRequest() {
  yield takeEvery(authActions.LOGIN_REQUEST, function*({ data }) {
    try {
      const response = yield login(data);
      console.log(response);
      notification.open({
        message: 'Logged In',
        description:response.message
      });
      yield put({
        type: authActions.LOGIN_SUCCESS,
        data: response
      });
    } catch (error) {
      notification.open({
        message: 'Login failed',
        description:'Incorrect username or password'
      });
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
