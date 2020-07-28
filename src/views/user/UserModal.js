import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const UserModal = (props) => {
    const {
        handleChange,
        showDetails,
        hideDetails,
        selectedUser,
        updateUser,
        edited
    } = props;

    return (
        <Modal show={showDetails}>
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    {edited ? "Input Room" : "Edit User"}
                </Modal.Title>
            </Modal.Header>
            <form method="post" onSubmit={(event) => updateUser(event)}>
            <Modal.Body>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            name="username"
                            type="text"
                            onChange={(event) => {
                                handleChange(event, "username");
                            }}
                            value={selectedUser["username"]}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="firstName">Firstname</label>
                        <input
                            name="firstName"
                            type="text"
                            onChange={(event) => {
                                handleChange(event, "firstName");
                            }}
                            value={selectedUser["firstName"]}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Lastname</label>
                        <input
                            name="lastName"
                            type="text"
                            onChange={(event) => {
                                handleChange(event, "lastName");
                            }}
                            value={selectedUser["lastName"]}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            name="password"
                            type="password"
                            onChange={(event) => {
                                handleChange(event, "password");
                            }}
                            value={selectedUser["password"]}
                            required
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        className="float-right"
                        variant="primary"
                        type="submit"
                    >
                        UPDATE
                    </Button>
                    <Button
                        onClick={() => {
                            hideDetails();
                        }}
                    >
                        Cancel
                    </Button>
                </Modal.Footer>
            </form>
        </Modal>
    );
};

export default UserModal;
