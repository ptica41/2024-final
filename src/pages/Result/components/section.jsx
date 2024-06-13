import './section.css'

const Section = (props) => {

    const link = () => {
        window.open(props.url, '_blank')
    }

    return (
        <div className="section-container">
            <div className="section-container-top">
                <div className="section-container-top__date">
                    {props.date}
                </div>
                <a href="#" className="section-container-top__source"> {props.source} </a>
            </div>
            <div className="section-container__header"> {props.header} </div>
            <div className="section-container__topic" style={{ opacity: props.topic == 'Null' ? 0 : 100 }}> {props.topic} </div>
            <div className="section-container__img" style={{ backgroundImage: props.img !== 'Null' ? `url(${props.img})` : ``, backgroundSize: props.img !== 'Null' ? `cover` : `contain` }}></div>
            <div className="section-container__text" dangerouslySetInnerHTML={{__html: `${props.text}` }} />
            <div className="section-container-footer">
                <button className="section-container-footer__btn" onClick={link}>Читать в источнике</button>
                <span className="section-container-footer__count"> {props.count} </span>
            </div>
        </div>
    )
}
export default Section