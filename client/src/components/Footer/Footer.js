import React from 'react';

import './Footer.scss';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

const Footer = (props) => {
    return (
        <footer className="Footer" id={props.history.location.pathname == "/new-arrivals" ? "hiden-footer" : ''}>
            <div className="container">
                <nav className="menu">
                    <a className="header-tag"><Link
                        activeClass="active"
                        to="/ourstory"
                        spy={true}
                        smooth={true} 
                        offset={-70}
                        duration={500}>Our Story</Link></a>
                    <a className="header-tag"><Link
                        activeClass="active"
                        to="/Careers"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Careers</Link></a>
                    <a className="header-tag"><Link
                        activeClass="active"
                        to="/FAQ"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >FAQ</Link></a>
                    <a className="header-tag"><Link
                        activeClass="active"
                        to="/contactus"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}  
                    >Contact Us</Link></a>
                </nav>
                <ul className="social-media">
                    <li><a><i class="facebook icon"></i></a></li>
                    <li><a><i class="twitter icon"></i></a></li>
                    <li><a><i class="google plus icon"></i></a></li>
                    <li><a><i class="youtube icon"></i></a></li>
                </ul>
                <div className="copyright">
                    © 2020 Copyright
                </div>
            </div>
        </footer>
    );
}

export default withRouter(Footer);
