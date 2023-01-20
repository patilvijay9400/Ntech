import React, { Component } from 'react'

export default class CreateUser extends Component {

    constructor() {
        super();
        this.state = {
            name: null,
            email: null,
            companyName: null,
            position: null
        }
    }

    createUser() {
        fetch("http://localhost:3000/users", {
            method: "Post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((res) => {
                alert("User created successfully!")
            })
        })

    }

    render() {
        return (
            <>
                <div className="row border p-3">
                    <h4>Create New User</h4>
                    <div className="col-6 mb-2">
                        <label className="form-label">Name</label>
                        <input onChange={(event) => { this.setState({ name: event.target.value }) }} type="text" className="form-control" placeholder="Name" aria-label="First name" />
                    </div>
                    <div className="col-6 mb-2">
                        <label className="form-label">Email</label>
                        <input onChange={(event) => { this.setState({ email: event.target.value }) }} type="email" className="form-control" placeholder="Email" aria-label="Last name" />
                    </div>
                    <div className="col-6 mb-2">
                        <label className="form-label">Company Name</label>
                        <input onChange={(event) => { this.setState({ companyName: event.target.value }) }} type="text" className="form-control" placeholder="Company Name" aria-label="First name" />
                    </div>
                    <div className="col-6 mb-2">
                        <label className="form-label">Position</label>
                        <input onChange={(event) => { this.setState({ position: event.target.value }) }} type="text" className="form-control" placeholder="Position" aria-label="Last name" />
                    </div>
                    <div className="col-12">
                        <button onClick={() => { this.createUser() }} type="submit" className="btn btn-primary">Sign in</button>
                    </div>
                </div>
            </>
        )
    }
}
