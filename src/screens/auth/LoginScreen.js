import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm';
import { startLogIn } from '../../actions/auth';
import { removeErrorMessage, removeSuccessMessage } from '../../actions/ui';

import InputLogo from '../../assets/images/input-icon.png';
import UserLogo from '../../assets/images/form-icon.png';

import './authlogin.css';

const LoginScreen = () => {

    const history = useHistory();

    const dispatch = useDispatch();
    const { loginErrorMessage, registerSuccessMessage } = useSelector(state => state.ui);

    const [inputsFormValues, handleInputChange] = useForm({
        email: '',
        password: ''
    });

    const { email, password } = inputsFormValues;

    // Evento al hacer submit
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        dispatch(startLogIn(email, password));
        dispatch(removeErrorMessage());
        dispatch(removeSuccessMessage());
    };

    return (
        <div className='authlogin animated fadeIn'>
            <div className='authlogibn_text-section'>
                <div className='authlogin_text'>
                    <h2>Bienvenido</h2>
                    <p>
                        Este sitio está destinado a profesionales de la salud.
                    </p>
                </div>

                <button
                    onClick={() => history.push('/bienvenido-sospechar-no-falla/registrate')}
                >
                    REGÍSTRESE
                </button>
            </div>
            <div className='authlogin_form-section'>
                <div className='authlogin_from-wrapper'>
                    <div className='authlogin_form-icon'>
                        <img src={UserLogo} alt='form-logo' />
                    </div>
                    <form className='authlogin_form' onSubmit={handleFormSubmit}>

                        {
                            loginErrorMessage &&
                            <div className='auth_errorMesssage'>
                                {loginErrorMessage}
                            </div>
                        }


                        {
                            registerSuccessMessage &&
                            <div className='auth_successMessage'>
                                {registerSuccessMessage}
                            </div>
                        }

                        <div className='authlogin-input-wrapper'>
                            <div className='authlogin-input-icon'>
                                <img src={InputLogo} alt='input-logo' />
                            </div>
                            <input
                                type='email'
                                name='email'
                                autoComplete='off'
                                value={email}
                                onChange={handleInputChange}
                                placeholder='Ingrese su correo electrónico'
                                required
                            />
                        </div>
                        <div className='authlogin-input-wrapper'>
                            <div className='authlogin-input-icon'>
                                <img src={InputLogo} alt='input-logo' />
                            </div>
                            <input
                                type='password'
                                name='password'
                                placeholder='Ingrese su contraseña'
                                value={password}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <button>INGRESAR</button>
                    </form>
                </div>
                <p>
                    Si usted no es profesional de la salud por favor visite nuestro sitio público. <a style={{color: '#fff'}} href='https://web-sospechar-para-todos.sospecharnofalla.com/'>Clic aquí.</a>
                </p>
            </div>
        </div>
    );
};

export default LoginScreen;