// Para que redux funcione, se debe agregar el Provider al App.js e instalar redux y react-redux
// npm i redux react-redux


import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from 'redux-thunk'

import CategoriesReducer from "./reducers/categories-reducer";
import ProductsReducer from "./reducers/products-reducer";
import CartReducer from "./reducers/cart-reducer";
import OrdersReducer from "./reducers/orders-reducer";



const RootReducer = combineReducers({
    categories: CategoriesReducer,
    products: ProductsReducer,
    cart: CartReducer,
    orders: OrdersReducer,
});

// export default createStore(RootReducer, applyMiddleware(thunk));
export default createStore(RootReducer);