import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

class UserList extends Component {
    render() {
        const { users, showDetails, showModal, isLoading, removeUser} = this.props;

        if(isLoading) {
            return <div className="d-flex justify-content-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        }

        let user = users.map((user, index) => {
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
                            onClick={(event) => {
                                showDetails(user);
                            }}
                        >
                            <FontAwesomeIcon icon={faEdit} />
                        </Button>
                        &nbsp;
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
                    <div className="card-body">
                        <div className="list row">
                            <div className="col-md-8">
                                <div className="input-group mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search by title"
                                    />
                                    <div className="input-group-append">
                                        <button
                                            className="btn btn-outline-secondary"
                                            type="button"
                                        >
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">User Lists</h6>
                    </div>
                    <div className="card-body">
                        <Button
                            className="btn btn-primary btn-icon-split mb-3"
                            onClick={showModal}
                        >
                            <span className="text"><FontAwesomeIcon icon={faPlus} /> Add </span>
                        </Button>
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
                                    {}
                                    {user}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default UserList;