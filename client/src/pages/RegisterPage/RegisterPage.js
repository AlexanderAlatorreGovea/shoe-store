import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

import { register } from '../../redux/auth/auth-actions';
import { clearErrors } from '../../redux/errors/error-actions';
import { showAlert, hideAlert } from '../../redux/utils/alerts'; 

import './RegisterPage.scss';

class RegisterPage extends Component {
    state = {
        email: '',
        password: '',
        passwordConfirm: '',
        name: '',
        msg: null
    };

    redirect = () => {
        const { error, isAuthenticated, history } = this.props;

        if (isAuthenticated) 
            return  history.push('/login');
    }

    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;

        if (isAuthenticated) {
            this.redirect();
        }
    }

    onChange = e => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    };

    onSubmit = async e => {
        e.preventDefault();
    
        const { email, password, passwordConfirm, name } = this.state;

        if (password !== passwordConfirm) {
            showAlert('error', 'Error: The passwords do not match');
            window.setTimeout(() => {
                window.location.reload();
            }, 1700);
        }

        const newUser = {
          email,
          password, 
          passwordConfirm,
          name
        };
        
        this.props.register(newUser);
    };

    componentWillMount() {
        hideAlert();
    }

    render() {
        return ( 
            <section className="content-area login_register-page">
                <div className="container">
                    <div className="box-container">
                        <h2 className="animated fadeInUp" style={{ color: '#484c4f' }} >Register</h2>
                        <div className="login-grid register" />
                        <form onSubmit={this.onSubmit}>
                                <input 
                                    type="email" 
                                    name="email"  
                                    placeholder="Email"
                                    onChange={this.onChange} 
                                    minlength='8'> 
                                </input>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%' }}>
                                    <input
                                        style={{ marginBottom: '10px' }}
                                        className="input"
                                        type="name"
                                        name="name"
                                        placeholder="name"
                                        onChange={this.onChange}
                                        minlength='8'>
                                    </input> 
                                    <input 
                                        className="input"
                                        type="password" 
                                        name="password" 
                                        placeholder="Password"
                                        onChange={this.onChange} 
                                        minlength='8'>
                                    </input>
                                    <input
                                        type="password" name="passwordConfirm"
                                        placeholder="Confirm Password"
                                        onChange={this.onChange}
                                        minlength='8'>
                                    </input>                   
                                </div>
                            <button 
                                id="register-button"
                                style={{ boxShadow: '0 1px 6px 0 rgba(32, 33, 36, .28)', borderRadius: '6px' }} 
                                type="submit"
                            >
                                Register
                            </button>
                        </form>
                        <div className="line"></div>
                        
                        <div className="footer">
                            already have an account? <Link  to="/login">Login</Link >
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default withRouter((connect(mapStateToProps, { register, clearErrors })(RegisterPage)));