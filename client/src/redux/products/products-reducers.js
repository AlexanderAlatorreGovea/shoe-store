
import { FETCH_PRODUCTS } from './products-types';

const productReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return action.payload
        default: 
            return state;
    }
} 

export default productReducer;