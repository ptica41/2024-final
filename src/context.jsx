import { useContext, createContext, useState, useEffect } from "react"
import { useLocation, useNavigate } from 'react-router-dom';

export const AuthContext = createContext()

const Context = ({ children }) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const handleRedirect = (e) => navigate(`/${e}`)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isInvalid, setIsInvalid] = useState(false)
  const [isLoadInfo, setIsLoadInfo] = useState({
    status: false,
    used: 0,
    limit: 0
  })
  const [histograms, setHistograms] = useState([])
  const [documentId, setDocumentId] = useState([])
  const [doc, setDoc] = useState([])
  const [count, setCount] = useState(0)

  const login = async (e) => {

    const response = await fetch('https://gateway.scan-interfax.ru/api/v1/account/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify(e)
    })

    const data = await response.json();
    if (data['accessToken']) {
      localStorage.setItem('access', data['accessToken']);
      localStorage.setItem('expire', data['expire']);
      setIsAuthenticated(true)
      handleRedirect('')
    } else {
      setIsInvalid(true)
    }

  }

  const logout = () => {

    localStorage.removeItem('access')
    localStorage.removeItem('expire')
    setIsAuthenticated(false)
    setIsLoadInfo({ status: false, used: 0, limit: 0 })
    handleRedirect('')
  }

  const whoAmI = async (e) => {
    if (localStorage.getItem('expire')) {
      if (new Date().toISOString() > localStorage.getItem('expire')) logout()

      setIsAuthenticated(true)

      const response = await fetch('https://gateway.scan-interfax.ru/api/v1/account/info', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json',
          'Authorization': `Bearer ${e}`
        },
      })

      const data = await response.json();
      setIsLoadInfo({ status: true, used: data.eventFiltersInfo.usedCompanyCount, limit: data.eventFiltersInfo.companyLimit })

    } else if (!isAuthenticated && pathname !== '/auth') handleRedirect('')

  }

  const search = async (e) => {

    setCount(0)
    setDoc([])

    const body = {
      "intervalType": "month",
      "histogramTypes": [
        "totalDocuments",
        "riskFactors"
      ],
      "issueDateInterval": {
        "startDate": `${e.start}T00:00:00.170Z`,
        "endDate": `${e.end}T23:59:59.170Z`
      },
      "searchContext": {
        "targetSearchEntitiesContext": {
          "targetSearchEntities": [
            {
              "type": "company",
              "inn": e.INN,
              "maxFullness": e.fullSign,
              "inBusinessNews": e.businessNotify
            }
          ],
          "onlyMainRole": e.mainRole,
          "tonality": e.tonality,
          "onlyWithRiskFactors": e.riskFactor,
          "riskFactors": {
            "and": [],
            "or": [],
            "not": []
          },
          "themes": {
            "and": [],
            "or": [],
            "not": []
          }
        },
        "searchEntitiesFilter": {
          "and": [],
          "or": [],
          "not": []
        },
        "locationsFilter": {
          "and": [],
          "or": [],
          "not": []
        },
        "themesFilter": {
          "and": [],
          "or": [],
          "not": []
        }
      },
      "searchArea": {
        "includedSources": [],
        "excludedSources": [],
        "includedSourceGroups": [],
        "excludedSourceGroups": [],
        "includedDistributionMethods": [],
        "excludedDistributionMethods": []
      },
      "attributeFilters": {
        "excludeTechNews": e.tehNews,
        "excludeAnnouncements": e.calendar,
        "excludeDigests": e.news
      },
      "similarMode": "duplicates",
      "limit": e.count,
      "sortType": "issueDate",
      "sortDirectionType": "desc",
    }

    const response = await fetch('https://gateway.scan-interfax.ru/api/v1/objectsearch/histograms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access')}`
      },
      body: JSON.stringify(body)
    })

    const data = await response.json();
    let arr = new Array
    for (let i = 0; i < data.data[0].data.length; i++) {
      let date = data.data[0].data[i].date.split('T')[0].split('-')
      date = `${date[2]}.${date[1]}.${date[0]}`
      let total = data.data[0].data[i].value
      let risk = data.data[1].data[i].value
      arr.push({ date: date, total: total, risk: risk })
    }
    setHistograms(arr)

    const response2 = await fetch('https://gateway.scan-interfax.ru/api/v1/objectsearch', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access')}`
      },
      body: JSON.stringify(body)
    })

    const data2 = await response2.json();
    let arrToDocument = new Array()
    data2.items.map((item, index) => (
      arrToDocument.push(item.encodedId)
    ))
    setDocumentId(arrToDocument)
    setCount(1)
  }

  const getDocument = async () => {
    const response = await fetch('https://gateway.scan-interfax.ru/api/v1/documents', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access')}`
      },
      body: JSON.stringify({ "ids": documentId.slice(0, 10) })
    })
    const data = await response.json();
    let arrDoc = []
    data.map((item, index) => (
      arrDoc.push(item.ok)
    ))
    setDoc(pre => ([...pre, ...arrDoc]))
    setDocumentId(documentId.slice(10))
  }

  const test = async () => {
    await getDocument()
  }

  useEffect(() => {
    if (count) test()
  }, [count])


  useEffect(() => {
    if (doc?.length) handleRedirect('result')
  }, [doc])

  return (
    <AuthContext.Provider value={{ count, handleRedirect, setIsInvalid, isInvalid, isAuthenticated, isLoadInfo, login, logout, whoAmI, search, documentId, getDocument, doc, histograms }}>
      {children}
    </AuthContext.Provider>
  )
}


export default Context