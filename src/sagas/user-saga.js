import { put, all, takeEvery, fork,select } from 'redux-saga/effects';
import actions from '../actions';
import { getUsers,addUser } from '../services/user-services';

const { userActions } = actions;

export function* getUsersRequest() {
    yield takeEvery(userActions.GET_USERS, function* ({data}) {
        try {
            const token = yield select(state =>state.auth.accessToken);
            const response = yield getUsers(token, null);
            yield put({
                type: userActions.GET_USERS_SUCCESS,
                data: response.users
            });
        } catch (error) {
           console.log(error);
        }
    });
}

export function* addUserRequest() {
    yield takeEvery(userActions.ADD_USER, function* ({data}) {
        try {
            const token =yield select(state =>state.auth.accessToken);
            yield addUser(token, data);
            yield put({
                type: userActions.GET_USERS,
            });
        } catch (error) {
           console.log(error);
        }
    });
}


export default function* rootSaga() {
    yield all([fork(getUsersRequest),fork(addUserRequest)]);
}
