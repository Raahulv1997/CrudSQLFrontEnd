import React from 'react'
import   {NavLink} from 'react-router-dom'
const AddUser = () => {
  return (
    <>
         <div className="container">
        <NavLink to='/' className={'btn btn-success mt-3'}> Back to Home</NavLink>
        <h1 className='bg-light text-center mt-4 py-3'>Add Employee</h1>
       
      
           
            <div className="row">
              <div className="mb-3 col-lg-6 col-md-6 col-12 ">
                <label for="exampleInputPassword1" className="form-label">Name</label>
                <input type="text" name='name' className="form-control" id="exampleInputPassword1" />
              </div>
              <div className="mb-3 col-lg-6 col-md-6 col-12">

                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email"  name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
             
          
              <div className="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputPassword1" class="form-label">Age</label>
                <input type="text" className="form-control" name='age' id="exampleInputPassword1" />
              </div>
              <div className="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputPassword1" class="form-label">Mobile</label>
                <input type="number" class="form-control"  name='mobile' id="exampleInputPassword1" />
              </div>
              <div className="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputPassword1" class="form-label">Work</label>
                <input type="text" className="form-control" name='work' id="exampleInputPassword1" />
              </div>
              <div className="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputPassword1" class="form-label">Address</label>
                <input type="text" class="form-control" name='address' id="exampleInputPassword1" />
              </div>
              <div className="mb-3 col-lg-12 col-md-12 col-12">
                <label for="exampleInputPassword1" class="form-label">Description</label>
                <textarea className='form-control' name='description' cols={'30'} rows={'5'}> </textarea>
              </div>
           
              </div>
              <button type="submit"  className="btn btn-primary text-center">Submit</button>
           
         

      


      </div>

    </>
  )
}

export default AddUser

