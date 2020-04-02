import React from 'react';
import { Link } from 'react-router-dom';
import './ContactUs.scss';
 
const ContactUs = () => (
    <div className="contact-us">
        <div className="skewed-box">
            <div className="container">
                <h5 className="wow fadeInUp">GOT A QUESTION</h5>
                <h1 className="wow fadeInUp two-contact">Contact FreshGear</h1>
                <h3 className="wow fadeInUp three-contact">
                    We’re here to help and answer any question you might have. 
                    <br/>
                    We look forward to hearing from you 🙂
                </h3>
            </div>
        </div>
        <div className="section-two">
            <div className="container-one">
                <form action="/my-handling-form-page" method="post">
                    <ul>
                        <li style={{ display: 'flex', flexDirection: 'column' }}>
                            <label for="name">FIRST NAME <span style={{ color: 'red', fontSize: '11.2px' }}>*</span></label>
                            <input type="text" id="name" name="user_name"/>
                        </li>
                        <li>
                            <label for="last_name">LAST NAME <span style={{ color: 'red', fontSize: '11.2px' }}>*</span></label>
                            <input type="text" id="name" name="user_name" />
                        </li>
                        <li>
                            <label for="mail">E-mail <span style={{ color: 'red', fontSize: '11.2px' }}>*</span></label>
                            <input type="email" id="mail" name="user_mail" />
                        </li>
                        <li>
                            <label for="msg">Message <span style={{ color: 'red', fontSize: '11.2px' }}>*</span></label>
                            <textarea id="msg" name="user_message"></textarea>
                        </li>
                        <li>
                            <label for="details">ADDITIONAL DETAILS</label>
                            <textarea id="details" name="additional-details"></textarea>
                        </li>
                        <li class="contact-button">
                            <button id="button" type="submit">Send Message</button>
                        </li> 
                    </ul> 
                    <hr />
                    <div className="contact-information">
                        <h3>
                            Contact Information
                        </h3>
                        <div className="contact-subsection" id="order">
                            <i class="fas fa-map-pin"></i>
                            <span >5555 Ventura Road, 
                                <br />
                                Oxnard Ca 93033 
                            </span>
                        </div>
                        <div className="contact-subsection">
                            <i class="fas fa-phone"></i>
                            <span>+45 71 99 77 07</span>
                        </div>
                        <div className="contact-subsection">
                            <i class="fas fa-envelope"></i>
                            <span>alexander_alatorre1993@hotmail.com</span>
                        </div>
                    </div>
                </form>
            </div>
            <div className="container-two">
                <h1>How Can We Help?</h1>
                <p>Please select a topic below related to your inquiry. If you don’t find what you need, fill out our contact form.</p>
                <div>
                    <h2>Discover</h2>
                    <div className="link">
                        <Link to='/products'>Discover our extensive shoe selection</Link>
                        <i class="fas fa-arrow-right"></i>
                    </div>
                </div> 
                    <hr />
                <div>
                    <h2>Sign Up</h2>
                    <div className="link">
                        <Link to="/register">Sign up to stay informed about our latest releases and especial offers</Link>
                        <i class="fas fa-arrow-right"></i>
                    </div>
                </div>
                    <hr />
                <div>
                    <h2>About</h2>
                    <div className="link">
                        <Link to="/ourstory">Want to know more? check out our history here</Link>
                        <i class="fas fa-arrow-right"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default ContactUs;