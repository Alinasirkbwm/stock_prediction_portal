import { useState } from 'react'
import Header from './assets/components/header.jsx'
import Main from './assets/components/main.jsx'
import Footer from './assets/components/footer.jsx'
import Register from './assets/components/register.jsx'
import Login from './assets/components/login.jsx'
import './assets/css/style.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route></Route>
        </Routes>
        <Footer />
      </BrowserRouter>


    </>
  )
}

export default App
