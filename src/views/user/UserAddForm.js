import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class UserAddForm extends Component {
    render() {

        let {username, firstName, lastName, password, handleChangeInput, onSubmit } = this.props

        return (
            <>
                <form method="post" onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            name="username"
                            onChange={handleChangeInput}
                            value={username}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="firstName">Firstname</label>
                        <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            name="firstName"
                            onChange={handleChangeInput}
                            value={firstName}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Lastname</label>
                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            name="lastName"
                            onChange={handleChangeInput}
                            value={lastName}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="text"
                            className="form-control"
                            id="password"
                            name="password"
                            onChange={handleChangeInput}
                            value={password}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username"></label>
                        <button type="submit" className="btn btn-primary">SAVE</button>
                    </div>
                </form>
            </>
        );
    }
}

export default UserAddForm;