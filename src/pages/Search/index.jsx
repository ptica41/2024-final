import './search.css'
import Form from './components/form'

const Search = () => {

    return (
        <section className="search">
            <div className="search-container">
                <div className="search-container-left">
                    <h1 className='auth-container-left__text'>Найдите необходимые данные в пару кликов.</h1>
                    <div className="cover-container__text search-container-left__text">
                        Задайте параметры поиска. <br />
                        Чем больше заполните, тем точнее поиск
                    </div>
                    <Form />
                </div>
                <div className="search-container-right">
                    <div className="search-container-right_top">
                        <div className="search-container-right_top__left"></div>
                        <div className="search-container-right_top__right"></div>
                    </div>
                    <div className="search-container-right__bottom"></div>
                </div>
            </div>
        </section>
    )
}
export default Search