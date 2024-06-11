import { useContext, createContext, useState } from "react"
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext()

const Context = ({ children }) => {
    const navigate = useNavigate()
    const handleRedirect = () => navigate('/')
    
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    
    const login = async (e) => {
        
            const response = await fetch('https://gateway.scan-interfax.ru/api/v1/account/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json'
                },
                body: JSON.stringify(e)
            })
            const data = await response.json();
            if (data['accessToken']) {
                localStorage.setItem('access', data['accessToken']);
                localStorage.setItem('expire', data['expire']);
                setIsAuthenticated(true)
                handleRedirect()
            }

        }

    const logout = () => {
            
        localStorage.removeItem('access')
        localStorage.removeItem('expire')
        setIsAuthenticated(false)
        handleRedirect()
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            { children }
        </AuthContext.Provider>
    )
}


export default Context