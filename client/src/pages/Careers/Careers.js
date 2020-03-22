import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

import './Careers.scss';

const Careers = () => (
    <div className="careers">
        <div className="first-container">
            <h1>Want to Work for FreshGear?</h1>
            <h3>FreshGear is home to some the best of the best in all areas of this industry. Does that sound like you? </h3>
            <Link className="btn">Have a look at the career oportunities we have available <i class="fas fa-arrow-right"></i></Link>
        </div>
        <div className="container-two">
            <div className="container-two-sub" style={{ backgroundColor: '#171933' }}>
                <div className="inner-container">
                    <h5>VALUE #1</h5>
                    <h1>We Strive to Succeed</h1>
                    <p>Success isn’t a straight line. We acknowledge our mistakes and learn from them to move us closer to where we want to go.</p>
                </div>
            </div>
            <div className="container-two-sub" style={{ backgroundColor: '#f7f8fb'}}>
                <div style={{ color: '#102a43' }} className="inner-container">
                    <h5>VALUE #1</h5>
                    <h1 style={{ color: '#102a43' }}>We Strive to Succeed</h1>
                    <p style={{
                        color: '#627d98' }}>Success isn’t a straight line. We acknowledge our mistakes and learn from them to move us closer to where we want to go.</p>
                </div>
            </div>
            <div className="container-two-sub" style={{ backgroundColor: 'rgb(84, 87, 255)' }}>
                <div className="inner-container">
                    <h5>VALUE #1</h5>
                    <h1>We Strive to Succeed</h1>
                    <p>Success isn’t a straight line. We acknowledge our mistakes and learn from them to move us closer to where we want to go.</p>
                </div>
            </div>
        </div>
        <div className="third-container"> 
            <div className="third-box" style={{ background: `url('https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')` }} >
            </div>
            <div className="third-box" style={{ background: `url('https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')` }}>
            </div>
        </div>
        <div className="fourth-container">
            <div class="fourth-box">
                <div className="div1" style={{ width: '100%', background: `url('https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')`}}> </div>
                <div className="div2" style={{ width: '100%', background: `url('https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')` }}> </div>
                <div className="div3" style={{ width: '100%', background: `url('https://images.pexels.com/photos/6972/summer-office-student-work.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500')` }}></div>
                <div className="div4" style={{ width: '100%', background: `url('https://images.pexels.com/photos/1181642/pexels-photo-1181642.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')` }}> </div>
                <div className="div5" style={{ width: '100%', background: `url('https://images.pexels.com/photos/1346197/pexels-photo-1346197.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')` }}> </div>
                <div className="div6"> 
                    <div className="inner-box">
                        <p>
                            "You’ll be able to see the impact your work has, which gives you a huge sense of accomplishment."
                        </p>
                        <h3>Robert Alexander</h3>
                        <h2>Costumer Success Manager</h2>
                    </div>
                </div>
                <div className="div7" style={{ width: '100%', background: `url('https://images.pexels.com/photos/7082/macbook-mockup-hero-ping-pong.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500')` }}> </div>
                <div className="div8"> 
                    <div className="inner-box">
                        <h2>Annual Workation</h2>
                        <p>
                            We believe a company is only as good as the people behind it. Once a year, we travel to a secret location to eat good food, socialize, and plan our roadmap for the coming year.                        
                        </p>
                    </div>
                </div>
                <div className="div9"> 
                    <div className="inner-box">
                        <h2>Work Remote</h2>
                        <p>
                            We know the best in the world aren’t always available on your doorstep. That’s why, at Sleeknote, we’re not afraid to hire remote employees.
                        </p>
                    </div>
                </div>
                <div className="div10"> 
                    <div className="inner-box">
                        <h2>Education Budget</h2>
                        <p>
                            We believe in the importance of investing in good people. Need to read a book or enroll in a course to do your job better? We got you covered.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="fifth-container">
            <h5>COME JOIN US</h5>
            <h1>Current Openings</h1>
            <p>
                If you’re passionate about doing good work and working on something greater than yourself, Sleeknote is the place for you. Don’t see a suitable job opening below? No problem. <Link> Send us an email</Link> and introduce yourself. We’re always looking for great people.
            </p>
        </div>
        <div className="sixth-container">
            <div className="inner-box" id="margin-less">
                <h1>Marketing</h1>
                <div className="role">
                    <div>
                        <h3 style={{ color: '#963484' }}>Content Marketing Intern</h3>
                        <h3 style={{ color: '#627d98' }} >FreshGear HQ Santa Ana California</h3>
                    </div>
                    <div className="button">
                        <Link>Apply Now</Link>
                        <i class="fas fa-arrow-right"></i>
                    </div>
                </div>
                <div className="role">
                    <div>
                        <h3 style={{ color: '#963484' }}>Content Marketing Intern</h3>
                        <h3 style={{ color: '#627d98' }} >FreshGear HQ Santa Ana California</h3>
                    </div>
                    <div className="button">
                        <Link>Apply Now</Link>
                        <i class="fas fa-arrow-right"></i>
                    </div>
                </div>
                <div className="role">
                    <div>
                        <h3 style={{ color: '#963484' }}>Content Marketing Intern</h3>
                        <h3 style={{ color: '#627d98' }} >FreshGear HQ Santa Ana California</h3>
                    </div>
                    <div className="button">
                        <Link>Apply Now</Link>
                        <i class="fas fa-arrow-right"></i>
                    </div>
                </div>
            </div>
            <div className="inner-box">
                <h1>Sales</h1>
                <div className="role">
                    <div>
                        <h3 style={{ color: '#963484' }}>Content Marketing Intern</h3>
                        <h3 style={{ color: '#627d98' }} >FreshGear HQ Santa Ana California</h3>
                    </div>
                    <div className="button">
                        <Link>Apply Now</Link>
                        <i class="fas fa-arrow-right"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Careers;