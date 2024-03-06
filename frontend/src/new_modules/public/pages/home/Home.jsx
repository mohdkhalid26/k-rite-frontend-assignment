import React from 'react'
import "./Home.scss"
import Header from '../../components/header/Header'
import Main from './main/Main'
import Footer from '../../components/footer/Footer'
import Contact from '../contact/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function Home() {
  return (
    <div className='home'>
        <BrowserRouter>
        <Header/>
        <Routes>
           <Route exact path='/' element={<Main/>}/> 
           <Route path='/contact' element={<Contact/>}/> 
           <Route path='*' element={<Main/>}/> 
        </Routes>
        <Footer/>
        </BrowserRouter>
    </div>
  )
}

export default Home