import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';

import { showAlert } from '../../redux/utils/alerts'; 
import { addItem } from '../../redux/cart/cart-actions';

import './ProductPage.scss';

class ProductPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sizeQuantity: 0, 
            chosenSize: [],

            afterState: '', 

            newState: [],
            list: [],
            focusCart: false,
            focusSize: true,
        };
        this.buttonRef = React.createRef();
        this.optionRef = React.createRef();
    } 
      
   

    alertBox = (product, products, count, delta) => {

        let newStock;
        let clickedSize;
        let selectedProduct;

        if (product.stock === 0) { 
            alert('The item is currently out of stock')
        } else {
            
            clickedSize = product.size;
            selectedProduct = product._id;
            let newProducts;

            let quantity = 0;

            products.map((item) => {
                return item._id === product._id ? 
                    newProducts = [...this.state.chosenSize , {...item, ...newStock }]
                    : product
            });

            const tester = [];
            const result = [];
            const newSize = [];
            let quantities = [];
            let items;
            let newIt;
            let newElements = [];

            newProducts.forEach(function(el) {
                if (tester.indexOf(el._id) === -1) {
                    tester.push(el._id)
                    result.push(el)
                    newElements.push({...el, newStock: el.stock, product: 0 })
                }
            });
            
            let newArray = result.map((item, i) => Object.assign({}, item, item.stock -= 1));

            this.setState(prevState => ({
                chosenSize: newArray
            }))
        }
    }


      onUpdateItem = (i, product, prod) => { 
          
          const index = product.findIndex(emp => emp._id === prod._id),
            products = [...product] 
            products[index] = prod;
            this.setState({
                chosenSize: products 
            })
      };

    onUpdateCopy = (products, product, delta) => {       
        let items = []; 
        let itemsArray;
        if (this.seenItems.has(product._id)) {
            this.seenItems.delete(product._id);
          } else {
            this.seenItems.add(product._id);
        }

        itemsArray = [...this.seenItems]

        const tester = [];
        const result = [];
        let itema;
    
        let newProducts = products.map(product =>
            itemsArray.every(size =>
              product._id === size && items.push({...product, newStock: product.stock += delta, product: 0 })
            ) 
          );

        items.forEach(function(el) {
            if (tester.indexOf(el._id) === -1) {
                tester.push(el._id)
                result.push({...el})
            }
        });
            
        this.setState(
            st => ({
                chosenSize: products.map(item => (item._id === product._id ? {...item, stock: item.stock + delta} : item)),
                newState: [...this.state.newState, ...items ]
            })
        )
    };

    updateProducst = (products, product, delta) => {   
    
        let sizeQuantity = 0;
        this.seenItems.push({...product, newStock: product.stock += delta, product: this.state.sizeQuantity })

        const tester = [];
        const result = [];
        this.seenItems.forEach(function(el) {
            if (tester.indexOf(el._id) === -1) {
                tester.push(el._id)
                result.push({...el})
            }
        })

        this.setState(prevState => ({
            ...prevState,
            chosenSize: result.map(item => ({
                ...item, 
                newStock: item.stock + delta, 
                product: prevState.sizeQuantity += 1, 
            }))
        }))
    };

    componentWillMount () {
        this.map = new Map();
        this.result = [];
    }

    componentDidMount() {
        this.seenItems = [];
    }


 
    newFunct = (array, index, newItem, delta) => {

        this.setState(prevState => ({
            ...prevState,
            chosenSize: [...this.state.chosenSize, {...newItem }]
        }))

        this.result = [this.props.location.state.item].map(item => ({  
                ...item,
                chosenSize: this.state.chosenSize
        })) 

        return this.result
    }

    updateSize = (prod, idx, arr) => {
        const { item } = this.props.location.state;

        [item].map((item) => {
            return item.chosenSize.push(prod)
        });
        
        this.forceUpdate();
        
        return item
    }  

    errorMessage = (product) => {
        if (product.stock === 0) {
            showAlert('error', 'This item is out of stock.');
        } else if (product.size !== null || undefined) {

            const addToCartBtn = this.buttonRef.current;

            addToCartBtn.classList.add("focus-button");

            this.setState({
                focusCart: true
            })
        } 
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const sizes = document.querySelectorAll('#size-option');
        const addToCartBtn = this.buttonRef.current;

        if (this.props.cartItems[0] !== undefined || null) {
            if (this.props.cartItems[0].chosenSize.length > 0 ) {
                sizes.forEach((e) => {
                    e.classList.remove("focus-option")
                })
                addToCartBtn.classList.remove("focus-button");
            }
        }
    }

    reFocusSize = (product, idx) => { 
        const sizes = document.querySelectorAll('#size-option');

        if (this.props.location.state.item.chosenSize.length !== 0) {
            sizes[idx].classList.add("focus-option");
        } 
    }

    render() {
        const { item }  = this.props.location.state;
        const { addItem } = this.props;
        const  inStock = item.stock;
        const { chosenSize } = this.state;
        console.log(this.props.location.state.item.chosenSize.length)
        return (
            <div className="content-area product-single-page">
                <div className="product-imgs">
                    <div className="product">
                    <div className="circle">
                        <img src={item.image} />
                    </div>
                    </div>
                </div>
                <div className="product-detail" >
                    <div className="titles">
                    <div className="brand">
                        {item.brand}
                    </div>
                    <div className="product">
                        {item.alternative_title}
                    </div>
                    </div>
                    <div className="details">
                        <p>{item.description}</p>
                    <div id="ProductAddToCartRoot"></div>

                    <div className="detail-section">
                        <div className="detail">
                        <input type="checkbox" id="delivery-dropdown" className="toggle" ></input>
                        <label className="title" for="delivery-dropdown">Delivery</label>
                        <div className="content">
                        <p className="">
                            The speeds that show are dependent on those made available by the seller.  

                            Standard -  Should arrive 3 to 10 business days after shipment
                            Expedited - Should arrive 3 to 6 business days after shipment
                            Second Day -  Should arrive 2 business days after shipment
                            Next Day - Should arrive by the end of business the day after shipment
                            Pick up - Pick up at our Doral Warehouse facility.
                        </p>
                        </div>
                    </div>
                    </div>

                    <div className="detail-section">
                        <div className="detail">
                            <input type="checkbox" id="refund-dropdown" className="toggle"></input>
                            <label className="title" for="refund-dropdown">Refund</label>
                            <div className="content">
                            <p className="">
                                NEW! Accepting Returns
                                We accept returns for store credit, within 3 business days of receipt. Items must be tagged and in new/unworn condition. Read more here.

                                100% Authenticity, Guaranteed
                                We carefully inspect every shoe with a fine toothed comb, twice, to validate its authenticity, and to check for conditional/manufacturing issues to ensure all of our items are pristine . We stand behind every item we sell, so you can feel safe about buying. Learn more about our policies here.
                                </p>
                            </div>
                        </div>
                    </div> 
    
                    <div className="detail-section">
                        <div className="detail">
                            <input type="checkbox" id="sizes-dropdown" className="toggle"></input>
                            <label className="title" for="sizes-dropdown">Sizes</label>
                            <div className="content">
                                <div style={{display: 'flex', flexDirection: 'column' }}>
                                    <div style={{display: 'flex', flexDirection: 'column', width: '100%' }} >
                                        {inStock.map((prod, idx, arr) => {
                                            return (
                                                <option
                                                    ref={this.optionRef} 
                                                    key={idx}
                                                    id='size-option'
                                                    value={prod.size}
                                                    onClick={(e) => { 
                                                        this.updateSize(prod, idx, arr); 
                                                        this.errorMessage(prod); 
                                                        this.reFocusSize(prod, idx, e.target.value);
                                                    }}
                                                    className={prod.stock === 0 ? 'inactive-category' : `${prod.size}` }
                                                >
                                                    {prod.size}
                                                </option>                                  
                                        )})}
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>  

                    <button 
                        ref={this.buttonRef} 
                        onClick={() => addItem({...item})} 
                        className="add-to-cart-btn"
                    >
                        add to cart
                    </button>
                </div>
            </div>
        </div>
        )
    }
};
 
const mapDispatchToProps = dispatch => ({
    addItem: ({...item}) => dispatch(addItem({...item}))
});

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
 

