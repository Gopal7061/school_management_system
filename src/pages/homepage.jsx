import React from 'react'
import "./homepage.css"
import Adminform from '../components/adminform'
import Teacherform from '../components/teacherform'
import Parentform from '../components/parentform'
import Studentform from '../components/studentform'
const homepage = () => {
  return (
    <div className='container'>
    <Sidebar/>
    <Navbar/>
    {current === '1' && <Adminform />}
    {current === '2' && <Teacherform />}
    {current === '3' && <Parentform />}
    {current === '4' && <Studentform />}
    <Footer/>
  </div>
  )
}

export default homepage
