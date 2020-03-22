import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { removeItem } from '../../redux/cart/cart-actions';

import './PopUp.scss';

const PopUp = ({ total, toggleCart, cartItems, itemCount, toggleCartHandler, history, removeItem }) => {
    return (
        <div
            id="cart-popup" 
            className={`${toggleCart && 'active'}`}
        >
                <div className="cart-title">
                    <div className="title">My Cart</div>
                </div> 
                <div className="cart-items">
                {cartItems.length ? (
                  cartItems.map(cartItem => {
                    return(
                        <div className="item-container">
                            <div className="item">
                                <img alt="item" src={cartItem.image} />
                                <div className="delete-btn">
                                    <div 
                                        onClick={() => {removeItem(cartItem)}} 
                                    className="circle">X</div>
                                </div>
                            </div>
                        </div>
                       ) 
                  })
                ) : (
                    <span className="empty-message">Your cart is empty</span>
                )}
                </div> 
                <div className="product-total">
                    <div className="inside-container">
                        <div className="title">Total</div>
                        <div className="number">x{itemCount}</div>
                    </div>
                </div> 
                <div className="price-total">
                    <div className="inside-container">
                        <div className="title">Total</div>
                        <div className="number">${total}</div>
                    </div>
                </div>
                    <div onClick={toggleCartHandler} className="checkout">
                        <div className="title">
                            <Link
                             to={{
                               pathname: '/checkout',
                               state: itemCount,
                             }}
                                onClick={() => history.push('/checkout')}
                                style={{ color: 'black', textDecoration: 'none' }}
                            >
                            Checkout
                            </Link>
                        </div>
                        <i className="arrow down cart icon" ></i>
                    </div>
            </div>
  )
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(PopUp));