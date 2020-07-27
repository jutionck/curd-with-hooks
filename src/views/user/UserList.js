import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit,faTrash} from "@fortawesome/free-solid-svg-icons";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import UserAddForm from "./UserAddForm";
import Swal from "sweetalert2";
import {deleteServiceUser} from "../../services/userService";

const UserList = (props) => {
    const removeUser = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                deleteServiceUser(id).then(response => {
                    console.log(response)
                    window.location.reload(false)
                })
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }

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
                        className="btn btn-sm btn-circle btn-danger"
                        onClick={() => removeUser(user.userID)}
                    >
                        <FontAwesomeIcon icon={faTrash} />
                    </Button>
                </td>
            </tr>
        );
    });

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
                            <UserAddForm/>
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