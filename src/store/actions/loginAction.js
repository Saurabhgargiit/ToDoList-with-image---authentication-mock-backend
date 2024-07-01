import * as actionTypes from '../actionTypes';
import { database } from '../../db/userDatabase';

//isLoggedIn --> true/false whether user is loggedIn
//fromLogin --> true --> if action is dispatched after proper login using username password
//fromLogin --> false  --> if action is dispatched from app

export const loginAction = (isLoggedIn, fromLogin, loginInfo = {}) => {
    if (isLoggedIn && fromLogin) {
        // CommonUtils.saveTokens(loginInfo?.data);
    }
    const loggedInData = {
        isLoggedIn: isLoggedIn,
        loginErr: !isLoggedIn && fromLogin ? loginInfo : '',
    };
    return {
        type: actionTypes.LOGIN,
        loggedInData: loggedInData,
    };
};

export const getLoginData = (data) => {
    return (dispatch) => {
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
                console.log(finalRes);
                dispatch(loginAction(true, true, finalRes));
            })
            .catch((err) => {
                const finalErr = {
                    result: 'error',
                    data: err,
                };
                dispatch(loginAction(false, true, finalErr));
            });
    };
};
