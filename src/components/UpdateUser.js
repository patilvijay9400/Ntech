import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const UpdateUser = () => {
    // render() {
    // console.info(this.props);
    const location = useLocation();

    const [user, setUser] = useState(
        {
            name: "",
            email: "",
            companyName: "",
            position: "",
        })
    // console.log(location.state)

    useEffect(() => {
        fetch("http://localhost:3000/users/" + location.state.id).then((response) => {
            response.json().then((result) => {
                console.warn(result)
                // this.setState({ users: result })
                setUser(result)
            })
        })

    }, [])

    const updateUser = () => {
        fetch("http://localhost:3000/users/" + location.state.id, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then((result) => {
            result.json().then((res) => {
                alert("User Updated successfully!")
            })
        })

    }

    return (
        <> <div className="row border p-3">
            <h4>Upadte User</h4>
            <div className="col-6 mb-2">
                <label className="form-label">Name</label>
                <input value={user.name} onChange={(event) => {
                    setUser(user => ({
                        ...user,
                        name: event.target.value
                    }))
                }} type="text" className="form-control" placeholder="Name" aria-label="First name" />
                {/* <input onChange={(event) => {  this.setState({ name: event.target.value }) }} type="text" className="form-control" placeholder="Name" aria-label="First name" /> */}
            </div>
            <div className="col-6 mb-2">
                <label className="form-label">Email</label>
                <input value={user.email} onChange={(event) => {
                    setUser(user => ({
                        ...user,
                        email: event.target.value
                    }))
                }} type="email" className="form-control" placeholder="Email" aria-label="Last name" />
                {/* <input onChange={(event) => { this.setState({ email: event.target.value }) }} type="email" className="form-control" placeholder="Email" aria-label="Last name" /> */}
            </div>
            <div className="col-6 mb-2">
                <label className="form-label">Company Name</label>
                <input value={user.companyName} onChange={(event) => {
                    setUser(user => ({
                        ...user,
                        companyName: event.target.value
                    }))
                }} type="text" className="form-control" placeholder="Company Name" aria-label="First name" />
                {/* <input onChange={(event) => { this.setState({ companyName: event.target.value }) }} type="text" className="form-control" placeholder="Company Name" aria-label="First name" /> */}
            </div>
            <div className="col-6 mb-2">
                <label className="form-label">Position</label>
                <input value={user.position} onChange={(event) => {
                    setUser(user => ({
                        ...user,
                        position: event.target.value
                    }))
                }} type="text" className="form-control" placeholder="Position" aria-label="Last name" />
                {/* <input onChange={(event) => { this.setState({ position: event.target.value }) }} type="text" className="form-control" placeholder="Position" aria-label="Last name" /> */}
            </div>
            <div className="col-12">
                <button onClick={() => { updateUser() }} type="submit" className="btn btn-primary">Sign in</button>
            </div>
        </div>
        </>
    )
}
// }
export default UpdateUser
