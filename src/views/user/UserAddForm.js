import React, {useEffect, useState} from 'react';
import Button from "react-bootstrap/Button";
import {createServiceUser, getServiceUsers} from "../../services/userService";
import Swal from "sweetalert2";

const UserAddForm = (props) => {

    const initialUserState = {
        userID:"",
        username: "",
        firstName: "",
        lastName: "",
        password: "",
    };

    const [users, getUsers] = useState([]);

    useEffect(() => {
        loadData();
    }, []);


    const loadData = () => {
        getServiceUsers().then(res => {
            getUsers(res.data.data);
            console.log(res.data.data);
        })
    }


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
                    setUser({
                        username: response.data.data.username,
                        firstName: response.data.data.firstName,
                        lastName: response.data.data.lastName,
                        password: response.data.data.password
                    });
                    window.location.reload(false)
                })
            })
            .catch(e => {
                console.log(e);
            });
    };



    return (
        <>
            <form method="post" onSubmit={(event) => saveUser(event)}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        name="username"
                        type="text"
                        value={user.username}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">Firstname</label>
                    <input
                        name="firstName"
                        type="text"
                        value={user.firstName}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Lastname</label>
                    <input
                        name="lastName"
                        type="text"
                        value={user.lastName}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        name="password"
                        type="text"
                        value={user.password}
                        onChange={handleInputChange}
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