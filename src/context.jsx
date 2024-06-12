import { useContext, createContext, useState } from "react"
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext()

const Context = ({ children }) => {
    const navigate = useNavigate()
    const handleRedirect = (e) => navigate(`/${e}`)
    
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isInvalid, setIsInvalid] = useState(false)
    const [isLoadInfo, setIsLoadInfo] = useState({
        status: false,
        used: 0,
        limit: 0
    })
    
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
                handleRedirect('')
            } else {
                setIsInvalid(true)
            }

        }

    const logout = () => {
            
        localStorage.removeItem('access')
        localStorage.removeItem('expire')
        setIsAuthenticated(false)
        setIsLoadInfo({status: false, used: 0, limit: 0})
        handleRedirect('')
    }

    const whoAmI = async (e) => {
        if (localStorage.getItem('expire')) {
            if (new Date().toISOString() > localStorage.getItem('expire')) logout()
            
            setIsAuthenticated(true)

            const response = await fetch('https://gateway.scan-interfax.ru/api/v1/account/info', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json',
                    'Authorization': `Bearer ${e}`
                },
            })

            const data = await response.json();
            setIsLoadInfo({status: true, used: data.eventFiltersInfo.usedCompanyCount, limit: data.eventFiltersInfo.companyLimit})
            
        }
    }

    return (
        <AuthContext.Provider value={{ setIsInvalid, isInvalid, isAuthenticated, isLoadInfo, login, logout, whoAmI }}>
            { children }
        </AuthContext.Provider>
    )
}


export default Context