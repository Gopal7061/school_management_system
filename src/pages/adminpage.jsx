import React from 'react'
import "./adminpage.css"
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import Adminform from '../components/adminform'
import Footer from '../components/footer.jsx'
const homepage = () => {
  return (
    <div className='container'>
      <Sidebar/>
      <Navbar/>
      <Adminform/>
      <Footer/>
    </div>
  )
}

export default homepage
