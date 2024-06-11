import Slider from 'react-slick'
import Slick from './slick'
import './summary.css'

const Summary = (props) => {

    return (
        <div className="summary-container">
            <h2 className="summary-container__header">
                Общая сводка
            </h2>
            <p className="summary-container__description">
                Найдено {props.num} вариантов
            </p>
            <div className="summary-container-carousel">
                <div className="summary-container-carousel-slick">
                    <div className="summary-container-carousel-slick-headers">
                        <div className='summary-container-carousel-slick-headers__header'>Период</div>
                        <div className='summary-container-carousel-slick-headers__header'>Всего</div>
                        <div className='summary-container-carousel-slick-headers__header'>Риски</div>
                    </div>
                    <div className="summary-container-carousel-slick-info">
                        <Slick />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Summary