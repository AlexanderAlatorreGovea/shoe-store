import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

import { axios } from 'axios';
import { forgotPassword } from '../../redux/auth/auth-actions';
import { clearErrors } from '../../redux/errors/error-actions';
import { showAlert, hideAlert } from '../../redux/utils/alerts'; 

import './PasswordMailer.scss';

class PasswordMailer extends Component {
    state = {
        email: ''
    };

    onChange = e => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    };
 
    onSubmit = async e => {
        e.preventDefault();
    
        const { email } = this.state;

        const resetPassword = {
          email
        };
        
        this.props.forgotPassword(resetPassword);
    };

    render() {
        return ( 
            <section className="content-area login_register-page">
                <div className="container">
                    <div className="box-container">
                        <img alt="Forgot Password" className="banner" src={'https://marketing-image-production.s3.amazonaws.com/uploads/35c763626fdef42b2197c1ef7f6a199115df7ff779f7c2d839bd5c6a8c2a6375e92a28a01737e4d72f42defcac337682878bf6b71a5403d2ff9dd39d431201db.png'} style={{borderWidth: '0px', width: '255px', height: '93px', width: '255', marginLeft: 'auto', marginRight: 'auto', display: 'block' }} />
                        <h2 style={{ paddingTop: '1.1rem', color: '#484c4f' }} className="animated fadeInUp" >Forgot your password?</h2>
                        <h4 style={{ textAlign: 'center', color: 'rgb(161, 168, 173)', fontSize: '15px', textAlign: 'center', backgroundColor: 'rgb(255, 255, 255)'}}>That's okay, it happens! Click on the button below and you will receive an email shortly.</h4>
                        <div className="login-grid register" />
                        <form className="mailer-form" onSubmit={this.onSubmit}>
                                <input 
                                    style={{ display: 'block', marginLeft: '0', marginRight: '0', width: '50%', boxShadow: '0 1px 6px 0 rgba(32, 33, 36, .28)', borderRadius: '1.2rem' }} 
                                    type="email" 
                                    name="email" 
                                    placeholder="Email"
                                    className="mailer-form-input"
                                    onChange={this.onChange} 
                                    minlength='8'>
                                </input>
                                <button className="custom-button">
                                    send the email
                                </button>
                            </form>
                        <div className="line"></div>
                    </div>
                </div>
            </section>
        );
    }
};

const mapStateToProps = state => ({
    forgotPassword: state.auth.tokenMailed
});

export default withRouter((connect(mapStateToProps, { forgotPassword, clearErrors })(PasswordMailer)));