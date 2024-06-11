import { useState, useContext } from 'react';
import './form.css'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context'

const Form = () => {

    const { isAuthenticated, login, logout } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleRedirect = () => navigate('/')


        const [formData, setFormData] = useState({
            login: '',
            password: ''
        });

      
        const handleChange = (e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
        };

        const isFull = (e) => {
            if (e.login && e.password) {
                return true
            } else {
                return false
            }
        }
      
        const handleSubmit = async (e) => {
          e.preventDefault();
          await login(formData);
        };


    return (
        <div className="form">
            <div className="form-img"></div>
            <div className="form-container">
                <div className="form-container-methods">
                    <div className="form-container-method__method">Войти</div>
                    <div className="form-container-method__method form-container-method__method_inActive">Зарегистрироваться</div>
                </div>
                <form>
                    <label htmlFor="login" className='form-container__text'>Логин или номер телефона:</label>
                    <input type="text" id="login" name="login" className='form-container__area' onChange={handleChange} required />

                    <label htmlFor="password" className='form-container__text'>Пароль:</label>
                    <input id="password" name="password" type='password' className='form-container__area' onChange={handleChange} required />

                    <button onClick={ handleSubmit } type="submit" className={ isFull(formData) ? 'form-container__btn' : 'form-container__btn form-container__btn_inActive' }>Войти</button>
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