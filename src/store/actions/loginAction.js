import * as actionTypes from '../actionTypes';
import { database } from '../../db/userDatabase';

export const loginAction = (isLoggedIn, loginInfo = {}) => {
    const loggedInData = {
        isLoggedIn: isLoggedIn,
        userInfo: isLoggedIn ? loginInfo : {},
        loginErr: !isLoggedIn ? loginInfo : {},
    };
    return {
        type: actionTypes.LOGIN,
        loggedInData: loggedInData,
    };
};

export const getLoginData = (data) => {
    return (dispatch) => {
        //mock backend
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                const { email, password: enteredPass } = data;
                const userObjIndex = database.findIndex((el) => el.email === email);

                if (userObjIndex !== -1) {
                    const { password, userId, email } = database[userObjIndex];
                    if (password === enteredPass) {
                        resolve({ userId, email });
                    }
                }
                reject('Invalid User');
            }, 500);
        });

        promise
            .then((res) => {
                const finalRes = {
                    result: 'success',
                    data: { ...res },
                };
                dispatch(loginAction(true, finalRes));
            })
            .catch((err) => {
                const finalErr = {
                    result: 'error',
                    data: err,
                };
                dispatch(loginAction(false, finalErr));
            });
    };
};
