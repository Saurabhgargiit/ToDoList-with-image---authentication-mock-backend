import react, { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import LoginForm from './LoginForm';
import { CommonConstants } from '../../utils/globalConstants';
import { clearStorage } from '../../utils/commonFunctions';
import { useSelector } from 'react-redux';

function Authentication({ location, navigate, setIsLoggedIn }) {
    const { IS_AUTHENTICATED } = CommonConstants;
    const [errorObj, setErrorObj] = useState({
        errorMsg: '',
        errorFlag: false,
    });
    const fetchedDetails = useSelector((state) => state.login); //reduxContext

    useEffect(() => {
        // if (location.pathname !== '/forgotpassword') {
        //     navigate('/login', { replace: true });
        // }
    }, []);

    useEffect(() => {
        if (!!fetchedDetails?.loggedIn) {
            localStorage.setItem(IS_AUTHENTICATED, true);
            setIsLoggedIn(true);
        } else if (fetchedDetails?.loggedInData?.loginErr?.result === 'error') {
            clearStorage();
            // setIsLoggedIn(false);
            setErrorObj((prevState) => {
                return {
                    ...prevState,
                    errorMsg: fetchedDetails?.loggedInData?.loginErr?.data?.message,
                    errorFlag: true,
                };
            });
        }
    }, [fetchedDetails]);

    return (
        <>
            <div className='center-position'>
                <h1>Login to ToDo list</h1>
            </div>
            <Routes>
                <Route
                    path='/login'
                    element={<LoginForm setErrorObj={setErrorObj} errorObj={errorObj} />}
                />
                <Route path='*' element={<Navigate to={'/login'} />} />
            </Routes>
        </>
    );
}

export default Authentication;
