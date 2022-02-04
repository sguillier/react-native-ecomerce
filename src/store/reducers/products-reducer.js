import { PRODUCTS } from '../../utils/data/dataProducts.js';

const initialState = {
    products: PRODUCTS,
    filteredProducts: [],
    selected: null,
}

export default function ProductsReducer(state = initialState, action) {
    switch (action.type) {
        case 'SELECT_PRODUCT':
            return {
                ...state,
                selected: state.products.find(product => product.id === action.productId)
            }
        case 'FILTER_PRODUCTS':
            return {
                ...state,
                filteredProducts: state.products.filter(product => product.categoryId == action.categoryId)
            }
        default:
            return state;
    }
}

