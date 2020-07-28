import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit,faTrash} from "@fortawesome/free-solid-svg-icons";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import UserAddForm from "./UserAddForm";
import {createServiceUser, getServiceUsers} from "../../services/userService";
import Swal from "sweetalert2";

const UserList = (props) => {

    let listUser = props.users.map((user, index) => {
        return (
            <tr key={index}>
                <td>{index+1}</td>
                <td>{user.userID}</td>
                <td>{user.username}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.password}</td>
                <td>
                    <Button
                        className="btn btn-sm btn-circle btn-info"
                        onClick={() => {
                            props.handleShowDetails(user);
                        }}
                    >
                        <FontAwesomeIcon icon={faEdit} />
                    </Button>
                    &nbsp;
                    <Button
                        className="btn btn-sm btn-circle btn-danger"
                        onClick={() => props.removeUser(user.userID)}
                    >
                        <FontAwesomeIcon icon={faTrash} />
                    </Button>
                </td>
            </tr>
        );
    });

    const [users, getUsers] = useState([]);

    const loadData = () => {
        getServiceUsers().then(res => {
            getUsers(res.data.data);
            console.log(res.data.data);
        })
    }

    const initialUserState = {
        userID:"",
        username: "",
        firstName: "",
        lastName: "",
        password: "",
    };

    const [user, setUser] = useState(initialUserState);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const saveUser = (event) => {
        event.preventDefault();
        let data = {
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            password: user.password
        };
        createServiceUser(data)
            .then(response => {
                Swal.fire(
                    'Good job!',
                    'Create User Success!',
                    'success'
                ).then(r => {
                    loadData()
                })
            })
            .catch(e => {
                console.log(e);
            });
    };
    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"> <Link to="/home" >Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">User List</li>
                </ol>
            </nav>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Users</h6>
                </div>
                <div className="card-body">
                    <nav>
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab"
                               href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">User List</a>
                            <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab"
                               href="#nav-profile" role="tab" aria-controls="nav-profile"
                               aria-selected="false">Add</a>
                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel"
                             aria-labelledby="nav-home-tab">
                            <p></p>
                            <div className="table-responsive">
                                <Table striped bordered hover>
                                    <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>UserID</th>
                                        <th>Username</th>
                                        <th>Firstname</th>
                                        <th>Lastname</th>
                                        <th>Password</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {listUser}
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="nav-profile" role="tabpanel"
                             aria-labelledby="nav-profile-tab">
                            <p></p>
                            <UserAddForm users={users} loadData={loadData} handleInputChange={handleInputChange} saveUser={saveUser}/>
                        </div>
                        <div className="tab-pane fade" id="nav-contact" role="tabpanel"
                             aria-labelledby="nav-contact-tab">...
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserList;