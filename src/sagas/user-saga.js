import { put, all, takeEvery, fork,select } from 'redux-saga/effects';
import actions from '../actions';
import { getUsers } from '../services/user-services';
import { useSelector, useDispatch } from 'react-redux';

const { userActions } = actions;

export function* getUsersRequest() {
    yield takeEvery(userActions.GET_USERS, function* ({data}) {
        try {
            console.log('GET_USERS')
            const token =yield select(state =>state.auth.accessToken);
            console.log(token)
            const response = yield getUsers(token, null);
            console.log(response);
            yield put({
                type: userActions.GET_USERS_SUCCESS,
                data: response.users
            });
        } catch (error) {
           console.log(error);
        }
    });
}

export default function* rootSaga() {
    yield all([fork(getUsersRequest)]);
}
