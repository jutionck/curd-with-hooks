import React, {Component} from 'react';
import LoginForm from "./LoginForm";
import Swal from 'sweetalert2'

class LoginContainer extends Component {
    constructor(pros) {
        super(pros);
        this.state = {
            auth : {
                username: "admin",
                password: "admin"
            }
        }
    }

    handleChangeInput = (event, field) => {
        let { auth } = this.state;
        auth[field] = event.target.value;
        this.setState({ auth });
        console.log(this.state.auth);
    }

    // belum api
    loginProses = (event) => {
        event.preventDefault();
        if(this.state.auth.username === 'admin' && this.state.auth.password === 'admin') {
            Swal.fire(
                'Good job!',
                'Login Success!',
                'success'
            ).then(r => {
                sessionStorage.setItem("auth-token", "12345");
                this.props.onLogin();
                this.clearFormLogin();
            })
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Incorret Username or Password',
                icon: 'error',
                confirmButtonText: 'Ok'
            }).then(r => {
                this.clearFormLogin();
            })
        }
    }

    clearFormLogin = () => {
        this.setState({ ...this.state, auth: { username: "", password: "" } });
    };

    render() {
        return (
            <>
                <LoginForm
                    auth={this.state.auth}
                    handleChangeInput={this.handleChangeInput}
                    loginProses={this.loginProses}
                />

            </>
        );
    }
}

export default LoginContainer;