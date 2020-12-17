const usersActions = {
    GET_USERS: 'GET_USERS',
    GET_USERS_SUCCESS: 'GET_USERS_SUCCESS',
    GET_USERS_FAILED: 'GET_USERS_FAILED',

    getUsers: () => {
        return {
            type: usersActions.GET_USERS,
            data:null
        };
    },
};

export default usersActions;