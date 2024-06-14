import { useContext, useEffect, useLayoutEffect } from 'react'
import Summary from './components/summary'
import Section from './components/section'
import './result.css'

import { AuthContext } from '../../context'

const Result = () => {

    const { handleRedirect, whoAmI, getDocument, documentId, doc, count } = useContext(AuthContext)
    
    useEffect (() => {
        if (!count) handleRedirect('search')
        whoAmI(localStorage.getItem('access'))
    }, [])

    const wordCount = (e) => {
        if (e.attributes.wordCount % 10 == '1') return `${e.attributes.wordCount} слово`
        else if (e.attributes.wordCount % 10 == '2' || e.attributes.wordCount % 10 == '3' || e.attributes.wordCount % 10 == '4') return `${e.attributes.wordCount} словa`
        else return `${e.attributes.wordCount} слов`
    }

    const date = (e) => {
        const temp = e.split('T')[0].split('-')
        return `${temp[2]}.${temp[1]}.${temp[0]}`
    }

    const topicWhat = (e) => {
        if (e.attributes.isTechNews === true) return 'Технические новости'
        else if (e.attributes.isAnnouncement === true) return 'Анонсы и события'
        else if (e.attributes.isDigest === true) return 'Сводки новостей'
        else return "Null"
    }

    const reform = (e) => {
        if (e.indexOf('im') !== -1) {
            const start = e.indexOf(';img')
            const startImg = e.slice(start).indexOf('"')
            const endImg = e.slice(start+startImg+1).indexOf('"')
            return {
                text: e.replace(e.slice(start+1, start+startImg+endImg+1), ''),
                img: e.slice(start+startImg+1, start+startImg+endImg+1)
            }
        } else {
            return false
        }
    }

    const txt = (e) => {
        if (reform(e)) return reform(e).text
        else return e
    }
    
    const img = (e) => {
        if (reform(e)) return reform(e).img
        else return false
    }
    
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
            <section className='documents'>
                <h2 className="summary-container__header documents__header">Список документов</h2>
                <div className="documents-section">
                    { doc.map((item, index) => (
                <Section img={ img(item.content.markup) ? img(item.content.markup) : 'Null'} date={ date(item.issueDate) } source={ item.source.name } header={ item.title.text } topic={ topicWhat(item) } text={ txt(item.content.markup) } count={ wordCount(item) } url={ item.url } key={item.id}/>
            ))}
                </div>
                {documentId?.length ? <button onClick={ getDocument } className='documents__btn'>Показать больше</button> : ''}
            </section>
        </>
    )
}
export default Result