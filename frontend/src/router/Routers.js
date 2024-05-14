import React from 'react'
import {Navigate, Routes} from 'react-router-dom'
import Home from './../pages/Home'
import Tours from './../pages/Tours'
import TourDetails from './../pages/TourDetails'
import Login from './../pages/Login'
import Register from './../pages/Register'
import SeachResultList from './../pages/SeachResultList'


const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to ='/home'/>}/>
        <Route path='/home' element={<Home />} />
        <Route path='/tour' element={<Tours />} />
        <Route path='/tour/:id' element={<TourDetails />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/tour/seach' element={<SeachResultList />} />


    </Routes>
  )
}

export default Routers