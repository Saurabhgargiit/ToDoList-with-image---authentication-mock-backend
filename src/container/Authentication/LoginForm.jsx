import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { getLoginData, loginAction } from '../../store/actions/loginAction';
import Loader from '../../components/Loader/Loader';
import { FormErrors } from '../../utils/globalConstants';
// import { ApiRelativePaths } from '../../../utils/globalURLs';
import Button from '../../components/Button/Button';

import './LoginForm.scss';

const LoginForm = ({}) => {
    const { passwordErr, emailErr } = FormErrors;

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const [emailVaild, setEmailVaild] = useState(false);
    const [passValid, setPassValid] = useState(false);

    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

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

    const fetchData = () => {
        let data = {
            email: email,
            password: pass,
        };

        dispatch(getLoginData(data));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        fetchData();
    };

    return (
        <div className='login-container'>
            {!loading ? (
                <form onSubmit={submitHandler}>
                    <div className='label-input-container'>
                        <label htmlFor='email'>Email*</label>
                        <input
                            id='email'
                            type='email'
                            onChange={(e) => inputHandler(e, 'email')}
                            value={email}
                            required
                        ></input>
                    </div>
                    <div className={`error-Msg ${emailVaild ? 'noVisible' : ''}`}>{emailErr}</div>
                    <div className='label-input-container'>
                        <label htmlFor='pass'>Password*</label>
                        <input
                            id='pass'
                            type='text'
                            onChange={(e) => inputHandler(e, 'password')}
                            value={pass}
                            required
                        ></input>
                    </div>
                    <div className={`error-Msg ${passValid ? 'noVisible' : ''}`}>{passwordErr}</div>
                    <Button
                        title='Login'
                        type='submit'
                        style='primary'
                        onClickCallBk={submitHandler}
                    />
                </form>
            ) : (
                <Loader />
            )}
        </div>
    );
};
export default LoginForm;
