import { useState, useContext } from 'react';
import './form.css'
import { AuthContext } from '../../../context'

const Form = () => {

    const { setIsInvalid, isInvalid, login } = useContext(AuthContext)

    const [formData, setFormData] = useState({
        login: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setIsInvalid(false)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({ login: '', password: '' });
        login(formData);
    };

    const isFull = (e) => {
        if (e.login && e.password) return true
        else return false
    }

    function checkIfOnlyDigitsAndPlus(str) {
        return /^[\d+]+$/.test(str);
    }

    function checkInput(e) {
        if (e.substring(0, 3) === '+79' && e.length !== 12) return false;
        else if (e.substring(0, 3) === '+79' && !checkIfOnlyDigitsAndPlus(e)) return false;
        else return true;
    }


    return (
        <div className="form">
            <div className="form-img"></div>
            <div className="form-container">
                <div className="form-container-methods">
                    <div className="form-container-method__method">Войти</div>
                    <div className="form-container-method__method form-container-method__method_inActive">Зарегистрироваться</div>
                </div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="login" className='form-container__text'>Логин или номер телефона:</label>
                    <input type="text" id="login" name="login" value={formData.login} className={checkInput(formData.login) ? 'form-container__area' : 'form-container__area_invalid'} onChange={handleChange} required />
                    <div className="form-container__error_login" style={{ opacity: checkInput(formData.login) ? 0 : 100 }}>Введите корректные данные</div>
                    <label htmlFor="password" className='form-container__text'>Пароль:</label>
                    <input id="password" name="password" type='password' value={formData.password} className='form-container__area' onChange={handleChange} required />
                    <div className="form-container__error_login" style={{ opacity: isInvalid ? 100 : 0 }}>Неправильное имя или пароль</div>

                    <button type="submit" className={(isFull(formData) && checkInput(formData.login)) ? 'form-container__btn' : 'form-container__btn form-container__btn_inActive'}>Войти</button>
                </form>
                <div className="form-container__repair">Восстановить пароль</div>

                <p className='form-container__text'>Войти через:</p>
                <div className="form-container-social">
                    <div className="form-container-social__element" style={{ backgroundImage: 'url(/src/pages/Authorization/components/img/google.svg)' }}></div>
                    <div className="form-container-social__element" style={{ backgroundImage: 'url(/src/pages/Authorization/components/img/facebook.svg)' }}></div>
                    <div className="form-container-social__element" style={{ backgroundImage: 'url(/src/pages/Authorization/components/img/yandex.svg)' }}></div>
                </div>
            </div>
        </div>
    )
}
export default Form