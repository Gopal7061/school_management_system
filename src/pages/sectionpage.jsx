import React from 'react'
import "./sectionpage.css";
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import Sectionform from '../components/sectionform';
import Footer from '../components/footer';
const sectionpage = () => {
  return (
    <div className='container'>
      <Sidebar/>
      <Navbar/>
      <Sectionform/>
      <Footer/>
    </div>
  )
}

export default sectionpage
