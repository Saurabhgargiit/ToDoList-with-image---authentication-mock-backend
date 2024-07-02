import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Authentication from './container/Authentication/Authentication';
import SiteLayout from './container/SiteLayout/SiteLayout';

import './App.css';
import './styles/style.scss';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <>
            <BrowserRouter>
                {isLoggedIn ? <SiteLayout /> : <Authentication setIsLoggedIn={setIsLoggedIn} />}
            </BrowserRouter>
        </>
    );
}

export default App;
