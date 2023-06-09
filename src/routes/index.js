import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Home from '../container/Home'


export default function Router() {
  return (
    <BrowserRouter basename="/E-Commerce">
        <Routes>

            <Route path='*' element={<Home/>} /> 
            
        </Routes>
    </BrowserRouter>
  )
}
