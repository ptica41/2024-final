import './count.css'

const Count = () => {
    return (
        <>
            <div className="header-auth-count-use">
                <div className="header-auth-count__text">Использовано компаний</div>
                <div className="header-auth-count__info_use">34</div>
            </div>
            <div className="header-auth-count-limit">
                <div className="header-auth-count__text">Лимит по компаниям</div>
                <div className="header-auth-count__info_limit">100</div>
            </div>
        </>
    )
}
export default Count