import React from 'react';

import './FAQ.scss';
import { Link } from 'react-router-dom';
  
const Faq = () => (
    <div className="faq">
        <div
            className="first-container"
            style={{ backgroundImage: `url('https://images.pexels.com/photos/248159/pexels-photo-248159.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')` }}
        >
            <h1 className="animated fadeInUp">Frequently Asked Questions</h1>
        </div> 
        <div className="second-container">
            <div className="left-container">
                <div className="need-help-box">
                    <h4>NEED HELP?</h4>
                    <div className="svg-containers">
                        <div>
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                            <Link to="/ContactUs">Contact Us</Link>
                        </div>
                        <div>
                            <i class="fa fa-comments" aria-hidden="true"></i>
                            <Link to="/login">Chat With Us</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-container">
                <h1 className="animated fadeInUp">GENERAL QUESTIONS</h1>
                <h5 style={{ color: '#a40000' }}>* We offer FREE returns on all orders over $50 USD!</h5>
                <p style={{ color: '#5c5c5c'}}>Any brand new product can be returned for a full refund or store credit within 60 days of delivery. We offer free and easy returns for all domestic and international orders over $50 USD. Please contact Customer Support to schedule the return and receive a prepaid return label. Expedited shipping charges are non-refundable.</p>
                <div className="detail-section">
                    <div className="detail">
                        <input type="checkbox" id="refund-dropdown" className="toggle"></input>
                        <label className="title" for="refund-dropdown">Refund</label>
                        <div className="content">
                            <p className="">
                                NEW! Accepting Returns
                                We accept returns for store credit, within 3 business days of receipt. Items must be tagged and in new/unworn condition. Read more here.

                                100% Authenticity, Guaranteed
                                We carefully inspect every shoe with a fine toothed comb, twice, to validate its authenticity, and to check for conditional/manufacturing issues to ensure all of our items are pristine . We stand behind every item we sell, so you can feel safe about buying. Learn more about our policies here.
                                </p>
                        </div>
                    </div>
                </div> 
                <div className="detail-section">
                    <div className="detail">
                        <input type="checkbox" id="warranty" className="toggle" ></input>
                        <label className="title" for="warranty">Delivery</label>
                        <div className="content">
                            <p className="">
                                The speeds that show are dependent on those made available by the seller.

                                Standard -  Should arrive 3 to 10 business days after shipment
                                Expedited - Should arrive 3 to 6 business days after shipment
                                Second Day -  Should arrive 2 business days after shipment
                                Next Day - Should arrive by the end of business the day after shipment
                                Pick up - Pick up at our Doral Warehouse facility.
                        </p>
                        </div>
                    </div>
                </div>
                <div className="detail-section">
                    <div className="detail">
                        <input type="checkbox" id="delivery-dropdown" className="toggle" ></input>
                        <label className="title" for="delivery-dropdown">Speed of Delivery</label>
                        <div className="content">
                            <p className="">
                                The speeds that show are dependent on those made available by the seller.
    
                                Standard -  Should arrive 3 to 10 business days after shipment
                                Expedited - Should arrive 3 to 6 business days after shipment
                                Second Day -  Should arrive 2 business days after shipment
                                Next Day - Should arrive by the end of business the day after shipment
                                Pick up - Pick up at our Doral Warehouse facility.
                        </p>
                        </div>
                    </div>
                </div>
                <div className="detail-section">
                    <div className="detail">
                        <input type="checkbox" id="n" className="toggle"></input>
                        <label className="title" for="n">warranty</label>
                        <div className="content">
                            <p className="">
                                NEW! Accepting Returns
                                We accept returns for store credit, within 3 business days of receipt. Items must be tagged and in new/unworn condition. Read more here.

                                100% Authenticity, Guaranteed
                                We carefully inspect every shoe with a fine toothed comb, twice, to validate its authenticity, and to check for conditional/manufacturing issues to ensure all of our items are pristine . We stand behind every item we sell, so you can feel safe about buying. Learn more about our policies here.
                                </p>
                        </div>
                    </div>
                </div> 
                <div className="detail-section">
                    <div className="detail">
                        <input type="checkbox" id="r" className="toggle"></input>
                        <label className="title" for="r">Returns</label>
                        <div className="content">
                            <p className="">
                                NEW! Accepting Returns
                                We accept returns for store credit, within 3 business days of receipt. Items must be tagged and in new/unworn condition. Read more here.

                                100% Authenticity, Guaranteed
                                We carefully inspect every shoe with a fine toothed comb, twice, to validate its authenticity, and to check for conditional/manufacturing issues to ensure all of our items are pristine . We stand behind every item we sell, so you can feel safe about buying. Learn more about our policies here.
                                </p>
                        </div>
                    </div>
                </div> 
                <div className="detail-section">
                    <div className="detail">
                        <input type="checkbox" id="f" className="toggle"></input>
                        <label className="title" for="f">Refund</label>
                        <div className="content">
                            <p className="">
                                NEW! Accepting Returns
                                We accept returns for store credit, within 3 business days of receipt. Items must be tagged and in new/unworn condition. Read more here.

                                100% Authenticity, Guaranteed
                                We carefully inspect every shoe with a fine toothed comb, twice, to validate its authenticity, and to check for conditional/manufacturing issues to ensure all of our items are pristine . We stand behind every item we sell, so you can feel safe about buying. Learn more about our policies here.
                                </p>
                        </div>
                    </div>
                </div> 
                <div className="detail-section">
                    <div className="detail">
                        <input type="checkbox" id="d" className="toggle"></input>
                        <label className="title" for="d">Policy</label>
                        <div className="content">
                            <p className="">
                                NEW! Accepting Returns
                                We accept returns for store credit, within 3 business days of receipt. Items must be tagged and in new/unworn condition. Read more here.

                                100% Authenticity, Guaranteed
                                We carefully inspect every shoe with a fine toothed comb, twice, to validate its authenticity, and to check for conditional/manufacturing issues to ensure all of our items are pristine . We stand behind every item we sell, so you can feel safe about buying. Learn more about our policies here.
                                </p>
                        </div>
                    </div>
                </div> 
            </div>  
        </div>
    </div>
);

export default Faq;