import React from 'react';
import { Link } from 'react-router-dom';

import Pagination from '../../components/Pagination/Pagination';
import SHOP_DATA from '../../data/Data';
import Options from '../../data/Options';

import './Products.scss';

class Products extends React.Component {
    state = {
        SHOP_DATA,
        productsPerPage: 7,
        currentPage: 1,
        populateFormsData: ''
    }

    paginate = (pageNumber) => {
        this.setState({
            currentPage: pageNumber
        })
    }

 
    render() {
    const { SHOP_DATA, currentPage, productsPerPage } = this.state;
    const totalProducts = SHOP_DATA.length;
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = SHOP_DATA.slice(indexOfFirstProduct, indexOfLastProduct);
    
    return (
        <div className="content-area products-all-page">
            <div className="filter-section">
                <div className="filter">
                <input type="checkbox" id="gender-options" className="toggle"></input>
                <label className="title" htmlFor="gender-options">Gender</label>
                <div className="content">
                    <div className="gender">
                        
                    </div>
                </div>
                </div>

                <div className="filter">
                <input type="checkbox" id="brand-options" className="toggle"></input>
                <label className="title" htmlFor="brand-options">Brand</label>
                <div className="content">
                    <div className="brand">
                        <option type="button" placeholder="Adidas" name="Adidas" className="option">Adidas</option>
                        <option className="option">Nike</option>
                        <option className="option">Gucci</option>
                        <option className="option">New Balance</option>
                        <option className="option">Dolce & Gabbana</option>
                        <option className="option">Versace</option>
                    </div>
                </div>
                </div>

                <div className="filter">
                <input type="checkbox" id="price-options" className="toggle" ></input>
                <label className="title" htmlFor="price-options">Price</label>
                <div className="content">
                    <div className="price">
                    
                        <input type="text" name="min" placeholder="min" className="option" ></input>
                        <input type="text" name="max" placeholder="max" className="option" ></input>
                    </div>
                </div>
                </div>

                <div className="filter">
                <input type="checkbox" id="size-options" className="toggle" ></input>
                <label className="title" htmlFor="size-options">Size</label>
                <div className="content">
                    <div className="size">
                        <div className="option">4</div>
                        <div className="option">4.5</div>
                        <div className="option">5</div>
                        <div className="option">5.5</div>
                        <div className="option">6</div>
                        <div className="option">6.5</div>
                        <div className="option">7</div>
                        <div className="option">7.5</div>
                        <div className="option">8</div>
                        <div className="option">8.5</div>
                        <div className="option">9</div>
                        <div className="option">9.5</div>
                        <div className="option">10</div>
                        <div className="option">10.5</div>
                        <div className="option">11</div>
                        <div className="option">11.5</div>
                        <div className="option">12</div>
                        <div className="option">12.5</div>
                    </div>
                </div>
                </div>

                <button>Filter</button>
            </div>
            <div className="all-products-grid">
            {currentProducts.map((item) => {
                const { image, title, price, routeName } = item;
                return (
                    <div className="product-wrap" key={title}>
                        <Link 
                            to={{
                                pathname: `/product/${routeName.toLowerCase()}`,
                                state: {
                                    item: item,
                                }}}
                        >
                            <div className="product">
                                <div className="circle">
                                <img src={image} />
                                </div>
                            </div>
                        </Link>
                        <div style={{ textDecoration: 'none', color: 'black' }} className="title">{title}</div>
                        <div style={{ textDecoration: 'none', color: 'black' }} className="price">${price}</div>
                    </div>
                )
            })}
            <Pagination 
                paginate={this.paginate}
                productsPerPage={productsPerPage}
                totalProducts={totalProducts}
            /> 
            </div>
        </div>
    )
  }
};

export default Products;

