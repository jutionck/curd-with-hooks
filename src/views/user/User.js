import React, { useState, useEffect } from "react";
import {
    createServiceUser,
    deleteServiceUser,
    getServiceUsers,
    updateServiceUser
} from "../../services/userService";
import Swal from 'sweetalert2'
import UserList from "./UserList";
import UserModal from "./UserModal";

const User = () =>  {
    const initialUserState = {
        selectedUser: {
            userID:""
        },
    };

    const [users, getUsers] = useState([]);
    const [user, setUser] = useState(initialUserState);
    const [show, setShowDetails] = useState(false);
    const [edited, setEdited] = useState(true);

    useEffect(() => {
        loadData();
    }, []);


    const loadData = () => {
        getServiceUsers().then(res => {
            getUsers(res.data.data);
            console.log(res.data.data);
        })
    }

    const showModal = () => {
        setShowDetails(true)
    };


    const hideDetails = () => {
        setShowDetails(true)
    };


    const handleChange = (event, field) => {
        const { name, value } = event.target;
        user[field] = event.target.value;
        setUser({ ...user, [name]: value });
        console.log(user);
    };


    const createUser = (event) => {
        event.preventDefault();
            createServiceUser(user)
                .then((res) => {
                    console.log(res)
                    Swal.fire(
                        'Good job!',
                        'Create User Success!',
                        'success'
                    ).then(r => {
                        hideDetails();
                        loadData()
                    })
                })
                .catch((error) => {
                    console.error(error);
                });
        }

    return (
        <>
            {!showModal ? null : (
                <UserList
                    showModal={showModal}
                    users={users}
                />

            ) }
            {!showModal ? null : (
                <UserModal
                    handleChange={handleChange}
                    selectedUser={user}
                    createUser={createUser}
                    hideDetails={hideDetails}
                />
            )}

        </>
    );

}


export default User