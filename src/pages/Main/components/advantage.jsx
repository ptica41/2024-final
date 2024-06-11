import './advantage.css'

const Advantage = (props) => {

    const img = {
        backgroundImage: `url(${props.image})`
    };



    return (
        <div className="advantage">
            <div className='advantage__img' style={ img }></div>
            <div className="advantage__text">{props.text}</div>
        </div>
    )
}
export default Advantage