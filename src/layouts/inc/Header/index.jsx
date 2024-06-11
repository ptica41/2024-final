import { useState, useEffect, useContext } from "react"

import { Link, useLocation, useNavigate,  } from "react-router-dom"

import { AuthContext } from '../../../context'

import NoAuth from './components/noAuth'
import Auth from './components/auth'
import Loader from './components/loader'
import Count from './components/count'

import './header.css'


const Header = () => {

    const { isAuthenticated, login, logout } = useContext(AuthContext)

    const { pathname } = useLocation()
    
    const [isVisibleBlock, setIsVisibleBlock] = useState(false)
    
    
    const handleChangeVisible = (event) => setIsVisibleBlock(event.target.checked)
    
    const navigate = useNavigate()

    const handleRedirectToHome = () => navigate('/')
    const auth = () => navigate('/auth')

    useEffect( () => {
        setIsVisibleBlock(false)
    }, [pathname])


    return (
        <header> 
            <div className={isVisibleBlock ? "header background_colorAqua" : "header background_colorWhite"}>
                <div className="header-left">
                    <div onClick={handleRedirectToHome} className={isVisibleBlock ? "header-left__logo logoWhite" : "header-left__logo logoAqua"}></div>
                    <nav className="header-left-nav">
                        <ul>
                            <li>
                                <Link to="/" className="header-left-nav__link">Главная</Link>
                                <Link to="/price" className="header-left-nav__link">Тарифы</Link>
                                <Link to="/faq" className="header-left-nav__link">FAQ</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="header-auth">
                    {isAuthenticated ? <Auth element={<Count />}/> : <NoAuth />}
                    {/* <Auth element={<Loader />}/> */}
                    {/* <Auth element={<Count />}/> */}

                </div>
                <div className="header-mobile">
                    <input checked={isVisibleBlock} onChange={handleChangeVisible} type="checkbox" id="check-menu" />
                    <div className={!isVisibleBlock? "header-mobile__line background_colorAqua" : "header-mobile__line background_colorWhite"}></div>
                    <div className={!isVisibleBlock? "header-mobile__line background_colorAqua" : "header-mobile__line background_colorWhite"}></div>
                    <div className={!isVisibleBlock? "header-mobile__line background_colorAqua" : "header-mobile__line background_colorWhite"}></div>
                    <div className={!isVisibleBlock? "header-mobile__line background_colorAqua" : "header-mobile__line background_colorWhite"}></div>
                    <label className="header-mobile__label" htmlFor="check-menu"></label>
                </div>
            </div>
            <div className={isVisibleBlock ? "mobile-nav" : "height0"}>
                <Link to="/" className="mobile-nav__link">Главная</Link>
                <Link to="/price" className="mobile-nav__link">Тарифы</Link>
                <Link to="/faq" className="mobile-nav__link">FAQ</Link>
                <button className="mobile-nav__signUp">Зарегистрироваться</button>
                <button onClick={ auth } className="mobile-nav__signIn">Войти</button>
                
            </div>

            
        </header>
    )
}
export default Header