import { useState } from 'react'
import Header from './assets/components/header.jsx'
import Main from './assets/components/main.jsx'
import Footer from './assets/components/footer.jsx'
import Register from './assets/components/register.jsx'
import Login from './assets/components/login.jsx'
import './assets/css/style.css'
import Authprovide from './authprovide.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from './assets/components/dashboard/dashboard.jsx'
import Privateroute from './privateroute.jsx'
import Publicrout from './publicrout.jsx'
import publicrout from './publicrout.jsx'
function App() {

  return (
    <>
      <Authprovide>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/register' element={<Publicrout><Register /></Publicrout>} />
            <Route path='/login' element={<Login />} />
            <Route path='dashboard' element={<Privateroute><Dashboard /></Privateroute>} />
            <Route></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </Authprovide>


    </>
  )
}

export default App
