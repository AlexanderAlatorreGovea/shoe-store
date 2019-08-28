import React from 'react';

import image from '../../assets/adidas-yeezy-boost-350-white.png';

import './Products.scss';

const Products  = () => {
    return (
        <div class="content-area products-all-page">
            <div class="filter-section">
                <div class="filter">
                <input type="checkbox" id="gender-options" class="toggle"></input>
                <label class="title" for="gender-options">Gender</label>
                <div class="content">
                    <div class="gender">
                    <div class="option">Male</div>
                    <div class="option">Female</div>
                    </div>
                </div>
                </div>

                <div class="filter">
                <input type="checkbox" id="brand-options" class="toggle"></input>
                <label class="title" for="brand-options">Brand</label>
                <div class="content">
                    <div class="brand">
                    <div class="option">Adidas</div>
                        <div class="option">Nike</div>
                        <div class="option">Gucci</div>
                        <div class="option">New Balance</div>
                        <div class="option">Dolce & Gabbana</div>
                        <div class="option">Versace</div>
                    </div>
                </div>
                </div>

                <div class="filter">
                <input type="checkbox" id="price-options" class="toggle" ></input>
                <label class="title" for="price-options">Price</label>
                <div class="content">
                    <div class="price">
                    
                        <input type="text" name="min" placeholder="min" class="option" ></input>
                        <input type="text" name="max" placeholder="max" class="option" ></input>
                    </div>
                </div>
                </div>

                <div class="filter">
                <input type="checkbox" id="size-options" class="toggle" ></input>
                <label class="title" for="size-options">Size</label>
                <div class="content">
                    <div class="size">
                    <div class="option">4</div>
                        <div class="option">4.5</div>
                        <div class="option">5</div>
                        <div class="option">5.5</div>
                        <div class="option">6</div>
                        <div class="option">6.5</div>
                        <div class="option">7</div>
                        <div class="option">7.5</div>
                        <div class="option">8</div>
                        <div class="option">8.5</div>
                        <div class="option">9</div>
                        <div class="option">9.5</div>
                        <div class="option">10</div>
                        <div class="option">10.5</div>
                        <div class="option">11</div>
                        <div class="option">11.5</div>
                        <div class="option">12</div>
                        <div class="option">12.5</div>
                    </div>
                </div>
                </div>

                <button>Filter</button>
            </div>
            <div class="all-products-grid">
                <div class="product-wrap">
                    <div class="product">
                        <div class="circle">
                        <img src={image} />
                        </div>
                    </div>
                    <div class="title">Boost 350 White</div>
                    <div class="price">$350</div>
                </div>
            </div>
        </div>
    )
  }


export default Products;