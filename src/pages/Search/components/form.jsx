import { useState } from 'react';
import './form.css'
import { useNavigate } from 'react-router-dom';

const Form = () => {

  const [formData, setFormData] = useState({
    INN: '',
    tonality: 'any',
    count: 0,
    start: '',
    end: '',
    fullSign: false,
    businessNotify: false,
    mainRole: false,
    riskFactor: false,
    tehNews: false,
    calendar: false,
    news: false
  });

  const isFull = (e) => {
    if (e.INN && e.count && e.start && e.end) return true
    else return false
}

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log({...formData})
  };

  const handleChangeCheckbox = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
    console.log({...formData})
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <div className="search-form_left">
        <label htmlFor="INN" className='search-form__left_text'>ИНН компании *</label><br />
        <input type="text" id="INN" name="INN" className='search-form_left__area' placeholder='10 цифр' onChange={handleChange} required /><br />
        <label htmlFor="tonality" className='search-form__left__text'>Тональность</label> <br />
        <select id="tonality" name="tonality" className='search-form_left__select' onChange={handleChange} > <br />
          <option value="any">любая</option>
          <option value="positive">позитивная</option>
          <option value="negative">негативная</option>
        </select> <br />
        <label htmlFor="count" className='search-form_left__text'>Количество документов в выдаче&nbsp;*</label><br />
        <input type="number" id="count" name="count" className='search-form_left__area' placeholder='От 1 до 1000' onChange={handleChange} required /><br />
        <label htmlFor="start" className='search-form_left__text'>Диапазон поиска *</label><br />
        <input type="date" id="start" name="start" className='search-form_left__select search-form_left__date' onChange={handleChange} required />
        <input type="date" id="end" name="end" className='search-form_left__select search-form_left__date' onChange={handleChange} required /><br />

      </div>
      <div className="search_right">
        <div className="search_right_submit">
          <input type="checkbox" id="fullSign" name="fullSign" className='search_right__checkbox' onChange={ handleChangeCheckbox } />
          <label htmlFor="fullSign"  className='search_right__text'>Признак максимальной полноты</label> <br />
          <input type="checkbox" id="businessNotify" name="businessNotify" className='search_right__checkbox' onChange={ handleChangeCheckbox } />
          <label htmlFor="businessNotify" className='search_right__text'>Упоминания в бизнес-контексте</label> <br />
          <input type="checkbox" id="mainRole" name="mainRole" className='search_right__checkbox' onChange={ handleChangeCheckbox } />
          <label htmlFor="mainRole" className='search_right__text'>Главная роль в публикации</label> <br />
          <input type="checkbox" id="riskFactor" name="riskFactor" className='search_right__checkbox' onChange={ handleChangeCheckbox } />
          <label htmlFor="riskFactor" className='search_right__text'>Публикации только с риск-факторами</label> <br />
          <input type="checkbox" id="tehNews" name="tehNews" className='search_right__checkbox' onChange={ handleChangeCheckbox } />
          <label htmlFor="tehNews" className='search_right__text'>Включать технические новости рынков</label> <br />
          <input type="checkbox" id="calendar" name="calendar" className='search_right__checkbox' onChange={ handleChangeCheckbox } />
          <label htmlFor="calendar" className='search_right__text'>Включать анонсы и календари</label> <br />
          <input type="checkbox" id="news" name="news" className='search_right__checkbox' onChange={ handleChangeCheckbox } />
          <label htmlFor="news" className='search_right__text'>Включать сводки новостей</label> <br />
        </div>
        <button type="submit" className={isFull(formData) ? 'form-container__btn search_right__btn' : 'form-container__btn search_right__btn search_right__btn_inActive'}>Поиск</button>
        <p className="search_right__description">* Обязательные к заполнению поля</p>
      </div>
    </form>
  )
}
export default Form