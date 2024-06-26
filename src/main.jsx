import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Context from './context.jsx'

import DefaultLayout from './layouts/DefaultLayout'
import Authorization from './pages/Authorization'
import Main from './pages/Main'
import Result from './pages/Result'
import Search from './pages/Search'

import "./main.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Context>
      <DefaultLayout>
        <Routes>
            <Route path='/auth' element={<Authorization />} />
            <Route path='/' element={<Main />} />
            <Route path='/result' element={<Result />} />
            <Route path='/search' element={<Search />} />
        </Routes>
      </DefaultLayout>
      </Context>
    </BrowserRouter>
  </React.StrictMode>,
)
