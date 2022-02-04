import { CART } from '../../utils/data/dataCart.js';

const initialState = {
    items: [],
    total: 0
}

const sumTotal = (items) => items
    .map(item => item.quantity * item.product.price)
    .reduce((a, b) => a + b, 0);


export default function CartReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_CART_ITEM':
            let updateCart = [];
            if (state.items.find(item => item.product.id === action.product.id)) {
                updateCart = state.items.map(item => {
                    if (item.product.id === action.product.id) item.quantity++;
                    return item;
                });
            } else {
                const item = { product: action.product, quantity: 1 };
                updateCart = [...state.items, item];
            }
            return {
                ...state,
                items: updateCart,
                total: sumTotal(updateCart)
            }
        case 'REMOVE_CART_ITEM':
            const filterCart = state.items.filter(item => item.product.id !== action.itemId);
            return {
                ...state,
                items: filterCart,
                total: sumTotal(filterCart)
            }
        case 'REMOVE_ALL_CART_ITEMS':
            return {
                ...state,
                items: [],
                total: 0
            }
        default:
            return state;
    }
}
