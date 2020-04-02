import React from 'react';
import WOW from "wowjs";

import './OurStory.scss';

class OurStory extends React.Component {
 
    componentDidMount() {
        const wow = new WOW.WOW();
        wow.init();
    } 

    render() { 
        return ( 
            <div className="our-story">
                <div 
                    style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')` }}
                    className="first-container"
                > 
                    <div class="hero-text">
                        <h1>DESIGNED IN LA</h1>
                        <h1>WORN ACROSS THE GLOBE</h1>
                    </div>
                </div>
                <div className="second-container">
                    <div className="inner-container">
                        <div className="second-subcontainer">
                            <div className="description wow fadeInUp">
                                <h1 >Our Story</h1>
                                <span ></span>
                                <p >Lorem ipsum dolor amet wayfarers locavore raw denim taiyaki drinking vinegar. Cred intelligentsia kale chips shoreditch selvage swag next level pinterest yr marfa. Crucifix jean shorts hell of synth bitters before they sold out scenester. Pinterest aesthetic selfies ennui chia leggings PBR&B copper mug lomo snackwave vegan. Vinyl pug artisan banh mi kickstarter af wolf retro. Neutra beard man bun flannel banjo cold-pressed taxidermy bespoke fanny pack. Hella air plant art party snackwave pok pok.</p>
                            </div>
                            <div 
                                className="image"
                                style={{ backgroundImage: `url('https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')` }}
                            >
                            </div> 
                        </div>
                        <div className="second-subcontainer">
                            <div className="image" style={{ backgroundImage: `url('https://images.pexels.com/photos/1595387/pexels-photo-1595387.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')` }}>
                            </div>
                            <div id="negative" className="description wow fadeInUp">
                                <h1 >Our Mission</h1>
                                <span ></span>
                                <p >Lorem ipsum dolor amet wayfarers locavore raw denim taiyaki drinking vinegar. Cred intelligentsia kale chips shoreditch selvage swag next level pinterest yr marfa. Crucifix jean shorts hell of synth bitters before they sold out scenester. Pinterest aesthetic selfies ennui chia leggings PBR&B copper mug lomo snackwave vegan. Vinyl pug artisan banh mi kickstarter af wolf retro. Neutra beard man bun flannel banjo cold-pressed taxidermy bespoke fanny pack. Hella air plant art party snackwave pok pok.</p>
                            </div>
                        </div>
                        <div className="second-subcontainer">
                            <div className="description wow fadeInUp">
                                <h1 >Our Products</h1>
                                <span ></span>
                                <p >Lorem ipsum dolor amet wayfarers locavore raw denim taiyaki drinking vinegar. Cred intelligentsia kale chips shoreditch selvage swag next level pinterest yr marfa. Crucifix jean shorts hell of synth bitters before they sold out scenester. Pinterest aesthetic selfies ennui chia leggings PBR&B copper mug lomo snackwave vegan. Vinyl pug artisan banh mi kickstarter af wolf retro. Neutra beard man bun flannel banjo cold-pressed taxidermy bespoke fanny pack. Hella air plant art party snackwave pok pok.</p>
                            </div>
                            <div id="one" className="image" style={{ backgroundImage: `url('https://images.pexels.com/photos/1346197/pexels-photo-1346197.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')` }}>
                            </div>
                        </div>
                        <div className="second-subcontainer">
                            <div id="one" className="image" style={{ backgroundImage: `url('https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')` }}>
                            </div>
                            <div className="description wow fadeInUp">
                                <h1 >Our Commitment</h1>
                                <span ></span>
                                <p >Lorem ipsum dolor amet wayfarers locavore raw denim taiyaki drinking vinegar. Cred intelligentsia kale chips shoreditch selvage swag next level pinterest yr marfa. Crucifix jean shorts hell of synth bitters before they sold out scenester. Pinterest aesthetic selfies ennui chia leggings PBR&B copper mug lomo snackwave vegan. Vinyl pug artisan banh mi kickstarter af wolf retro. Neutra beard man bun flannel banjo cold-pressed taxidermy bespoke fanny pack. Hella air plant art party snackwave pok pok.</p>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="third-container wow fadeInUp">
                    Join FreshGear
                </div>
                <div
                    style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/310983/pexels-photo-310983.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')` }}
                    className="fourth-container"
                >
                    <div class="hero-text">
                        <h1 className="wow fadeInUp">There are those who give with joy, and that joy is their reward.</h1>
                    </div>
                </div>
                <div className="fifth-container">
                </div>
            </div>
        );
    }
}

export default OurStory;
