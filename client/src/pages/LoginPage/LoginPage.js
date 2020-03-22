import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ClipLoader from "react-spinners/ClipLoader";

import { login } from '../../redux/auth/auth-actions';
import { clearErrors } from '../../redux/errors/error-actions';
 

import './LoginPage.scss';
  
class LoginPage extends Component {
    state = {
        email: '',
        password: '',
        msg: null,
        loading: false
    };
 
    redirect = () => {
        const { error, isAuthenticated, history } = this.props;

        if (isAuthenticated) {
            history.push('/');
        }
    }; 

    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;
        if (error !== prevProps.error) {
            if (error.id === 'LOGIN_FAIL') {
                this.setState({ msg: error.msg.msg });
            } else {
                this.setState({ msg: null });
            }
        }

        if (isAuthenticated) {
            this.redirect();
        }
    }


    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const { email, password } = this.state;

        const user = {
            email,
            password
        };

        this.props.login(user);
    };

    render() {
        const { isLoading } = this.props;
        const { loading } = this.state;
        return ( 
            <section className="content-area login_register-page">
                <div className="container">
                    <div className="box-container">
                    <h2>Log In</h2>
                    <div className="login-grid login">
                        <form onSubmit={this.onSubmit} style={{ width: '100%' }} >
                            <input 
                                style={{ boxShadow: '0 1px 6px 0 rgba(32, 33, 36, .28)', borderRadius: '1.2rem' }} 
                                type="email" 
                                name="email" 
                                placeholder="Email"
                                onChange={this.onChange}
                            />
                            <input 
                                style={{ boxShadow: '0 1px 6px 0 rgba(32, 33, 36, .28)', borderRadius: '1.2rem' }} 
                                type="password" 
                                name="password" 
                                placeholder="Password"
                                onChange={this.onChange}
                            />
                            <Link to='/account/forgot-password'>Forgot Password</Link>
                        <button type="submit">
                            {isLoading ? <ClipLoader color={'#123abc'} size={'20px'}/> : 'Log in'}
                        </button>
                        </form> 
                        <div className="line"></div>
                            <div className="social-accounts" style={{ width: '100%' }}>
                            <a href="#" style={{ boxShadow: '0 1px 6px 0 rgba(32, 33, 36, .28)', borderRadius: '1.2rem' , background: '#db3236', color: 'white' }}><i className="google plus g icon"></i>   Google</a>
                            <a href="#" style={{ boxShadow: '0 1px 6px 0 rgba(32, 33, 36, .28)', borderRadius: '1.2rem' , background: '#3b5998', color: 'white' }}><i className="facebook f icon"></i>  Facebook</a>
                            <a href="#" style={{ boxShadow: '0 1px 6px 0 rgba(32, 33, 36, .28)', borderRadius: '1.2rem' , background: '#1DA1F2', color: 'white' }}><i className="twitter icon"></i> Twitter</a>
                        </div>
                    </div>
                    <div className="footer">
                        Need an account? <Link to="/register">Sign Up</Link>
                    </div>
                    </div>
                </div>
            </section>
        )
    } 
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
  isLoading: state.auth.isLoading
});

export default connect(
  mapStateToProps,
  { login, clearErrors }
)(LoginPage);