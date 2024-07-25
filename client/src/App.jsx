import React from 'react'
import { Button } from 'react-bootstrap';
import {BrowserRouter, Routes, Route} from 'react-router-dom' ;
import Home from './pages/Home';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
    </BrowserRouter>
  )
}
