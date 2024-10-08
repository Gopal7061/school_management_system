import React from 'react'
import "./teacherform.css"
const teacherform = () => {
  return (
    <div className="form-container">
    <form action="">
<div className="form-header">
<p> <a href="#">Home</a>  &gt; <a href="#">Teacher</a> &gt; <a href="#">Create Teacher</a> </p>
</div>
<h1>Add New Teacher</h1>
<div className="input-container">

<div className="input-group">
 <label htmlFor="role">Full name</label>
 <input type="text" />
</div>

<div className="input-group">
 <label htmlFor="role">Last name</label>
 <input type="text" />
</div>

<div className="input-group">
 <label htmlFor="role">Gender</label>
 <select name="" id="">
   <option value="">Admin</option>
   <option value="">Student</option>
   <option value="">Parent</option>
   <option value="">Teacher</option>
 </select>
</div>

<div className="input-group">
 <label htmlFor="role">Occupation</label>
 <input type="text" />
</div>

<div className="input-group">
 <label htmlFor="role">Id No.</label>
 <input type="text" />
</div>

<div className="input-group">
 <label htmlFor="role">Blood group</label>
 <select name="" id="">
   <option value="">Admin</option>
   <option value="">Student</option>
   <option value="">Parent</option>
   <option value="">Teacher</option>
 </select>
</div>

<div className="input-group">
 <label htmlFor="role">Religion</label>
 <select name="" id="">
   <option value="">Admin</option>
   <option value="">Student</option>
   <option value="">Parent</option>
   <option value="">Teacher</option>
 </select>
</div>


<div className="input-group">
 <label htmlFor="role">Email</label>
 <input type="email" name="" id="" />
</div>

<div className="input-group">
 <label htmlFor="role">Address</label>
<input type="text" name="" id="" />
</div>

<div className="input-group">
 <label htmlFor="role">phone</label>
<input type="phone" name="" id="" />
</div>

<div className="input-group">
 <label htmlFor="role">short Bio</label>
<textarea name="" id=""></textarea>
</div>

</div>
<button id='yellow'>Save</button>
<button id="blue">Reset</button>
</form>
</div>
  )
}

export default teacherform
