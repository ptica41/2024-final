import { Link } from "react-router-dom"
import './header.css'

const Header = () => {
    return (
        <header> 
            <nav>
                <ul>
                    <li>
                        <Link to="/">Main</Link>
                        <Link to="/auth">Authorization</Link>
                        <Link to="/result">Result</Link>
                        <Link to="/search">Search</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header