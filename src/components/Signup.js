import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const Signup = () => {

  const [Credentials, setCredentials] = useState({ name:"", email: "", password: "", cpassword:"" });
  let Navigate= useNavigate();
  const handleSubmit=async (e)=>
  {
      e.preventDefault();
      const host = "http://localhost:5000";
      const response = await fetch(`${host}/api/auth/createUser`, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json',
          },
          body:JSON.stringify({name: Credentials.name, email:Credentials.email, password:Credentials.password, cpassword: Credentials.cpassword})
      });
      const json = await response.json();
      console.log(json);
      if(json.success){
        await swal({title:'User registered Successfully',icon:'success',text:"Now Redirecting you to the login page....."});
        Navigate('/login');
      }else{
        await swal({title: 'User Already Exist with this email id', icon:'error',text:"Please Try Again with the another User email id"});
      }



  }

  const onChange = (e) => {
    setCredentials({ ...Credentials, [e.target.name]: e.target.value }); // spread operator is used for maintaing the existing note property and change of the new note is made in the original note.
  }

  let navigate= useNavigate();


  return (
    <div className='container my-3'>
      <h2 className='mt-3' >Create An Account to use iNoteBook</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="Name" className="form-label">Name</label>
          <input type="text" className="form-control" name="name" id="Name" aria-describedby="emailHelp" onChange={onChange} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" name='password'  className="form-control" id="password" onChange={onChange} minLength={5} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">Confirm Password</label>
          <input type="password" name='cpassword' className="form-control" id="cpassword" minLength={5} required/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Signup