import axios from 'axios';
import { FETCH_PRODUCTS } from './products-types'; 

export const fetchProducts = () => async dispatch => {
    const response = await axios.get(`http://localhost:4000/api/v1/products`);

    dispatch({ type: FETCH_PRODUCTS, payload: response.data.data.data })
};


 