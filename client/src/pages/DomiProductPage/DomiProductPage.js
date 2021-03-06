import React from 'react';
import { Link, Route } from 'react-router-dom';
import uuid from "uuid";
import axios from 'axios';
import { connect } from 'react-redux';

import Pagination from '../../components/Pagination/Pagination';
import Spinner from './../../components/Spinner/Spinner';
import Brands from './../../components/Brands/Brands';
import Checkbox from './../../components/Checkbox/Checkbox';
import available_sizes from './../../data/Sizes';
import { showAlert } from '../../redux/utils/alerts';
import { fetchProducts } from '../../redux/products/products-actions.js';

class DomiProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //products: this.props.products
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
            selectedGender: '',
            resetBoxes: false,
            showError: false,
            male: false,
            female: true, 
            newProducts: [],
            nProduct: []
        };
    };

    fetchProducts = async () => {
        await axios
            .get('/api/v1/products')
            .then((res) => {
                let products = res.data.data.data;
                this.setState({
                    products: res.data.data.data,
                    //isLoading: false,
                    //filteredProducts: products
                })
            })
            .then((res) => {
                if (this.state.products.length > 0) {
                    this.setState({
                        filteredProducts: this.state.products
                    })
                }
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    componentDidMount = () => {
        //await this.fetchProducts();   
        axios
            .get('/api/v1/products')
            .then((res) => {
                let products = res.data.data.data;
                this.setState({
                    products,
                    isLoading: false,
                    filteredProducts: products
                })
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('nProduct', this.state.products);
    }

    componentWillMount = () => {
        this.selectedCheckboxes = new Set();
        this.selectedGender = '';
        this.products = '';
        localStorage.getItem('nProduct') && this.setState({
            nProduct: localStorage.getItem('nProduct')
        })
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

    sortByPrice = (price) => {
        let shallowCopy = [...this.state.filteredProducts];

        let sortedPrice = shallowCopy.sort((a, b) => {
            return price === 'min' ? a.price - b.price : b.price - a.price
        });

        if (price === 'min') {
            this.setState({
                min_price: !this.state.min_price,
                max_price: false
            })
        } else if (price === 'max') {
            this.setState({
                max_price: !this.state.max_price,
                min_price: false
            })
        }

        this.setState({
            sortBy: sortedPrice
        })
    };

    handleGenders = gender => {
        this.selectedGender = gender;
        this.forceUpdate();
    }

    handleFormSubmit = async (event) => {
        event.preventDefault();

        const selectedSizes = [...this.selectedCheckboxes];

        let shallowCopy = [...this.state.products];

        //let filteredProducts = 
        if (this.selectedCheckboxes !== '') {
            shallowCopy = await shallowCopy.filter(product =>
                selectedSizes.every(size =>
                    product.stock.some(s => s.stock > 0 && s.size === size)
                )
            );
        }

        //let filteredData = 
        if (this.state.activeBrand !== 'all') {
            shallowCopy = await shallowCopy.filter(product => {
                return product.brand.includes(this.state.activeBrand);
            });
        }

        // // //let sortedPrice = 
        // // shallowCopy = shallowCopy.sort((a, b) => {
        // //     return this.state.sortBy === "min"
        // //         ? a.price - b.price
        // //         : b.price - a.price;
        // // });

        //let filteredGender = 
        if (this.selectedGender !== '') {
            shallowCopy = await shallowCopy.filter(product => {
                return product.gender.some((item, idx, arr) => {
                    return item[this.selectedGender] === false ? null : product;
                });
            });
        }

        this.setState({
            filteredProducts: shallowCopy
        })

        // this.setState(prevState => {
        //     let newproduct = [...this.state.products];

        //     if (this.selectedGender || this.state.activeBrand !== 'all' || this.selectedCheckboxes) {
        //         return ({
        //             newProducts: newproduct
        //                 .filter(product => {
        //                     return product.gender.some((item, idx, arr) => {
        //                         return item[this.selectedGender] === false ? null : product;
        //                     })
        //             })
        //         })
        //     }

        // });
        // this.setState(prevState => {
        //     let newproduct = [...this.state.products];

        //     if (this.selectedGender) {
        //         return ({
        //             newProducts: newproduct
        //                 .filter(product => {
        //                     return product.gender.some((item, idx, arr) => {
        //                         return item[this.selectedGender] === false ? null : product;
        //                     })
        //                 }),
        //             newProducts: newproduct
        //                 .filter(product => {
        //                     return product.brand.includes(this.state.activeBrand);
        //                 })
        //         })
        //     }
        //     // if (this.state.activeBrand) {
        //     //     newproduct
        //     //         .filter(product => {
        //     //             return product.brand.includes(this.state.activeBrand);
        //     //     })
        //     // }
        // });
        // // this.setState(prevState => ({
        // //     filteredProducts: this.state.filteredProducts.filter(product => {
        // //         return product.gender.some((item, idx, arr) => {
        // //             return item[this.selectedGender] === false ? null : product;
        // //         });
        // //     })
        // // }, 
        // //     () => {console.log(this.state.filteredProducts)}, 
        // //     () => { console.log(prevState.filteredProducts)}
        // // ))
        // this.setState(prevState => ({
        //     ...prevState,
        //     someProperty: {
        //         ...prevState.someProperty,
        //         someOtherProperty: {
        //             ...prevState.someProperty.someOtherProperty,
        //             anotherProperty: {
        //                 ...prevState.someProperty.someOtherProperty.anotherProperty,
        //                 flag: false
        //             }
        //         }
        //     }
        // }))
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
        console.log(this.state.products)
        console.log(this.state.filteredProducts)
        console.log(this.state.newProducts)
        console.log(localStorage.getItem('contactsDate'))
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
                                products={products}
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
                        onClick={this.resetFilters}
                    >
                        Reset Filters
                </button>

                    <button
                        type="submit"
                        className="filter-btn"
                        onClick={this.handleFormSubmit}
                        //onClick={this.handleFormSubmit}
                    //disabled={this.selectedGender !== '' && this.state.activeBrand !== 'all' ? false : true}
                    >
                        Filter
                </button>

                    <div onClick={this.onActiveMenu} className="close-out-btn">
                        <i class="fa fa-times-circle" aria-hidden="true"></i>
                    </div>
                </div>
                {/* {isLoading && <Spinner />} */}
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
                                        //pathname: `${location.pathname}/${item.title}`,
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

const mapStateToProps = (state) => {
    return { 
        products: state.products
    }
}


export default connect(
    mapStateToProps,  
    { fetchProducts }
)(DomiProductPage);