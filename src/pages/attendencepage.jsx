import React from 'react'
import "./attendencepage.css"
import Sidebar from '../components/sidebar'
import Navbar from '../components/navbar'
import Attendenceform from '../components/attendenceform'
import Footer from '../components/footer'
const attendencepage = () => {
  return (
    <div className='container'>
      <Sidebar/>
      <Navbar/>
      <Attendenceform/>
      <Footer/>
    </div>
  )
}

export default attendencepage
