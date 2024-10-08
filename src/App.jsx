import React from 'react'
import Adminpage from "./pages/adminpage.jsx";
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Attendencepage from './pages/attendencepage.jsx';
import Sectionpage from './pages/sectionpage.jsx';
import Classpage from './pages/classpage.jsx';
import Parentpage from './pages/parentpage.jsx';
import Teacherpage from './pages/teacherpage.jsx';
import Studentpage from './pages/studentpage.jsx';
const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/admin' element={<Adminpage/>}/>
    <Route path='/attendence' element={<Attendencepage/>}/>
    <Route path='/section' element={<Sectionpage/>}/>
    <Route path='/class' element={<Classpage/>}/>
    <Route path='/parent' element={<Parentpage/>}/>
    <Route path='/teacher' element={<Teacherpage/>}/>
    <Route path='/student' element={<Studentpage/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
