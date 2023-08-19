import React, { useState } from 'react';
import { Link } from "react-router-dom";
const Login = () => {

  const [login, setlogin] = useState({
    email: '',
    password: ''
  })

  const loginForm = () => {
    console.warn(login)
    fetch("http://localhost:3000/login?q=" + login.email).then((data) => {
      data.json().then((res) => {
        if (res.length > 0) {
          console.warn("Response====", res)

        } else {
          alert("Please enter correct username and password")
        }
      })
    })
  }
  // render() {
  return (
    <div>
      <header className="App-header d-flex justify-content-between bg-primary text-white align-items-center px-4 py-2">
        <h1 className='mb-0'>Ntech</h1>
        <ul className="list-unstyled d-flex mb-0">
          <li className="mx-3">About Me</li>
          <li className="mx-3">Contact Us</li>
          <li className="mx-3">Explore</li>
        </ul>
      </header>
      <form className='p-3 w-25 border rounded mx-auto my-5'>
        <h3>Login</h3>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" onChange={(event) => {
            setlogin(login => ({
              ...login,
              email: event.target.value
            }))
          }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input onChange={(event) => {
            setlogin(login => ({
              ...login,
              password: event.target.value
            }))
          }} type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        {/* <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">Check me out</label>
        </div> */}
        <Link to={"layout"} onClick={() => { loginForm() }} className='btn btn-primary'>Submit</Link>
      </form>
    </div>
  )
}
// }
export default Login;
