import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { removeItem } from '../../redux/cart/cart-actions';

import './CheckoutItem.scss';
import Modal from '../Modal/Modal'; 

const CheckOutItem = ({ removeItem, cartItem, displayModal, hideModal, open }) => {
  const { title, image, price, quantity } = cartItem;
  return (
    <div className='checkout-item'> 
      <div className='image-container'>
        <img src={image} alt='item' />
      </div>
      <span className='name'>{title}</span>
      <span className='quantity'>
        <span className='value'>{quantity}</span>
        </span>
      <span className='price'>{price}</span>
      <div 
        className='remove-button' 
        onClick={() => { removeItem(cartItem) }} 
      >
        &#10005;
      </div> 
     {open && <Modal cartItem={cartItem} hideModal={hideModal} open={open} displayModal={displayModal} />}
    </div> 
  );
};

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item)),
});

export default withRouter(connect(
  null,
  mapDispatchToProps,
)(CheckOutItem));

