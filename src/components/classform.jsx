import React from 'react'
import "./classform.css";
const classform = () => {
  return (
    <div className="form-container">
    <form action="">
<div className="form-header">
<p> <a href="#">Home</a>  &gt; <a href="#">class</a> &gt; <a href="#">create class</a> </p>
</div>
<h1>Add New Class</h1>
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
 <label htmlFor="role">class code</label>
    <input type="text" />
</div>
<div className="input-group">
 <label htmlFor="role">Teacher name</label>
    <input type="text" />
</div>

<div className="input-group">
 <label htmlFor="role">Select subject</label>
 <select name="" id="">
   <option value="">Admin</option>
   <option value="">Student</option>
   <option value="">Parent</option>
   <option value="">Teacher</option>
 </select>
</div>

<div className="input-group">
 <label htmlFor="role">Section</label>
 <select name="" id="">
   <option value="">Admin</option>
   <option value="">Student</option>
   <option value="">Parent</option>
   <option value="">Teacher</option>
 </select>
</div>

<div className="input-group">
 <label htmlFor="role">Date</label>
 <input type="date" name="" id="" />
</div>

<div className="input-group">
 <label htmlFor="role">Time</label>
<input type="time" name="" id="" />
</div>



</div>
<button id='yellow'>Save</button>
<button id="blue">Reset</button>
</form>
</div>
  )
}

export default classform
