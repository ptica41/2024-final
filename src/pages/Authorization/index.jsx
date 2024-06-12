import Form from './components/form'
import './authorization.css'

import { AuthContext } from '../../context'
import { useContext, useEffect } from 'react'

const Authorization = () => {

    const { isAuthenticated, login, logout, whoAmI } = useContext(AuthContext)

    useEffect (() => {
        whoAmI(localStorage.getItem('access'))
    }, [])

    return (
        <section className="auth">
            <div className="auth-container">
                <div className="auth-container-left">
                    <h1 className='auth-container-left__text'>Для оформления подписки на&nbsp;тариф, необходимо авторизоваться.</h1>
                </div>
                <div className="auth-container-right">
                    <Form />
                </div>
            </div>
        </section>
    )
}
export default Authorization