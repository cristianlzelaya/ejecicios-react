import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import CountryCard from './components/CountryCard/CountryCard.jsx'
import Paises from './Paises.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <App /> */}
    {/* <CountryCard /> */}
    <Paises />
    {/* <GeneratorCountry /> */}
  </BrowserRouter>
)
