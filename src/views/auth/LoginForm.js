import React, {Component} from 'react';
import logo from '../../logo.svg';
import foodImg from '../../undraw_breakfast_psiw.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import {Link} from "react-router-dom";

class LoginForm extends Component {
    render() {
        let {auth, handleChangeInput, loginProses} = this.props
        return (
            <>
                <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
                    <div className="card card0 border-0">
                        <div className="row d-flex">
                            <div className="col-lg-6">
                                <div className="card1 pb-5">
                                    <div className="row">
                                        <img src={logo} className="App-logo logo" alt="logo" />
                                    </div>
                                    <div className="row px-3 justify-content-center mt-4 mb-5 border-line">
                                        <img src={foodImg} className="image" alt="logo" width={"250px"}/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card2 card border-0 px-4 py-5">
                                    <div className="row mb-4 px-3 mb-5">
                                        <h6 className="mb-0 mr-4 mt-2">Sign in with your account</h6>
                                    </div>
                                    <form
                                        method="post"
                                        onSubmit={(event) => {
                                            loginProses(event);
                                        }}
                                    >
                                        <div className="row px-3">
                                            <label className="mb-1">
                                                <h6 className="mb-0 text-sm">Username/Email Address</h6>
                                            </label>
                                            <input
                                                className="mb-4"
                                                type="text"
                                                name="username"
                                                onChange={(event) => {
                                                    handleChangeInput(event, "username");
                                                }}
                                                value={auth["username"]}
                                                required
                                                placeholder="Enter a valid username or email address"
                                            />
                                        </div>
                                        <div className="row px-3">
                                            <label className="mb-1">
                                                <h6 className="mb-0 text-sm">Password</h6>
                                            </label>
                                            <input
                                                type="password"
                                                name="password"
                                                onChange={(event) => {
                                                    handleChangeInput(event, "password");
                                                }}
                                                value={auth["password"]}
                                                placeholder="Enter password"
                                                required
                                            />
                                        </div>
                                        <div className="row px-3 mb-4">
                                            <div className="custom-control custom-checkbox custom-control-inline">
                                                <input
                                                    id="chk1"
                                                    type="checkbox"
                                                    name="chk"
                                                    className="custom-control-input"
                                                />
                                                <label htmlFor="chk1" className="custom-control-label text-sm">
                                                    Remember me
                                                </label>
                                            </div>
                                            {/*<a href="#" className="ml-auto mb-0 text-sm">Forgot Password?</a>*/}
                                        </div>
                                        <div className="row mb-3 px-3">
                                            <button type="submit" className="btn btn-blue text-center">
                                                Login
                                            </button>
                                        </div>
                                        <div className="row mb-4 px-3">
                                            <small className="font-weight-bold">
                                                Don't have an account?
                                                <Link to="" >Register</Link>
                                            </small>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="bg-blue py-4">
                            <div className="row px-3">
                                <small className="ml-4 ml-sm-5 mb-2">Copyright &copy; 2020. All rights reserved.</small>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

export default LoginForm;