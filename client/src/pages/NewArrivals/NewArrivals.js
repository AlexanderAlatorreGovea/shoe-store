import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import uuid from "uuid";
import axios from 'axios';

import './NewArrivals.scss';
import DotLoader from "react-spinners/DotLoader";

export default class NewArrivals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            filteredProducts: [],
            isLoading: false
        }
    }

    componentDidMount() {
        axios
            .get('/api/v1/products')
            .then((res) => {
                this.setState({
                    products: res.data.data.data,
                    isLoading: true
                })
            })
            .catch(function (error) {
                console.log(error);
            })
            setTimeout(() => {
                this.setState({ isLoading: false });
            }, 2000);
    }
 
    render() {
        const { products, isLoading } = this.state;
        const { location } = this.props;
        return (
            <div className="new-arrivals-page">
                {this.state.isLoading &&
                    <div id="loading-component">
                        <DotLoader 
                            width={300}
                            size={200}
                        />
                    </div> 
                }
                    <div className="new-arrivals">
                        <div className="all-products-grid">
                            {products.map((item, idx) => {
                                const { image, title, price, stock } = item;
                                if (idx < 7) {
                                    return (
                                        <div className="product-wrap" key={uuid()}>
                                            <Link
                                                to={{
                                                    pathname: `products/${item.title}`,
                                                    state: {
                                                        item: item,
                                                        inStock: stock
                                                    }
                                                }}
                                            >
                                                <div className="product">
                                                    <div className="circle">
                                                        <img alt="item" src={image} />
                                                    </div>
                                                </div>
                                            </Link>
                                            <div style={{ textDecoration: 'none', color: 'black' }} className="title">{title}</div>
                                            <div style={{ textDecoration: 'none', color: 'black' }} className="price">${price}</div>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </div>
            </div>
        )
    }
}
