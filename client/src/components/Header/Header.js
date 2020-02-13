import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import PopUp from '../PopUp/PopUp';
import { selectCartItemsCount, selectCartTotal } from '../../redux/cart/cart-selectors';
import { authenticated } from '../../redux/auth/auth-selectors';
import { logout } from '../../redux/auth/auth-actions';

import './Header.scss';
import './hamburger.scss';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          toggleCart: false,
          toggleMenu: false,
          isTablet: false 
        };
    }

    toggleCart = () => {
        this.setState({
            toggleCart: !this.state.toggleCart
        })
    };

    toggleMenu = () => {
        this.setState({ 
            toggleMenu: !this.state.toggleMenu
        })
    }

    componentDidMount = () => {
        this.onWidowResize();
        window.addEventListener("resize", this.onWidowResize);
    }

    componentWillUnmount = () => {
        window.removeEventListener("resize", this.onWidowResize);
    }

    onWidowResize = () => {
        this.setState({ isTablet: window.innerWidth > 769 });
    }
  
    render() {
        const { toggleCart, isTablet } = this.state;
        const { itemCount, total } = this.props;
        console.log(this.props.authenticated.some((value) => value))
        const isAuthenticated = this.props.authenticated.some((value) => value)
        return (
            <div style={{ margin: '0 auto' }}>
                <header> 
                    <div className="logo">
                        <Link to="/">freshgear</Link>
                    </div>
                    <button  
                        onClick={this.toggleMenu}
                        className={`hamburger hamburger--elastic`}
                        id={`${this.state.toggleMenu ? 'is-active' : ''}`}
                        type="button"
                    > 
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button>
                    <div 
                        className='menu'
                        id={this.state.toggleMenu ? "visible" : ''}
                    >
                        <Link to="ourstory">About</Link>
                        <Link to="new-arrivals">New Arrivals</Link>
                        <Link to="products">All Products</Link>
                        {isAuthenticated 
                            ? (<div onClick={this.props.logout} className="sign-out" to="/">Sign Out</div>) : (<Link to="login">Sign In</Link>) } 
                        {isTablet ? (
                                <div onClick={this.toggleCart} className="cart-link">Cart<span>{itemCount}</span></div>
                            ) : (
                                <Link to="/checkout" className="cart-link">Cart<span>{itemCount}</span></Link>
                        )}
                    </div>
                </header> 
                <PopUp 
                    toggleCart={toggleCart}
                    itemCount={itemCount}
                    toggleCartHandler={this.toggleCart}
                    total={total}
                />
            </div>
        );
    }
};

const mapStateToProps = createStructuredSelector({
    total: selectCartTotal,
    itemCount: selectCartItemsCount,
    authenticated: authenticated
});

  

export default connect(mapStateToProps, { logout })(Header);


