import React from 'react';
import Button from '../Button/Button';
import { logout } from '../../utils/commonFunctions';

function Header({ userId }) {
    return (
        <div className='buttons'>
            <h3>Hello {userId}</h3>
            <header className='center-position'>
                <h1>To do List</h1>
            </header>
            <Button title='Logout' style='primary' onClickCallBk={logout} />
        </div>
    );
}

export default Header;
