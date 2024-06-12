import { useNavigate } from 'react-router-dom'
import './footer.css'

const Footer = () => {
    const navigate = useNavigate()

    const handleRedirectToHome = () => {
        navigate('/')
        window.scrollTo(0, 0)
    }

    return (
        <div className="footer">
            <div onClick={ handleRedirectToHome } className="footer__logo"></div>
            <div className="footer-info">
                <div className="footer-info__contacts">
                    <p>г. Москва, Цветной б-р, 40</p>
                    <p>+7 495 771 21 11</p>
                    <p>info@skan.ru</p>                  
                </div>
                <div className="footer-info__copyright">Copyright. 2022</div>
            </div>
        </div>
    )
}
export default Footer