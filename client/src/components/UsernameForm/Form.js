import React from "react";
// import "./Form.css";

const Form = ({ inputHandler, submitHandler }) => (
  <div className="form-wrap">
    <form className="form-group card" onSubmit={submitHandler}>

      <input id="inputDefault" type="text" name="username" className="form-control btn-outline-secondary" onChange={inputHandler} required />
      <span className="input-underline"></span>
      <label htmlFor="username" className="text-primary">Username</label>
 
      <br/>
      <input id="in
      putDefault" type="password" name="password" className="form-control btn-outline-secondary" onChange={inputHandler} required />
      <span className="input-underline"></span>
      <label htmlFor="password" className="text-primary">Password</label>

      <br/>

      <div className="button-holder">
        <button className="btn btn-outline-primary center-btn">SUBMIT</button>
      </div>
    </form>
  </div>
);

export default Form;