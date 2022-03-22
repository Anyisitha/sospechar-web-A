import React, { useEffect, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

import { fetchRegisterUser } from '../../helpers/user';
import { fetchInputDataTypes } from '../../helpers/ui';
import { removeErrorMessage, setRegisterErrorMessage, setSuccessRegisterMessage } from '../../actions/ui';

import './authregister.css';

const RegisterScreen = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const { registerErrorMessage } = useSelector(state => state.ui);

    const [professionalTypes, setProfessionalTypes] = useState([]);
    const [especialistTypes, setEspecialistTypes] = useState([]);

    const [inputsFormValues, handleInputChange] = useForm({
        name: '',
        last_name: '',
        professional_card: '',
        email: '',
        phone: '',
        country: '',
        city: '',
        institution: '',
        password: '',
        password_repeat: ''
    });

    const [professionalType, setProfessionalType] = useState(1);
    const [especialistType, setEspecialistType] = useState(1);

    const {
        name,
        last_name,
        professional_card,
        email,
        phone,
        country,
        city,
        institution,
        password,
        password_repeat
    } = inputsFormValues;

    useEffect(() => {
        getProfessionalTypes();
        getEspecialistTypes();
    }, []);

    const getProfessionalTypes = async () => {
        setProfessionalTypes(await fetchInputDataTypes('getProfessionalTypes'));
    };

    const getEspecialistTypes = async () => {
        setEspecialistTypes(await fetchInputDataTypes('getEspecialistTypes'));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password === password_repeat) {
            const res = await fetchRegisterUser(name, last_name, professional_card, institution, email, password, phone, country, city, professionalType, especialistType);
            if (!res) {
                dispatch(setRegisterErrorMessage('Oops! Algo salió mal, intentalo más tarde'));
            } else if (res === 'duplicado') {
                dispatch(setRegisterErrorMessage('Este usuario ya esta registrado. Intenta loguearte'));
            } else {
                dispatch(setSuccessRegisterMessage('Te has registrado exitosamente! Ingresa tus datos para ver el contenido'));
                history.push('/bienvenido-sospechar-no-falla/inicia-sesion');
                dispatch(removeErrorMessage());
            }

        } else {
            dispatch(setRegisterErrorMessage('Las contraseñas no coinciden'));
        }
    }

    return (
        <div className='authregister animated fadeIn'>
            <div className='authregister_text-section'>
                <div className='authregister_text'>
                    <h2>Bienvenido</h2>
                    <p>
                        Este sitio está destinado a profesionales de la salud.
                    </p>
                </div>

                <p className='authregister_second-p'>
                    Si ya es un usuario registrado en este sitio, hacer <span onClick={() => history.push('/bienvenido-sospechar-no-falla/inicia-sesion')}>clic aquí</span>.
                </p>
            </div>
            <div className='authregister_form-section'>
                <h3 className='authregister_form-title'>
                    REGISTRO
                </h3>
                <form className='authregister_form' onSubmit={handleSubmit}>
                    {
                        registerErrorMessage &&
                        <div className='auth_errorMesssage'>
                            {registerErrorMessage}
                        </div>
                    }
                    <div className='authregiter-inputs-wrapper'>
                        <input
                            type='text'
                            name='name'
                            autoComplete='off'
                            value={name}
                            onChange={handleInputChange}
                            placeholder='Nombres*'
                            pattern='.[a-zA-Z ]+'
                            required
                        />
                        <input
                            type='text'
                            name='last_name'
                            autoComplete='off'
                            value={last_name}
                            onChange={handleInputChange}
                            placeholder='Apellidos*'
                            required
                        />
                        <select
                            name='professional_type'
                            placeholder='Tipo de profesional*'
                            onChange={(e) => setProfessionalType(e.target.value)}
                            required
                        >
                            {
                                professionalTypes.map((type) => (
                                    <option
                                        key={type.id}
                                        value={type.id}
                                    >
                                        {type.name}
                                    </option>
                                ))
                            }
                        </select>
                        <select
                            name='especialist_type'
                            placeholder='Especialidad*'
                            onChange={(e) => setEspecialistType(e.target.value)}
                            required
                        >
                            {
                                especialistTypes.map((type) => (
                                    <option
                                        key={type.id}
                                        value={type.id}
                                    >
                                        {type.name}
                                    </option>
                                ))
                            }
                        </select>
                        <input
                            type='text'
                            name='professional_card'
                            autoComplete='off'
                            value={professional_card}
                            onChange={handleInputChange}
                            placeholder='Tarjeta profesional'
                        />
                        <input
                            type='text'
                            name='institution'
                            autoComplete='off'
                            value={institution}
                            onChange={handleInputChange}
                            placeholder='Institución deonde labora'
                            pattern='.[a-zA-Z ]+'
                        />
                        <input
                            type='text'
                            name='country'
                            autoComplete='off'
                            value={country}
                            onChange={handleInputChange}
                            placeholder='País*'
                            pattern='.[a-zA-Z ]+'
                        />

                        <input
                            type='text'
                            name='city'
                            autoComplete='off'
                            value={city}
                            onChange={handleInputChange}
                            placeholder='Ciudad*'
                            pattern='.[a-zA-Z ]+'
                        />

                        <input
                            type='email'
                            name='email'
                            autoComplete='off'
                            value={email}
                            onChange={handleInputChange}
                            placeholder='Correo electronico*'
                            pattern='^[^@]+@[^@]+\.[a-zA-Z]{2,}$'
                            required
                        />
                        <input
                            type='text'
                            name='phone'
                            autoComplete='off'
                            value={phone}
                            onChange={handleInputChange}
                            placeholder='Teléfono*'
                            pattern='[0-9]+'
                            required
                        />
                        <input
                            type='password'
                            name='password'
                            autoComplete='off'
                            vale={password}
                            onChange={handleInputChange}
                            placeholder='Contraseña*'
                            required
                        />
                        <input
                            type='password'
                            name='password_repeat'
                            autoComplete='off'
                            value={password_repeat}
                            onChange={handleInputChange}
                            placeholder='Repetir contraseña*'
                            required
                        />
                    </div>
                    <div className='authregister_form-text'>
                        <p>
                            *Campos obligatorios
                        </p>
                    </div>
                    <div className='authregister_form-footer'>
                        <input type='checkbox' name='accept' required />
                        <ReactTooltip id='tooltip' type='dark'>
                            <span className='tooltip'>
                                Autorizo expresamente a Boehringer Ingelheim S.A., en calidad de responsable del tratamiento, para<br /> que por sí mismo o en asocio con terceros, realice el tratamiento de los datos <br />personales aquí suministrados con las finalidades precisadas en el siguiente aviso de privacidad.<br /> Para más información consulte nuestra Política de Tratamiento de Datos Personales"
                            </span>
                        </ReactTooltip>
                        <label
                            data-tip
                            data-for='tooltip'
                        >Acepta Política de manejo de datos. Política de privacidad. Términos y condiciones.</label>
                    </div>

                    <button>ENVIAR</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterScreen;