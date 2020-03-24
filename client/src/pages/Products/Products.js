import React from 'react';
import { Link, Route } from 'react-router-dom';
import uuid from "uuid";
import axios from 'axios';
 
import Pagination from '../../components/Pagination/Pagination';
import Spinner from './../../components/Spinner/Spinner';
import Brands from './../../components/Brands/Brands';
import Checkbox from './../../components/Checkbox/Checkbox';
import available_sizes from './../../data/Sizes'; 
import { showAlert } from '../../redux/utils/alerts'; 
import ProductPage from '../ProductPage/ProductPage';

import './Products.scss';

class Products extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            filteredData: [],
            gender: [],
            filteredProducts: [],
            activeBrand: 'all',
            isLoading: true,
            productsPerPage: 7,
            currentPage: 1,
            populateFormsData: '',
            updateFilters: [],
            sort: 'newest',
            sortBy: '',
            min_price: false,
            max_price: false,
            male: true,
            female: true,
            brand: '', 
            size: '',
            stock: '',
            activeMenu: false,

            resetBoxes: false,
            showError: false
        };
    };
    
    componentDidMount () {
        axios
            .get('/api/v1/products')
            .then((res) => {
                let products = res.data.data.data;
                this.setState({
                    products,
                    filteredProducts: products,
                    isLoading: false
                })
            })
            .catch(function (error) {
                console.log(error);
        })
    }

    componentWillMount () {
        this.selectedCheckboxes = new Set();
        this.selectedGender = '';
    }

    paginate = (pageNumber) => {
        this.setState({
            currentPage: pageNumber
        })
    }

    onActiveMenu = () => {
        this.setState({ 
            activeMenu: !this.state.activeMenu
        })
    }

    toggleCheckbox = label => {
        if (this.selectedCheckboxes.has(label)) {
            this.selectedCheckboxes.delete(label);
        } else {
            this.selectedCheckboxes.add(label);
        }
    }

    createCheckbox = label => {
        return (
            <Checkbox 
                label={label}
                handleCheckboxChange={this.toggleCheckbox}
                key={label}
            />
        )
    };

    createCheckboxes = () => available_sizes.map(this.createCheckbox);

    handleGenders = gender => {
        this.selectedGender = gender;
        this.forceUpdate();
    }

    sortByPrice = (price) => {
        let sortedPrice = this.state.filteredProducts.sort((a,b) => {
            return price === 'min' ? a.price - b.price : b.price - a.price
        });

        if (price === 'min') {
            this.setState({ 
                min_price: !this.state.min_price,
                max_price: false
            })
        }  else if (price === 'max') {
            this.setState({ 
                max_price: !this.state.max_price,
                min_price: false
            })
        }

        this.setState({
           sortBy : sortedPrice
        })
    };
 
    handleFormSubmit = (event) => {
        event.preventDefault();

        const selectedSizes = [...this.selectedCheckboxes];

        let shallowCopy = [...this.state.products];

        //let filteredProduct = 
        // shallowCopy.filter(product =>
        //     selectedSizes.every(size =>
        //         product.stock.some(s => s.stock > 0 && s.size === size)
        //     )
        // );

        // shallowCopy.filter(product =>
        //     selectedSizes.every(size =>
        //         product.stock.some(s => s.stock > 0 && s.size === size)
        //     )
        // ).filter((prod) => {
        //     return prod.gender.some((item) => {
        //         return item[this.selectedGender] === false ? null : prod
        //     })
        // }).filter(product => {
        //     return product.brand.includes(this.state.activeBrand);
        // })

        //if (this.selectedGender) {
            //let filteredGender = 
            // shallowCopy.filter((prod) => {
            //     return prod.gender.some((item) => {
            //         return item[this.selectedGender] === false ? null : prod
            //     })
            // });
        //}

        //let filteredData = 
        // // shallowCopy.filter(product => {
        // //     return product.brand.includes(this.state.activeBrand);
        // // });

        this.setState({
            filteredProducts: shallowCopy.filter(product =>
                selectedSizes.every(size =>
                    product.stock.some(s => s.stock > 0 && s.size === size)
                )
            ).filter((prod) => {
                return prod.gender.some((item) => {
                    return item[this.selectedGender] === false ? null : prod
                })
            }).filter(brands => {
                return brands.brand.includes(this.state.activeBrand);
            })
        });
    }; 

    resetFilters = (event) => {
        event.preventDefault();

        this.setState({
            filteredProducts: this.state.products,
            max_price: false,
            min_price: false,
            activeBrand: 'all'
        });

        this.selectedGender = '';
    }; 

    filterBrand = (category) => {
        this.setState({
            activeBrand: category
        })
    }; 

    errorAlert = () => {
        if (this.selectedGender === '' || this.state.activeBrand === 'all') {
            this.setState({
                showError: true
            })
        };
    }

    render() {
    const {
        filteredProducts,
        currentPage, 
        productsPerPage,
        activeBrand,
        isLoading,
        activeMenu,
        min_price,
        max_price,
        products
    } = this.state;
    const totalProducts = filteredProducts.length;
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );
    const { location } = this.props;
    return (
        <div className="content-area products-all-page">
            <div  
                className="filter-section"
                id={activeMenu ? 'active-menu' : ''}
            >
                <div className="filter">
                <input type="checkbox" id="gender-options" className="toggle"></input>
                <label className="title" htmlFor="gender-options">Gender</label>
                <div className="content">
                    <div className="gender">
                        <option
                            id={this.selectedGender === 'male' ? 'active-category' : ''} 
                            value="male" onClick={(e) => this.handleGenders(e.target.value)} className="option">
                                Men
                        </option>
                        <option 
                            id={this.selectedGender === 'female' ? 'active-category' : ''}
                            value="female" onClick={(e) => this.handleGenders(e.target.value)} className="option">Women</option>
                    </div>
                </div>
                </div>
                {this.state.showError && showAlert('error', 'Error logging in! Try again.')}
                <div className="filter">
                <input type="checkbox" id="brand-options" className="toggle"></input>
                <label className="title" htmlFor="brand-options">Brand</label>
                <div className="content">
                    <Brands 
                        products={filteredProducts}
                        filterBrand={this.filterBrand}
                        activeBrand={activeBrand}
                    />
                </div>
                </div>
                <div className="filter">
                <input type="checkbox" id="price-options" className="toggle" ></input>
                <label className="title" htmlFor="price-options">Price</label>
                <div className="content">
                    <div className="price">
                        <option 
                            id={min_price === true ? 'active-price' : ''} 
                            onClick={(e) => this.sortByPrice(e.target.value)} 
                            value="min" name="min" placeholder="min" className="option" >min
                        </option>
                        <option 
                            id={max_price === true ? 'active-price' : ''} 
                            onClick={(e) => this.sortByPrice(e.target.value)} 
                            value="max" name="max" placeholder="max" className="option" >max
                        </option>
                    </div>
                </div>
                </div>
                <div className="filter">
                <input type="checkbox" id="size-options" className="toggle" ></input>
                <label className="title" htmlFor="size-options">Size</label>
                <div className="content">
                    <div className="size">
                        {this.createCheckboxes()}
                    </div>
                </div> 
                </div>
                <button 
                    type="submit" 
                    className="reset-filter" 
                    // onClick={() => {
                    //     showAlert('error', 'Login to process your payment.');
                    //     this.resetFilters();
                    // }}
                    onClick={this.errorAlert}
                    onClick={this.resetFilters}
                >    
                    Reset Filters
                </button>

                <button 
                    type="submit" 
                    className="filter-btn" 
                    //onSubmit={this.handleFormSubmit}
                    onClick={() => {
                        this.errorAlert(); 
                        this.handleFormSubmit();
                    }}
                    disabled={this.selectedGender !== '' && this.state.activeBrand !== 'all' ? false : true}
                >
                    Filter
                </button>
            
                <div onClick={this.onActiveMenu} className="close-out-btn">
                    <i class="fa fa-times-circle" aria-hidden="true"></i>
                </div>
            </div>
            { isLoading && <Spinner /> }
            <div className="all-products-grid" id={activeMenu ? 'blur-background' : ''}>
                <div className="refine" 
                    onClick={this.onActiveMenu}
                >
                <span>Refine</span>
                <i class="fa fa-filter" aria-hidden="true"></i>
            </div> 
            {currentProducts.map(item => {
                const { image, title, price, stock } = item;
                return (
                    <div className="product-wrap" key={uuid()}>
                        <Link 
                            to={{
                                pathname: `${location.pathname}/${item.title}`,
                                state: {
                                    item: item,
                                    inStock: stock
                                }
                            }}
                            >
                            <div>
                                <div className="product">
                                    <div className="circle">
                                        <img alt="item" src={image} />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <div
                            style={{ textDecoration: "none", color: "black" }}
                            className="title"
                        >
                            {title}
                        </div>
                        <div
                            style={{ textDecoration: "none", color: "black" }}
                            className="price"
                        >
                            ${price}
                        </div>
                    </div>
                );
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
