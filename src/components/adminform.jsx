import React from 'react';
import "./adminform.css";

const adminform = () => {
  return (
    <div className="form-container">
           <form action="">
    <div className="form-header">
      <p> <a href="#">Home</a>  &gt; <a href="#">User</a> &gt; <a href="#"> Admin</a> </p>
    </div>
    <h1>ADD ADMIN</h1>
      <div className="input-container">
      <div className="input-group">
        <label htmlFor="username">User-name*</label>
        <input type="text" required/>
    </div>
    <div className="input-group">
        <label htmlFor="firstname">Firstname*</label>
        <input type="text" required />
    </div>
    <div className="input-group">
        <label htmlFor="lastrname">Lastname*</label>
        <input type="text" required/>
    </div>
    <div className="input-group">
        <label htmlFor="mobile">Mobile number*</label>
        <input type="phone" required/>
    </div>
    <div className="input-group">
        <label htmlFor="email">Email*</label>
        <input type="email" required/>
    </div>
    <div className="input-group">
        <label htmlFor="password">Password*</label>
        <input type="text" required/>
    </div>
    <div className="input-group">
        <label htmlFor="role">Role*</label>
        <select name="" id="">
          <option value="">Admin</option>
          <option value="">Student</option>
          <option value="">Parent</option>
          <option value="">Teacher</option>
        </select>
    </div>
      </div>

    <button>Add </button>
   </form>
    </div>

  )
}

export default adminform
