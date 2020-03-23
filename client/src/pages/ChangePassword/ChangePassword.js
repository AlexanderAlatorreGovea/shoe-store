import React, { Component } from 'react';
import axios from "axios";
import { showAlert, hideAlert } from '../../redux/utils/alerts'; 

import './ChangePassword.scss';

export default class ChangePassword extends Component {
    state = {
        passwordConfirm: '',
        password: '',
        msg: null
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }; 

    onSubmit = e => {
        e.preventDefault();

        const URL = `/api/v1/auth/resetPassword/${this.props.match.params.id}`

        const { password, passwordConfirm } = this.state;

        if (password !== passwordConfirm) {
            showAlert('error', 'Error: The passwords do not match');
            return;
        } else {
            axios.patch(URL, {
            'password': password,
            'passwordConfirm': passwordConfirm,
            })
            .then(res => {
                if (res.status === 200) {
                    showAlert('success', 'Your password had been updated');
                }
            }) 
            .catch(error => {
                showAlert('error', 'Something went wrong, please try again');
            });
        }
    };

    render() {
        return (
            <section className="content-area account-page" id="password-reset">
                <div className="container">
                    <div className="box-container">
                        <h1>Password Reset</h1>
                        <p>Enter your FreshGear new password and it will automatically be updated. If you have any issues, feel free to contact us.</p>
                        <hr />
                        <div className="checkout-grid">
                            <div className="forms">
                                <form action="" method="POST">
                                    <div className="form-group">
                                        <label for="currentPassword">Current Password</label>
                                        <input 
                                            type="password" 
                                            name="password" 
                                            id="currentPassword" 
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label for="newPassword">New Password</label>
                                        <input 
                                            type="password"
                                            name="passwordConfirm" 
                                            id="newPassword"
                                            onChange={this.onChange}
                                        >
                                        </input>
                                    </div>
                                    <div className="form-group">
                                        <button 
                                            type="submit"
                                            onClick={this.onSubmit}
                                        >
                                            Reset Password
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}





