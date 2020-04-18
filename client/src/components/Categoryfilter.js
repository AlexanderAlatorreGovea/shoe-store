import React, { Component } from 'react';

class Categoryfilter extends Component {
    
    handleChange = (category) => {
        this.props.onChange(category);
    }
    
    render() {
        const { photos } = this.props;
        const categoryArray = [];

        photos.map((photo) => {
            let photbrand = [photo.brand];
            return (
                photbrand.map((category) => {
                    if (categoryArray.indexOf(category) < 0) {
                        categoryArray.push(category);
                    }
                })
            )
        })

        return (
            <div>
                <h2>Photo Gallery</h2>
                <div>
                    {
                        categoryArray.map(category => 
                            <div style={{ paddingTop: '20rem'}}>
                                <div
                                    onClick={() => this.handleChange(category)}
                                >{category}</div>    
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Categoryfilter;