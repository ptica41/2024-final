import './tariff.css'

const Tariff = (props) => {

    return (
        <div className="tariff-window" style={{ backgroundColor: props.color }}>
            <div className="tariff-window-name" style={{ backgroundImage: `url(${props.img})` }}>
                <p className='tariff-window-name__name' style={{ color: (props.color == '#000' ? '#fff' : '#000') }}>{props.name}</p>
                <p className='tariff-window-name__description'  style={{ color: (props.color == '#000' ? '#fff' : '#000') }}>{props.description}</p>
            </div>
            <div className={ props.actual ? "tariff-window-container tariff-window-container_actual" : "tariff-window-container" }>
                <div className={props.actual ? 'tariff__actual' : 'tariff__noActual'}>Текущий тариф</div>
                <span className='tariff-window-container__cost'>{props.cost} ₽</span> <span className='tariff-window-container__cost_crossed'>{props.costOld} ₽</span>
                <p className='tariff-window-name__description'  style={{ color: (props.color == '#000' ? '#fff' : '#000') }}>{props.costDescription}</p>
                <p className='tariff-window-container__description'>В тариф входит:</p>
                <div className='tariff-window-container__include'>{props.feature1}</div>
                <div className='tariff-window-container__include'>{props.feature2}</div>
                <div className='tariff-window-container__include'>{props.feature3}</div>
                <button className={ props.actual ? "tariff-window-container__btn_actual" : "tariff-window-container__btn" }>{ props.actual ? "Перейти в личный кабинет" : "Подробнее" }</button>
            </div>
        </div>
    )
}
export default Tariff