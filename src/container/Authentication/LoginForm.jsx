import React, { useState } from 'react';

import Loader from '../../components/Loader/Loader';
import { FormErrors } from '../../utils/globalConstants';
import Button from '../../components/Button/Button';

import './LoginForm.scss';

const LoginForm = ({ fetchData, loading }) => {
    const { passwordErr, emailErr } = FormErrors;

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const [emailVaild, setEmailVaild] = useState(false);
    const [passValid, setPassValid] = useState(false);

    const inputHandler = (e, inputType) => {
        const value = e.target.value;
        switch (inputType) {
            case 'email':
                setEmail(() => value);
                setEmailVaild(value.includes('@'));
                break;
            case 'password':
                setPass(() => value);
                setPassValid(value.trim().length > 0);
                break;
            default:
                console.log('Unhandled input type:', inputType);
                break;
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (emailVaild && passValid) {
            let data = {
                email: email,
                password: pass,
            };
            fetchData(data);
        }
    };

    return !loading ? (
        <form onSubmit={submitHandler} className='login-container'>
            <div className='label-input-container'>
                <label htmlFor='email'>Email*</label>
                <input
                    id='email'
                    type='email'
                    onChange={(e) => inputHandler(e, 'email')}
                    value={email}
                    required
                ></input>
                <div className={`error-Msg ${emailVaild ? 'noVisible' : ''}`}>{emailErr}</div>
            </div>
            <div className='label-input-container'>
                <label htmlFor='pass'>Password*</label>
                <input
                    id='pass'
                    type='text'
                    onChange={(e) => inputHandler(e, 'password')}
                    value={pass}
                    required
                ></input>
                <div className={`error-Msg ${passValid ? 'noVisible' : ''}`}>{passwordErr}</div>
            </div>
            <Button title='Login' type='submit' style='primary' onClickCallBk={submitHandler} />
        </form>
    ) : (
        <Loader />
    );
};
export default LoginForm;
