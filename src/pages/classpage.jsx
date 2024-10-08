import React from 'react'
import "./classpage.css"
import Sidebar from '../components/sidebar'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Classform from '../components/classform'
const classpage = () => {
  return (
    <div className='container'>
    <Sidebar/>
    <Navbar/>
    <Classform/>
    <Footer/>
  </div>
  )
}

export default classpage
