import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Users = () => {

    const [users, setUsers] = useState(null)
    const [searchData, setsearchData] = useState(users)

    const fetchUser = () => {
        fetch("http://localhost:3000/users").then((response) => {
            response.json().then((result) => {
                console.warn(result)
                // this.setState({ users: result })
                setUsers(result)
            })
        })

    }

    const navigate = useNavigate();
    useEffect(() => {
        fetchUser()

    }, [])


    const deleteUser = (id) => {
        fetch("http://localhost:3000/users/" + id, {
            method: "DELETE",
        }).then((result) => {
            result.json().then((res) => {
                alert("User Deleted successfully!")
                fetchUser()

            })
        })

    }

    const search = (key) => {
        console.warn(key)
        fetch("http://localhost:3000/users?q="+key).then((data)=>{
            data.json().then((res)=>{
                console.warn("Response====", res)
                setsearchData({searchData:res})
            })
        })
    } 

    // render() {
    return (
        <>
            <div className='d-flex justify-content-between mb-2'>
                <h4>Users</h4>

                <div className='d-flex'>
                    <input type="text" onChange={(event)=> search(event.target.value)} className='border rounded-3 px-2' placeholder='search here...' />
                    <Link to="../create">
                        <button type="button" className="btn btn-primary ms-2">Add User</button>
                    </Link>
                </div>

            </div>
            <div>
                {
                    users ?
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
                                {users.map((data) =>
                                    <tbody>
                                        <tr>
                                            <td>{data.id}</td>
                                            <td>{data.name}</td>
                                            <td>{data.email}</td>
                                            <td>{data.companyName}</td>
                                            <td>{data.position}</td>
                                            <td>
                                                {/* <Link to={"../update/" + data.id}> */}
                                                <button onClick={() => navigate("../update", { state: { id: data.id } })} className='border-0 bg-white'><i class="fas fa-pencil"></i></button>
                                                {/* </Link> */}
                                                <button onClick={() => { deleteUser(data.id) }} className='border-0 bg-white'><i class="fad fa-trash-alt ms-3"></i></button>
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


export default Users;
