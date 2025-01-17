import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom' ;
import Home from './pages/Home';
import About from './pages/About';
import Faq from './pages/Faq';
import Services from './pages/Services';
import Blog from './pages/Blog';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/blog' element={<Blog/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/faq' element={<Faq/>} />
    </Routes>
    </BrowserRouter>
  )
}
