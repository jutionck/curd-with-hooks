import React from 'react';
import Button from "react-bootstrap/Button";

const UserAddForm = (props) => {

    return (
        <>
            <form method="post" onSubmit={(event) => props.saveUser(event)}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        name="username"
                        type="text"
                        value={props.users.username}
                        onChange={props.handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">Firstname</label>
                    <input
                        name="firstName"
                        type="text"
                        value={props.users.firstName}
                        onChange={props.handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Lastname</label>
                    <input
                        name="lastName"
                        type="text"
                        value={props.users.lastName}
                        onChange={props.handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        name="password"
                        type="password"
                        value={props.users.password}
                        onChange={props.handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password"></label>
                    <Button
                        className="float-right"
                        variant="primary"
                        type="submit"
                    >
                        Submit
                    </Button>
                </div>
            </form>
        </>
    )
}

export default UserAddForm;