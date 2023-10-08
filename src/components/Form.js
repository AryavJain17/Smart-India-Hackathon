import React from 'react'

const Form = () => {
  return (
    <div>
      <form className="row g-3">
      <h1 className="text-center">Get in touch with us!</h1>

  <div className="col-md-6">
    <input type="email" className="form-control" id="inputEmail4" placeholder='First Name'/>
  </div>
  <div className="col-md-6">
    <input type="password" className="form-control" id="inputPassword4" placeholder='Last Name'/>
  </div>
  <div className="col-12">
    <input type="text" className="form-control" id="inputAddress" placeholder="Email"/>
  </div>
  <div className="col-12">
    <select id="inputState" className="form-select" >
    <option disabled selected>Type of Query</option>
      <option>Doubt</option>
      <option>Report a Course</option>
      <option>Facing Issues</option>
      <option>Others..</option>
    </select>
  </div>

  <div className="col-12">
    <input type="text" className="form-control" id="inputAddress" placeholder="Phone Number"/>
  </div>
  
  <div className="col-12">
    <textarea name='message' cols={20}rows={7} placeholder='Your Message Here...'></textarea>
  </div>

  <div className="col-12">
    <button type="submit" className="btn btn-primary">SUBMIT</button>
  </div>
</form>
    </div>
  )
}

export default Form
