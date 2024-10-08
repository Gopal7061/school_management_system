import React from 'react'
import "./teacherpage.css"
import Sidebar from '../components/sidebar'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Teacherform from '../components/teacherform'
const teacherpage = () => {
  return (
    <div className='container'>
    <Sidebar/>
    <Navbar/>
    <Teacherform/>
    <Footer/>
  </div>
  )
}

export default teacherpage
