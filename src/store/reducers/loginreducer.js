import * as actionTypes from '../actionTypes';

const loginIntialState = {
    loggedInData: {},
};

const loginReducer = (state = loginIntialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            return {
                ...state,
                loggedInData: action.loggedInData,
            };

        default:
            return state;
    }
};

export default loginReducer;
