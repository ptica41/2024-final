import { useState, useEffect, useContext } from "react"

import { AuthContext } from '../../context'
import Slick from "./components/slick"
import Tariff from "./components/tariff"

import './mainPage.css'
import { useNavigate } from "react-router-dom"


const Main = () => {

    const auth = useContext(AuthContext)

    const navigate = useNavigate()

    const handleRedirectToSearch = () => navigate('/search')
    // const [todos, setTodos] = useState([])

    // useEffect(() => {
    //     getTodos()
    // }, [])

    // const getTodos = () => {
    //     fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
    //         .then(response => response.json())
    //         .then(json => setTodos(json))
    // }

    const beginner = {
        name: 'Beginner',
        description: 'Для небольшого исследования',
        cost: 799,
        costOld: '1 200',
        costDescription: 'или 150 ₽/мес. при рассрочке на 24 мес.',
        feature1: 'Безлимитная история запросов',
        feature2: 'Безопасная сделка',
        feature3: 'Поддержка 24/7',
        color: '#ffb64f',
        img: '/src/pages/Main/components/img/lamp.svg',
        actual: false
    }

    const pro = {
        name: 'Pro',
        description: 'Для HR и фрилансеров',
        cost: '1 299',
        costOld: '2 600',
        costDescription: 'или 279 ₽/мес. при рассрочке на 24 мес.',
        feature1: 'Все пункты тарифа Beginner',
        feature2: 'Экспорт истории',
        feature3: 'Рекомендации по приоритетам',
        color: '#7CE3E1',
        img: '/src/pages/Main/components/img/darts.png',
        actual: true
    }

    const business = {
        name: 'Business',
        description: 'Для корпоративных клиентов',
        cost: '2 379',
        costOld: '3 700',
        costDescription: '5',
        feature1: 'Все пункты тарифа Pro',
        feature2: 'Безлимитное количество запросов',
        feature3: 'Приоритетная поддержка',
        color: '#000',
        img: '/src/pages/Main/components/img/notebook.svg',
        actual: false
    }


    return (
        <>
            <section className="cover">
                <div className="cover-container">
                    <div className="cover-container-left">
                        <h1>сервис по поиску <br />публикаций <br />о компании <br />по его ИНН</h1>
                        <div className="cover-container__text">Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</div>
                        <button onClick={ handleRedirectToSearch } className={ auth.isAuthenticated ? "cover-container__btn" : "cover-container__btn noDisplay"}>Запросить данные</button>
                    </div>
                    <div className="cover-container-right"></div>
                </div>
            </section>
            <section className="advantages">
                <h2>Почему именно мы</h2>
                <div className="advantages-list">
                    <Slick />
                </div>
                <div className="advantages-background">
                    <div className="advantages-background-left"></div>
                    <div className="advantages-background-right"></div>
                </div>
            </section>
            <section className="tariff">
                <h2>Наши тарифы</h2>
                <div className="tariff-list">
                    <Tariff {...beginner} />
                    <Tariff {...pro} />
                    <Tariff {...business} />
                </div>
            </section>

            {/* {todos.map(todo => <p key={todo.id}>{todo.id}</p>)} */}
        </>
    )
}
export default Main