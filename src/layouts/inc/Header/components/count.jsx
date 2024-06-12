import { useContext } from 'react'
import { AuthContext } from '../../../../context'
import './count.css'

const Count = () => {

    const { isLoadInfo } = useContext(AuthContext)

    return (
        <>
            <div className="header-auth-count-use">
                <div className="header-auth-count__text">Использовано компаний</div>
                <div className="header-auth-count__info_use">{ isLoadInfo.used }</div>
            </div>
            <div className="header-auth-count-limit">
                <div className="header-auth-count__text">Лимит по компаниям</div>
                <div className="header-auth-count__info_limit">{ isLoadInfo.limit }</div>
            </div>
        </>
    )
}
export default Count