import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { connect } from 'react-redux';
import { showAlert } from '../../redux/utils/alerts'; 

import './StripeButton.scss'; 

import { authenticated } from '../../redux/auth/auth-selectors';
import { login } from '../../redux/auth/auth-actions';
import { clearErrors } from '../../redux/errors/error-actions';
  
const StripeButton = ({ price, isAuthenticated }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_Hf57iAx5mdXgGnkvekE97aqK00NsdvL39K';

    const onToken = token => {
        axios({
            url: '/payment',
            method: 'POST',
            data: {
                amount: priceForStripe,
                token: token 
            }
        })
        .then(res => {
            showAlert('success', 'succesful payment');
        })
        .catch(error => {
            console.log('Payment Error: ', JSON.parse(error));
            showAlert('error', 'There was an issue with your payment!');
        });
    };

    const errorAlert = () => {
        if (!isAuthenticated) 
            showAlert('error', 'Login to process your payment.')
                return;
    }

    console.log(isAuthenticated)
    return (
        <div>
            {isAuthenticated ?
                (
                    <StripeCheckout
                        label='Pay Now'
                        name='FRESHGEAR Ltd.'
                        billingAddress
                        shippingAddress
                        description={`Your total is $${price}`}
                        amount={priceForStripe}
                        panelLabel='Pay Now'
                        token={onToken}
                        stripeKey={publishableKey}
                    /> 
                )
                :
                (
                    <button onClick={errorAlert} className='alt-btn'>
                        <span className='alternative-button' >
                            Pay Now
                        </span>
                    </button>
                )
            }
        </div>
    )
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(mapStateToProps, { login, clearErrors })(StripeButton);