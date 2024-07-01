import { CommonConstants } from './globalConstants';

const { USER_EMAIL, USER_ID, IS_AUTHENTICATED } = CommonConstants;

export const clearStorage = () => {
    localStorage.removeItem(USER_ID);
    localStorage.removeItem(USER_EMAIL);

    localStorage.removeItem(IS_AUTHENTICATED);
};
