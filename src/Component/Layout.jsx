import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import style from '../style.module.css'
import Information from './Information'

export default function Layout() {
  return ( <>
    <Navbar/>
    <Outlet></Outlet>  
    <Information/>
    <Footer/>
  </>
  )
}
//back