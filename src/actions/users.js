const usersActions = {
    GET_USERS: 'GET_USERS',
    GET_USERS_SUCCESS: 'GET_USERS_SUCCESS',
    GET_USERS_FAILED: 'GET_USERS_FAILED',
    ADD_USER:"ADD_USER",
    EDIT_USER:"EDIT_USER",
    REMOVE_USER:"REMOVE_USER",
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
    },
    editUser:(id,data)=>{
        return {
            type: usersActions.EDIT_USER,
            data,
            id
        };
    },
    removeUser:(id)=>{
        return {
            type: usersActions.REMOVE_USER,
            id
        };
    }
};

export default usersActions;