import React from "react";
import {
    createServiceUser,
    deleteServiceUser,
    getServiceUserById,
    getServiceUsers,
    updateServiceUser
} from "../../services/userService";
import Swal from 'sweetalert2'
import UserList from "./UserList";
import UserModal from "./UserModal";

class User extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users : [],
            showDetails: false,
            selectedUser: {
                userID:""
            },
            edited: true,
            isLoading: true
        }
    }


    loadData = () => {
        getServiceUsers().then(res => {
            this.setState({
                ...this.state, users:res.data.data, isLoading: false
            })
        })
    }

    onSubmit = async () => {
        const form = {
            username: this.state.username,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            password: this.state.password
        }
        createServiceUser(form).then(res => {
            if(res.status === 201) {
                Swal.fire(
                    'Good job!',
                    'Create User Success!',
                    'success'
                ).then(r => {
                    this.setState({
                        username: "",
                        firstName: "",
                        lastName: "",
                        password: ""
                    })
                })
            }
        })
    }

    showModal = () => {
        this.setState({
            ...this.state,
            showDetails: !this.state.showDetails,
            edited: true,
        });
    };

    showDetails = (user) => {
        this.setState({
            ...this.state,
            showDetails: !this.state.showDetails,
            selectedUser: { ...user },
            edited: false,
        });
    };

    hideDetails = () => {
        this.setState({
            ...this.state,
            showDetails: !this.state.showDetails,
            selectedUser: {},
            edited: false,
        });
    };


    handleChange = (event, field) => {
        let { selectedUser } = this.state;
        selectedUser[field] = event.target.value;
        this.setState({ selectedUser });
        console.log(this.state.selectedUser);
    };


    createUser = (event) => {
        event.preventDefault();
        if (this.state.edited === true) {
            createServiceUser(this.state.selectedUser)
                .then((res) => {
                    console.log(res)
                    Swal.fire(
                        'Good job!',
                        'Create User Success!',
                        'success'
                    ).then(r => {
                        this.hideDetails();
                        this.loadData()
                    })
                })
                .catch((error) => {
                    console.error(error);
                });
        } else {
            updateServiceUser(this.state.selectedUser.userID,this.state.selectedUser)
                .then((res) => {
                    console.log(res)
                    Swal.fire(
                        'Good job!',
                        'Update User Success!',
                        'success'
                    ).then(r => {
                        this.hideDetails();
                        this.loadData()
                    })
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };

    componentDidMount() {
        this.loadData()
    }

    onChangeSearchTitle(e) {
        const searchTitle = e.target.value;
        this.setState({
            searchTitle: searchTitle
        });
    }

    searchTitle() {
        getServiceUserById(this.state.searchTitle)
            .then(response => {
                this.setState({
                    users: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    removeUser = (id) => {
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
                deleteServiceUser(id)
                    .then((res) => {
                        this.loadData();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }

    render() {
        return (
            <>

                <UserList
                    showModal={this.showModal}
                    users={this.state.users}
                    showDetails={this.showDetails}
                    isLoading={this.state.isLoading}
                    onChangeSearchTitle={this.onChangeSearchTitle}
                    searchTitle={this.searchTitle}
                    removeUser={this.removeUser}
                />
                <UserModal
                    handleChange={this.handleChange}
                    showDetails={this.state.showDetails}
                    selectedUser={this.state.selectedUser}
                    hideDetails={this.hideDetails}
                    createUser={this.createUser}
                    edited={this.state.edited}
                />
            </>
        );
    }
}


export default User