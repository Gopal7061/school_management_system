import React from 'react'
import "./studentpage.css"
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import Studentform from '../components/studentform'
import Footer from '../components/footer'

const studentpage = () => {
  return (
    <div className='container'>
    <Sidebar/>
    <Navbar/>
    <Studentform/>
    <Footer/>
  </div>
  )
}

export default studentpage
