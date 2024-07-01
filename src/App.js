import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import './styles/style.scss';

import Authentication from './container/Authentication/Authentication';
import Loader from './components/Loader/Loader';
import SiteLayout from './container/SiteLayout/SiteLayout';
import { CommonConstants } from './utils/globalConstants';

function App() {
    const { IS_AUTHENTICATED } = CommonConstants;
    // const fetchedDetails = useSelector((state) => state.login); //reduxContext
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem(IS_AUTHENTICATED) === 'true');
    const [isLoading, setIsLoading] = useState(true);

    document.title = 'To Do List';
    if (localStorage.getItem(IS_AUTHENTICATED) === 'true') {
        // if (location.pathname !== '/forgotpassword') {
        //     navigate('/login', { replace: true });
        // }
        // const access_token = localStorage.getItem(ACCESS_TOKEN);
        // const refresh_token = localStorage.getItem(REFRESH_TOKEN);
        // const finalRes = {
        //     result: 'success',
        //     data: { access_token: access_token, refresh_token: refresh_token },
        // };
        // setIsLoggedIn(true);
        // dispatch(loginAction(true, false));
    }

    return (
        <>
            <BrowserRouter>
                {/* <Loader /> */}
                {/* {isLoading?<Loader/>: } */}

                {isLoggedIn ? <SiteLayout /> : <Authentication setIsLoggedIn={setIsLoggedIn} />}
            </BrowserRouter>
        </>
    );
}

export default App;
