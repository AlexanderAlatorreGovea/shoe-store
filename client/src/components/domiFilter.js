import React, { Component } from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import Categoryfilter from './Categoryfilter';
import qs from 'query-string';

class domiFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            filteredData: [],

            selectedCity: 'nyc',

            activeCategory: 'all',

            min_price: 234,
            max_price: 342,
            sort: false,

            checkboxes: {
                Adidas: false,
                New_Balance: false,
                Nike: false, 
                Gucci: false,
                Dolce_Gabbana: false
            }
        };
    };

    componentDidMount () {
        const {match, history} = this.props;

        if(match.params == undefined) {
            history.push('/checkout')
        }
    }


    componentWillMount () {
        const { match, history } = this.props;
        const queryParams = qs.parse(this.props.location.search);
        console.log(queryParams)
        const { min_price, max_price,sort } = queryParams;
        if(queryParams.min_price != undefined) {
            axios
            .get(`/api/v1/products?min_price=${min_price}&max_price=${max_price}&sort=${sort}`)
            .then((res, req) => {
                // let city = res.data.data.data.filter((item) => {
                //     return item.routeName == match.params.selectedCity
                // })

                this.setState({
                    products: res.data.data.data
                    //selectedCity: city[0].routeName
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
        } else {
            axios
            .get('/api/v1/products')
            .then((res, req) => {
                // let city = res.data.data.data.filter((item) => {
                //     return item.routeName == match.params.selectedCity
                // })

                this.setState({
                    products: res.data.data.data
                    //selectedCity: city[0].routeName
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
        }
    }

    // // componentWillMount () {
    // //     axios
    // //         .get(`/api/v1/products/${match.params.product}`)
    // //         .then((res, req) => {

    // //             this.setState({
    // //                 products: res.data.data.data
    // //             })   
    // //         })
    // //         .catch(function (error) {
    // //             console.log(error);
    // //         })
    // // }

    handleTags = (event) => {
        const name = event.target.name;
        const value = event.target.type = 'checkbox' ? event.target.checked : event.target.value;

        this.setState({
            [name] : value
        }, () => console.log(this.state))
    }

    submitFilters = () => {
        const { match, location, history } = this.props;
        const { min_price, max_price,sort } = this.state;
        console.log(this.state.min_price)
        history.push(`/${match.params.city}/${match.params.category}?min_price=${min_price}&max_price=${max_price}&sort=${sort}`)
    
        if(queryParams.min_price != undefined) {
            axios
            .get(`/api/v1/products?min_price=${queryParams.min_price}&max_price=${queryParams.max_price}&sort=${queryParams.sort}`)
            .then((res, req) => {
                // let city = res.data.data.data.filter((item) => {
                //     return item.routeName == match.params.selectedCity
                // })

                this.setState({
                    products: res.data.data.data
                    //selectedCity: city[0].routeName
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
        } 
    }

   handleChange = (category) =>  {
        this.setState({
            activeCategory: category
        })
   }

   selectedCity = (city) => {
       this.setState({
           selectedCity: city
       }, () => {
           let city = this.state.products.filter((item) => {
               return item.routeName == this.state.selectedCity
           })
            const { match, history } = this.props;
            console.log(city)
            //history.push(`/${city[0].routeName}`)
            history.push(`/${this.state.selectedCity}`)
       })
   }

    render() {
        const { products, activeCategory } = this.state;
        console.log(products)
        return (
            <div>


            <Categoryfilter 
                photos={ this.state.products }
                onChange={this.handleChange}
            />
                
            {products.map((item) => {
                const { image, title, price } = item;
                let photbrand = [item.brand];
                if (photbrand.indexOf(activeCategory) < 0 && activeCategory !== 'all') return null;
                console.log(item.routeName)
                return (
                    <div className="product-wrap" key={title}>
                        <Link 
                            to={{
                                pathname: `/product`,
                                state: {
                                    item: item
                            }}} 
                        >
                            <div className="product">
                                <div className="circle">
                                <img alt="item" src={image} />
                                </div>
                            </div>
                        </Link>
                        <div style={{ textDecoration: 'none', color: 'black' }} className="title">{title}</div>
                        <div onClick={this.selectedCity.bind(this, item.routeName)} style={{ textDecoration: 'none', color: 'black' }} className="price">${price}</div>
                    </div>
                )
            })}
            </div>
        );
    }
}

export default domiFilter;