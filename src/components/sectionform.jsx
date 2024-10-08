import React from 'react'
import "./sectionform.css";
const sectionform = () => {
  return (
    <div className="form-container">
    <form action="">
<div className="form-header">
<p> <a href="#">Home</a>  &gt; <a href="#">Batch</a> &gt; <a href="#">Section</a> </p>
</div>
<h1>Section Management</h1>
<div className="input-container">
    <div className="input-container1">
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
 <label htmlFor="role">section code</label>
<input type="text" />
</div>
<div className="input-group">
 <label htmlFor="role">Select classteacher</label>
 <select name="" id="">
   <option value="">Admin</option>
   <option value="">Student</option>
   <option value="">Parent</option>
   <option value="">Teacher</option>
 </select>
</div>
    </div>


    <div className="input-container2">
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
 <label htmlFor="role">section code</label>
<input type="text" />
</div>
<div className="input-group">
 <label htmlFor="role">Select classteacher</label>
 <select name="" id="">
   <option value="">Admin</option>
   <option value="">Student</option>
   <option value="">Parent</option>
   <option value="">Teacher</option>
 </select>
</div>
    </div>
</div>
<button id='yellow'>Save</button>
<button id="blue">Reset</button>
</form>
</div>
  )
}

export default sectionform
