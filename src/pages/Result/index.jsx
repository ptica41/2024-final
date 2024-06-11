import Summary from './components/summary'
import './result.css'

const Result = () => {

    return (
        <>
            <section className="result">
                <div className="result-container">
                    <div className="result-container-left">
                        <h1 className='auth-container-left__text'>Ищем. Скоро <br />будут результаты</h1>
                        <div className="cover-container__text">
                            Поиск может занять некоторое время, <br />просим сохранять терпение.
                        </div>
                    </div>
                    <div className="result-container-right"></div>
                </div>
            </section>
            <section className="summary">
                <Summary num={'1 000'}/>
            </section>
        </>
    )
}
export default Result