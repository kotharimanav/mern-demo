import actions from '../actions';
const { userActions } = actions;

const initialState = {
    loader: false,
    data: null
};

export default function rootReducer(state = initialState, action) {
    console.log(action.type);
    switch (action.type) {
        case userActions.GET_USERS:
            return {
                ...state,
                loader: true,
                data: null
            };
        case userActions.ADD_USER:
            return {
                ...state,
                loader: true
            };
        case userActions.EDIT_USER:
            return {
                ...state,
                loader: true
            };
        case userActions.REMOVE_USER:
            return {
                ...state,
                loader: true
            };
        case userActions.GET_USERS_SUCCESS:
            return {
                ...state,
                loader: false,
                data: action.data
            };
        default:
            return state;
    }
}
