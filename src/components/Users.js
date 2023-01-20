import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Users extends Component {

    constructor() {
        super();
        this.state = {
            users: null
        }
    }

    componentDidMount() {
        fetch("http://localhost:3000/users").then((response) => {
            response.json().then((result) => {
                console.warn(result)
                this.setState({ users: result })
            })
        })
    }
    render() {
        return (
            <>
                <div className='d-flex justify-content-between mb-2'>
                    <h4>Users</h4>
                    <Link to="../create">
                        <button type="button" className="btn btn-primary">Add User</button>
                    </Link>

                </div>
                <div>
                    {
                        this.state.users ?
                            <div>
                                <table className="table border">
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>Eamil</th>
                                            <th>Company Name</th>
                                            <th>position</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    {this.state.users.map((data) =>
                                        <tbody>
                                            <tr>
                                                <td>{data.id}</td>
                                                <td>{data.name}</td>
                                                <td>{data.email}</td>
                                                <td>{data.companyName}</td>
                                                <td>{data.position}</td>
                                                <td>
                                                    <Link to={"../update/"+ data.id}>
                                                        <button className='border-0 bg-white'><i class="fas fa-pencil"></i></button>
                                                    </Link>
                                                    <button className='border-0 bg-white'><i class="fad fa-trash-alt ms-3"></i></button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    )}
                                </table>
                            </div>
                            : <p>...loading</p>
                    }
                </div>
            </>
        )
    }
}

