import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import GlobalStyle from "./styles/GlobalStyle.jsx";

import Home from './pages/Home.jsx'
import Dex from './pages/Dex.jsx'
import Detail from './pages/Detail.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dex' element={<Dex />} />
        <Route path='/detail' element={<Detail />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
