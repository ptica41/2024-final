import { useNavigate } from 'react-router-dom'
import './noAuth.css'

const NoAuth = () => {

    const navigate = useNavigate()

    const auth = () => navigate('/auth')

    return (
        <>
            <button className="header-auth__signUp">Зарегистрироваться</button>
            <div className="header-auth__rectangle"></div>
            <button onClick={ auth } className="header-auth__signIn">Войти</button>
        </>
    )
}
export default NoAuth