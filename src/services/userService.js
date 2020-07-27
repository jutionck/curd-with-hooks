import axios from 'axios'

const baseUrl = '/user'

const getServiceUsers = async () => {
    let users = await axios.get(baseUrl);
    return  users;
};

const createServiceUser = async (data) => {
    let users = await axios.post(baseUrl, data)
    return users;
};

const updateServiceUser = async (id, data) => {
    let users = await axios.put(`/user/${id}`, data)
    return users;
};

const deleteServiceUser = async (id) => {
    let users = await axios.delete(`/user/${id}`)
    return users;
};




export {getServiceUsers, createServiceUser, updateServiceUser, deleteServiceUser}