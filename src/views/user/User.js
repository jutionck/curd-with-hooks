import React, { useState, useEffect } from "react";
import {deleteServiceUser, getServiceUsers, updateServiceUser} from "../../services/userService";
import UserList from "./UserList";
import Swal from "sweetalert2";
import UserModal from "./UserModal";

const User = () =>  {

    const [users, getUsers] = useState([]);
    const [showDetails, setShowDetails] = useState(false);
    const [edited, setEdited] = useState(true);
    const [selectedUser, setSelectedUser] = useState({});

    const loadData = () => {
        getServiceUsers().then(res => {
            getUsers(res.data.data);
            console.log(res.data.data);
        })
    }

    const showModal = () => {
        console.log(users);
        console.log("showmodal");
        setShowDetails(!showDetails);
        setEdited(true);
    };
    const handleShowDetails = (user) => {
        setShowDetails(!showDetails);
        setEdited(false);
        setSelectedUser({ ...user });
    };
    const hideDetails = () => {
        setShowDetails(!showDetails);
        setEdited(true);
        setSelectedUser({});
    };

    const handleChange = (event, field) => {
        const { name, value } = event.target;
        setSelectedUser({ ...selectedUser, [name]: value });
        console.log(selectedUser);
    };

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
                    loadData()
                })
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }

    const updateUser = (event) => {
        event.preventDefault()
        updateServiceUser(selectedUser.userID, selectedUser)
            .then((res) => {
                if (res.data.status === 200) {
                    hideDetails();
                    Swal.fire({
                        title: "Success!",
                        text: "User has been updated",
                        icon: "success",
                        confirmButtonText: "Cool",
                    });
                    // alert("update berhasil");
                    loadData();
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <>
            <UserList
                showModal={showModal}
                users={users}
                removeUser={removeUser}
                handleShowDetails={handleShowDetails}
            />

            {!showDetails ? null : (
                <UserModal
                    handleChange={handleChange}
                    showDetails={showDetails}
                    selectedUser={selectedUser}
                    hideDetails={hideDetails}
                    updateUser={updateUser}
                    edited={edited}
                />
            )}
        </>
    );

}


export default User