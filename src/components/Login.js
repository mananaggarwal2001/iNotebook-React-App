import React ,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import swal from 'sweetalert';
const Login = () => {
    const [Credentials, setCredentials] = useState({email:"", password:""});

    const onChange = (e) => {
        setCredentials({ ...Credentials, [e.target.name]: e.target.value }); // spread operator is used for maintaing the existing note property and change of the new note is made in the original note.
    }
    let navigate= useNavigate();
    const handleSubmit=async (e)=>
    {

        e.preventDefault();
        const host = "http://localhost:5000";
        const response = await fetch(`${host}/api/auth/loginUser`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
              'Content-Type': 'application/json',
            },
            body:JSON.stringify({email:Credentials.email, password:Credentials.password})
        });
        const json = await response.json();
        console.log(json);
        if(json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            navigate('/');
        }else{
            await swal({title:"Invalid Credentials", text:"Either you typed the wrong Email-Id or  Wrong Password", icon:"error"});
            navigate('/login');
        }


    }



    return (
        <div className='container  my-3'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="Email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={Credentials.email} onChange={onChange} name='email' id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name='password' value={Credentials.password} onChange={onChange} className="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit"  className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login