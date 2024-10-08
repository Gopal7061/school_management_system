import React from 'react'
import "./parentpage.css"
import Sidebar from '../components/sidebar'
import Navbar from '../components/navbar'
import Parentform from '../components/parentform'
import Footer from '../components/footer'
const parentpage = () => {
  return (
    <div className='container'>
    <Sidebar/>
    <Navbar/>
    <Parentform/>
    <Footer/>
  </div>
  )
}

export default parentpage
