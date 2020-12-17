const usersActions = {
    GET_USERS: 'GET_USERS',
    GET_USERS_SUCCESS: 'GET_USERS_SUCCESS',
    GET_USERS_FAILED: 'GET_USERS_FAILED',
    ADD_USER:"ADD_USER",

    getUsers: () => {
        return {
            type: usersActions.GET_USERS,
            data:null
        };
    },
    addUser:(data)=>{
        return {
            type: usersActions.ADD_USER,
            data
        };
    }
};

export default usersActions;