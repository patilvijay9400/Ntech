import React, { Component } from 'react';
import { Link } from "react-router-dom";
export class Login extends Component {
  render() {
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
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1"></input>
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <Link to="layout" className='btn btn-primary'>Submit</Link>
        </form>
      </div>
    )
  }
}
export default Login;