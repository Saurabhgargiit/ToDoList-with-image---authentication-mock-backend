import { CommonConstants } from './globalConstants';

const { USER_EMAIL, USER_ID, IS_AUTHENTICATED } = CommonConstants;

export const clearStorage = () => {
    localStorage.removeItem(USER_ID);
    localStorage.removeItem(USER_EMAIL);

    localStorage.removeItem(IS_AUTHENTICATED);
};

export const storeLoginData = (data) => {
    const { isLoggedIn, userId, email } = data;
    localStorage.setItem(IS_AUTHENTICATED, isLoggedIn);
    localStorage.setItem(USER_ID, userId);
    localStorage.setItem(USER_EMAIL, email);
};

export const logout = () => {
    clearStorage();
    window.location.reload();
};
