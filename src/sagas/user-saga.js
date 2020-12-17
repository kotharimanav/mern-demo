import { put, all, takeEvery, fork, select } from 'redux-saga/effects';
import actions from '../actions';
import { getUsers, addUser, removeUser, editUser } from '../services/user-services';
import { notification } from 'antd';
const { userActions } = actions;

export function* getUsersRequest() {
    yield takeEvery(userActions.GET_USERS, function* ({ data }) {
        try {
            const token = yield select(state => state.auth.accessToken);
            const response = yield getUsers(token, null);

            yield put({
                type: userActions.GET_USERS_SUCCESS,
                data: response.users
            });
        } catch (error) {
            notification.open({
                message: 'Something went wrong',
                description: error.response.message
            });
            console.log(error);
        }
    });
}

export function* addUserRequest() {
    yield takeEvery(userActions.ADD_USER, function* ({ data }) {
        try {
            const token = yield select(state => state.auth.accessToken);

            yield addUser(token, data);
            notification.open({
                message: 'User Added',
                description: 'User have been added '
            });
            yield put({
                type: userActions.GET_USERS,
            });
        } catch (error) {
            notification.open({
                message: 'Something went wrong',
                description: error.response.message
            });
            console.log(error);
        }
    });
}

export function* editUserRequest() {
    yield takeEvery(userActions.EDIT_USER, function* ({ id, data }) {
        try {
            const token = yield select(state => state.auth.accessToken);
            yield editUser(token, id, data);
            notification.open({
                message: 'User Details Saved',
                description:'User have been saved '
            });
            yield put({
                type: userActions.GET_USERS,
            });
        } catch (error) {
            notification.open({
                message: 'Something went wrong',
                description: error.response.message
            });
            console.log(error);
        }
    });
}


export function* removeUserRequest() {
    yield takeEvery(userActions.REMOVE_USER, function* ({ id }) {
        try {
            const token = yield select(state => state.auth.accessToken);
            yield removeUser(token, id);
            notification.open({
                message: 'User Details Removed',
                description: 'User have been removed '
            });
            yield put({
                type: userActions.GET_USERS,
            });
        } catch (error) {
            notification.open({
                message: 'Something went wrong',
                description: error.response.message
            });
            console.log(error);
        }
    });
}




export default function* rootSaga() {
    yield all([fork(getUsersRequest), fork(addUserRequest), fork(removeUserRequest), fork(editUserRequest)]);
}
