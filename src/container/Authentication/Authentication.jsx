import react, { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import LoginForm from './LoginForm';

import { useSelector, useDispatch } from 'react-redux';

import { getLoginData, loginAction } from '../../store/actions/loginAction';
import { clearStorage, storeLoginData } from '../../utils/commonFunctions';
import { CommonConstants } from '../../utils/globalConstants';
import Loader from '../../components/Loader/Loader';

function Authentication({ setIsLoggedIn }) {
    const { IS_AUTHENTICATED, USER_EMAIL, USER_ID } = CommonConstants;

    const [loading, setLoading] = useState(true);

    const fetchedDetails = useSelector((state) => state.login.loggedInData);

    const dispatch = useDispatch();

    const fetchData = (data) => {
        setLoading(true);
        dispatch(getLoginData(data));
    };

    useEffect(() => {
        document.title = 'To Do List';
        if (
            localStorage.getItem(IS_AUTHENTICATED) === 'true' &&
            localStorage.getItem(USER_EMAIL) &&
            localStorage.getItem(USER_ID)
        ) {
            const email = localStorage.getItem(USER_EMAIL);
            const userId = localStorage.getItem(USER_ID);
            const res = {
                result: 'success',
                data: { email, userId },
            };
            setLoading(false);
            dispatch(loginAction(true, res));
        } else {
            clearStorage();
            setLoading(false);
            setIsLoggedIn(false);
        }
    }, []);

    useEffect(() => {
        if (fetchedDetails?.isLoggedIn) {
            const isLoggedIn = fetchedDetails?.isLoggedIn;
            const { userId, email } = fetchedDetails.userInfo?.data;
            storeLoginData({ isLoggedIn, userId, email });
            setLoading(false);
            setIsLoggedIn(true);
        } else if (fetchedDetails?.loginErr?.result === 'error') {
            clearStorage();
            setLoading(false);
            alert(fetchedDetails.loginErr.data);
        }
    }, [fetchedDetails]);

    return loading ? (
        <Loader />
    ) : (
        <div className='textAlignCenter'>
            <h1>Login to ToDo list</h1>
            <Routes>
                <Route
                    path='/login'
                    element={<LoginForm fetchData={fetchData} loading={loading} />}
                />
                <Route path='*' element={<Navigate to={'/login'} />} />
            </Routes>
        </div>
    );
}

export default Authentication;
