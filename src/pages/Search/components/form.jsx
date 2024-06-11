import { useState } from 'react';
import './form.css'
import { useNavigate } from 'react-router-dom';

const Form = () => {

    // const navigate = useNavigate()

    // const handleRedirect = () => navigate('#')


        const [formData, setFormData] = useState({
          name: '',
          email: '',
          message: ''
        });
      
        const handleChange = (e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          // Здесь можно добавить логику отправки данных формы, например, на сервер
        };


    return (
            <form onSubmit={handleSubmit} className="search-form">
                <div className="search-form_left">
                    <label htmlFor="INN" className='search-form__left_text'>ИНН компании *</label><br />
                    <input type="text" id="INN" name="INN" className='search-form_left__area' placeholder='10 цифр'  onChange={handleChange} required /><br />
                    <label htmlFor="tonality" className='search-form__left__text'>Тональность</label> <br />
                    <select id="tonality" name="tonality" className='search-form_left__select' onChange={handleChange} > <br />
                        <option value="any">любая</option>
                        <option value="positive">позитивная</option>
                        <option value="negative">негативная</option>
                    </select> <br />
                    <label htmlFor="count" className='search-form_left__text'>Количество документов в выдаче&nbsp;*</label><br />
                    <input type="number" id="count" name="count" className='search-form_left__area' placeholder='От 1 до 1000'  onChange={handleChange} required /><br />
                    <label htmlFor="date" className='search-form_left__text'>Диапазон поиска *</label><br />
                    <input type="date" id="date" name="date" className='search-form_left__select search-form_left__date' onChange={handleChange} required />
                    <input type="date" id="end" name="end" className='search-form_left__select search-form_left__date' onChange={handleChange} required /><br />

                </div>
                <div className="search_right">
                  <div className="search_right_submit">
                    <input type="checkbox" id="full_sign" className='search_right__checkbox' />
                    <label htmlFor="full_sign" className='search_right__text'>Признак максимальной полноты</label> <br />
                    <input type="checkbox" id="business_notify" className='search_right__checkbox' />
                    <label htmlFor="business_notify" className='search_right__text'>Упоминания в бизнес-контексте</label> <br />
                    <input type="checkbox" id="main_role" className='search_right__checkbox' />
                    <label htmlFor="main_role" className='search_right__text'>Главная роль в публикации</label> <br />
                    <input type="checkbox" id="risk_factor" className='search_right__checkbox' />
                    <label htmlFor="risk_factor" className='search_right__text'>Публикации только с риск-факторами</label> <br />
                    <input type="checkbox" id="teh_news" className='search_right__checkbox' />
                    <label htmlFor="teh_news" className='search_right__text'>Включать технические новости рынков</label> <br />
                    <input type="checkbox" id="calendar" className='search_right__checkbox' />
                    <label htmlFor="calendar" className='search_right__text'>Включать анонсы и календари</label> <br />
                    <input type="checkbox" id="news" className='search_right__checkbox' />
                    <label htmlFor="news" className='search_right__text'>Включать сводки новостей</label> <br />
                  </div>
                    <input type="submit" className='form-container__btn search_right__btn' value="Поиск" />
                    <p className="search_right__description">* Обязательные к заполнению поля</p>
                </div>
            </form>
    )
}
export default Form