import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserData } from '../../../../helpers/user';
import { hideUserPop } from '../../../../actions/ui';
import { verifyToken } from '../../../../actions/auth';
import { useForm } from '../../../../hooks/useForm';

import UserLogo from '../../../../assets/images/form-icon.png';


import './user.css';
const UserDataPop = () => {

    const dispatch = useDispatch();

    const { data } = useSelector(state => state.auth);

    const [inputsFormValues, handleInputChange] = useForm({
        name: data.name,
        last_name: data.last_name,
        phone: data.phone,
        institution: data.institution
    });

    const { name, last_name, phone, institution } = inputsFormValues;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await updateUserData(name, last_name, institution, phone);

        localStorage.setItem('X-token', res.token);
        localStorage.setItem('init-date-token', new Date().getTime());

        dispatch(verifyToken());
        dispatch(hideUserPop());
    }

    return (
        <div className='userdatapop'>

            <form className='userdatapop_form animated fadeInDown' onSubmit={handleSubmit}>
                <div className='userdatapop_form-icon'>
                    <img src={UserLogo} alt='form-logo' />
                </div>
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
                    name='phone'
                    autoComplete='off'
                    value={phone}
                    onChange={handleInputChange}
                    placeholder='Teléfono*'
                    pattern='[0-9]+'
                    required
                />

                <div className='userdatapop_btns-wrapper'>
                    <button className='userdatapop_btn userdatapop_save-btn'>Guardar</button>
                    <button
                        className='userdatapop_btn userdatapop_cancel-btn'
                        onClick={() => dispatch(hideUserPop())}
                    >Cancelar</button>
                </div>
            </form>
        </div>
    );
}

export default UserDataPop;