import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import StripeButton from '../../components/StripeButton/StripeButton';
import { useState } from 'react';
import Footer from '../../components/Footer/Footer';

import { 
    selectCartItems, 
    selectCartTotal,
    selectCartItemsCount
} from '../../redux/cart/cart-selectors.js';
import { removeSize } from '../../redux/cart/cart-actions';

import './Checkout.scss';

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import Modal from '../../components/Modal/Modal';

const Checkout = ({ total, itemCount, cartItems, removeSize }) => {
    const [open, openModal] = useState(false);
    const tax = total * .0725;
    const _total = total + tax + 10; 

    const onDeleteSize = (cartItem, size) => {
        const newSize = [cartItem].map(item => item.chosenSize)
        const updatedSize = newSize.pop()
        const index = updatedSize.indexOf(size)
        const productIndex = findProductIndex(cartItems, cartItem._id);

        return [cartItems[productIndex]].map((item) => {
            return index > -1 && item.chosenSize.splice(index, 1)
        });
    } 

    const findProductIndex = (cart, productID) => {
        return cart.findIndex(p => p._id === productID);
    };

    const displayModal = () => {
        openModal(true)
    };

    const hideModal = () => { 
        openModal(false)
    };
   
    return ( 
        <section className="content-area checkout-page">
            <div className="container">
                <div className="box-container">
                    <h1>Check Out</h1> 
                    <hr />
                    <div className="checkout-grid">
                    <div className="forms">
                        <h3>Shipping Information</h3>
                        <div className='checkout-header'>
                            <div className='header-block'>
                                <span>Product</span>
                            </div>
                            <div className='header-block'>
                                <span>Description</span>
                            </div>
                            <div className='header-block'>
                                <span>Quantity</span>
                            </div>
                            <div className='header-block'>
                                <span>Price</span>
                            </div>
                            <div className='header-block'>
                                <span>Remove</span>
                            </div>
                        </div>
                        {cartItems.length ?  
                            cartItems.map(cartItem => (
                                <CheckoutItem 
                                    key={cartItem.id} 
                                    cartItem={cartItem} 
                                    displayModal={displayModal}
                                    hideModal={hideModal}
                                    open={open} 
                            />)) : 
                            (<h3 style={{ textAlign: 'center', paddingTop: '3rem' }}>There are no items in your cart &#128531; </h3>)
                        }
                    </div>
                    <div className="totals">
                        <div className="items">
                            <span>Items:</span>&nbsp; {itemCount}
                        </div>
                        <div className="tax">
                            <span>Tax:</span>&nbsp; ${tax == 0 ? 0 : tax.toFixed(2)}
                        </div>
                        <div className="shipping">
                                <span>Shipping:</span>&nbsp; {cartItems.length ? '$10' : '$0' }
                        </div>
                        <div className="sub-total">
                            <span>sub total:</span>&nbsp; ${total}
                        </div>
                        <div className="price">
                            <span>total:</span>&nbsp; ${itemCount > 0 ? _total.toFixed(2) : 0}
                        </div>
                        {cartItems.map(cartItem => {
                            return (
                                <div className="pricing">
                                    <span>Details:</span>
                                    <div style={{ paddingBottom: '.2rem' }}></div>
                                    <br/>
                                    <div style={{ display: 'flex', flexDirection: 'row', paddingBottom: '.5rem' }}>
                                        <span className="model-span" style={{ color: 'red', fontWeight: '400' }}>Model:</span>&nbsp;
                                        <h5 className="model-header" style={{ color: 'black' }}>{cartItem.title}</h5>
                                    </div> 
                                    {cartItem.chosenSize.map((item, idx)=> {
                                        return(
                                            <div className='chosen-size' style={{ display: 'flex', width: '100%', paddingBottom: '.5rem' }}>
                                                <div className="size-price" style={{ color: '#ff4500', fontWeight: '400' }}>size: &nbsp; &nbsp;<span className="price-span" style={{ color: 'black', fontWeight: '400' }}>{item.size}</span>
                                                </div>
                                                <div 
                                                    className='x'
                                                    onClick={() => removeSize(cartItem, item, idx)} 
                                                    style={{ alignSelf: 'flex-end', color: '#db3236', cursor: 'pointer' }}
                                                >
                                                    &#10007;
                                                </div> 
                                            </div>
                                        ) 
                                    })}
                                </div>
                                )
                            })}
                    </div>
                    <StripeButton price={total} />
                    </div>
                </div> 
            </div>
        </section>
)};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
    itemCount: selectCartItemsCount
});
 
const mapDispatchToProps = dispatch => ({
    removeSize: (cartItem, item, idx) => dispatch(removeSize(cartItem, item, idx))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Checkout)