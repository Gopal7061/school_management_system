import React from 'react'
import "./attendenceform.css"
const attendenceform = () => {
  return (
    <div className="form-container">
           <form action="">
    <div className="form-header">
      <p> <a href="#">Home</a>  &gt; <a href="#">Teacher</a> &gt; <a href="#">Attendence</a> </p>
    </div>
    <h1>Attendence</h1>
      <div className="input-container">
    <div className="input-group">
        <label htmlFor="role">Select class*</label>
        <select name="" id="">
          <option value="">Admin</option>
          <option value="">Student</option>
          <option value="">Parent</option>
          <option value="">Teacher</option>
        </select>
    </div>
    <div className="input-group">
        <label htmlFor="role">Select section*</label>
        <select name="" id="">
          <option value="">Admin</option>
          <option value="">Student</option>
          <option value="">Parent</option>
          <option value="">Teacher</option>
        </select>
    </div>
    <div className="input-group">
        <label htmlFor="role">Select month</label>
        <select name="" id="">
          <option value="">Admin</option>
          <option value="">Student</option>
          <option value="">Parent</option>
          <option value="">Teacher</option>
        </select>
    </div>
    <div className="input-group">
        <label htmlFor="role">Select session</label>
        <select name="" id="">
          <option value="">Admin</option>
          <option value="">Student</option>
          <option value="">Parent</option>
          <option value="">Teacher</option>
        </select>
    </div>
      </div>
    <button id='yellow'>Save</button>
    <button id="blue">Reset</button>
   </form>
    </div>
  )
}

export default attendenceform
