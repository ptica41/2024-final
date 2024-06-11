import Slider from "react-slick"
import "./slick.css"
import "./slick-theme.css"

import Advantage from "./advantage"
import { useEffect, useState } from "react"

const Slick = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            
        };
    }, []);

    return (
        <Slider arrows={true} dots={false} infinite={true} speed={500} slidesToShow={ windowWidth > 1450 ? 3 : (windowWidth < 1000 ? 1 : 2)} slidesToScroll={1}>
            <Advantage image={'src/pages/Main/img/time.png'} text='Высокая и оперативная скорость обработки заявки'/>
            <Advantage image={'src/pages/Main/img/zoom.png'} text='Огромная комплексная база данных, обеспечивающая объективный ответ на запрос'/>
            <Advantage image={'src/pages/Main/img/shield.png'} text='Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству'/>
            <Advantage image={'src/pages/Main/img/time.png'} text='Высокая и оперативная скорость обработки заявки'/>
            <Advantage image={'src/pages/Main/img/zoom.png'} text='Огромная комплексная база данных, обеспечивающая объективный ответ на запрос'/>
            <Advantage image={'src/pages/Main/img/shield.png'} text='Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству'/>
        </Slider>
    )
}
export default Slick