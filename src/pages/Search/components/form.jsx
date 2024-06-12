import { useContext, useState } from 'react';
import './form.css'
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../../context'

const Form = () => {

  const { search } = useContext(AuthContext)

  const [formData, setFormData] = useState({
    INN: '',
    tonality: 'any',
    count: '',
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

  const validINN = (e) => {
    if (!e.INN) return true
    else if (e.INN.length !== 10) return false
    else if (/[^0-9]/.test(e.INN)) return false

    const checkDigit = function (inn, coefficients) {
      var n = 0;
      for (let i in coefficients) {
        n += coefficients[i] * inn[i];
      }
      return parseInt(n % 11 % 10);
    };

    const n10 = checkDigit(e.INN, [2, 4, 10, 3, 5, 9, 4, 6, 8]);
    if (n10 === parseInt(e.INN[9])) return true
    else return false
  }

const validCount = (e) => {
  if (!e.count) return true
  else if (0 < e.count && e.count <= 1000) return true
  else false
}

const validDate = (e) => {
  const date = new Date()
  const now = date.toISOString().split('T')[0]
  if (!e.start || !e.end) return true
  else if (e.start && e.start > now) return false
  else if (e.end && e.end > now) return false
  else if (e.start && e.end && e.start > e.end) return false
  else return true
}

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleChangeCheckbox = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.checked });
};

const handleSubmit = (e) => {
  e.preventDefault();
  search(formData)
};

return (
  <form onSubmit={handleSubmit} className="search-form">
    <div className="search-form_left">
      <label htmlFor="INN" className='search-form__left_text'>ИНН компании *</label><br />
      <input type="text" id="INN" name="INN" className={validINN(formData) ? 'search-form_left__area' : 'search-form_left__area_invalid'} placeholder='10 цифр' value={formData.INN} onChange={handleChange} required /><br />
      <label htmlFor="tonality" className='search-form__left__text'>Тональность</label> <br />
      <select id="tonality" name="tonality" className='search-form_left__select' onChange={handleChange} > <br />
        <option value="any">любая</option>
        <option value="positive">позитивная</option>
        <option value="negative">негативная</option>
      </select> <br />
      <label htmlFor="count" className='search-form_left__text'>Количество документов в выдаче&nbsp;*</label><br />
      <input type="text" id="count" name="count" className={validCount(formData) ? 'search-form_left__area' : 'search-form_left__area_invalid'} placeholder='От 1 до 1000' value={formData.count} onChange={handleChange} required /><br />
      <label htmlFor="start" className='search-form_left__text'>Диапазон поиска *</label><br />
      <input type="date" id="start" name="start" className={validDate(formData) ? 'search-form_left__select search-form_left__date' : 'search-form_left__select_invalid search-form_left__date'} value={formData.start} onChange={handleChange} required />
      <input type="date" id="end" name="end" className={validDate(formData) ? 'search-form_left__select search-form_left__date' : 'search-form_left__select_invalid search-form_left__date'} value={formData.end} onChange={handleChange} required /><br />

    </div>
    <div className="search_right">
      <div className="search_right_submit">
        <input type="checkbox" id="fullSign" name="fullSign" className='search_right__checkbox' onChange={handleChangeCheckbox} />
        <label htmlFor="fullSign" className='search_right__text'>Признак максимальной полноты</label> <br />
        <input type="checkbox" id="businessNotify" name="businessNotify" className='search_right__checkbox' onChange={handleChangeCheckbox} />
        <label htmlFor="businessNotify" className='search_right__text'>Упоминания в бизнес-контексте</label> <br />
        <input type="checkbox" id="mainRole" name="mainRole" className='search_right__checkbox' onChange={handleChangeCheckbox} />
        <label htmlFor="mainRole" className='search_right__text'>Главная роль в публикации</label> <br />
        <input type="checkbox" id="riskFactor" name="riskFactor" className='search_right__checkbox' onChange={handleChangeCheckbox} />
        <label htmlFor="riskFactor" className='search_right__text'>Публикации только с риск-факторами</label> <br />
        <input type="checkbox" id="tehNews" name="tehNews" className='search_right__checkbox' onChange={handleChangeCheckbox} />
        <label htmlFor="tehNews" className='search_right__text'>Включать технические новости рынков</label> <br />
        <input type="checkbox" id="calendar" name="calendar" className='search_right__checkbox' onChange={handleChangeCheckbox} />
        <label htmlFor="calendar" className='search_right__text'>Включать анонсы и календари</label> <br />
        <input type="checkbox" id="news" name="news" className='search_right__checkbox' onChange={handleChangeCheckbox} />
        <label htmlFor="news" className='search_right__text'>Включать сводки новостей</label> <br />
      </div>
      <button type="submit" className={(isFull(formData) && validCount(formData) && validDate(formData) && validINN(formData)) ? 'form-container__btn search_right__btn' : 'form-container__btn search_right__btn search_right__btn_inActive'}>Поиск</button>
      <p className="search_right__description">* Обязательные к заполнению поля</p>
    </div>
  </form>
)
}
export default Form