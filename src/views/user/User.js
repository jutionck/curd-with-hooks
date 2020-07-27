import React, { useState, useEffect } from "react";
import { getServiceUsers} from "../../services/userService";
import UserList from "./UserList";

const User = () =>  {
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

    return (
        <>
            <UserList
                users={users}
            />

        </>
    );

}


export default User