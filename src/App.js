import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { UseDispatch, useDispatch } from 'react-redux';

import Authentication from './container/Authentication/Authentication';
import Loader from './components/Loader/Loader';
import SiteLayout from './container/SiteLayout/SiteLayout';

import { loginAction } from './store/actions/loginAction';
import { CommonConstants } from './utils/globalConstants';
import { clearStorage } from './utils/commonFunctions';

import './App.css';
import './styles/style.scss';

function App() {
    const { IS_AUTHENTICATED, USER_EMAIL, USER_ID } = CommonConstants;
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const dispatch = useDispatch(false);

    return (
        <>
            <BrowserRouter>
                {isLoggedIn ? <SiteLayout /> : <Authentication setIsLoggedIn={setIsLoggedIn} />}
            </BrowserRouter>
        </>
    );
}

export default App;
