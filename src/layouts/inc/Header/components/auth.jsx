import './auth.css'
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../../../context'

const Auth = ({element}) => {

    const { isAuthenticated, login, logout } = useContext(AuthContext)


    return (
        <>
            <div className="header-auth-count">
                {element}
            </div>
            <div className="header-auth-account">
                <div className="header-auth-account-left">
                    <div className="header-auth-account-left-fio">Алексей А.</div>
                    <a onClick={ logout } className="header-auth-account-left-exit" href="#">Выйти</a>
                </div>
                <div className="header-auth-account-photo"></div>
            </div>
        </>
    )
}
export default Auth