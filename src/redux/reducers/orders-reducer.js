
const initialState = {
    orders: [],
}


export default function  OrdersReducer (state = initialState, action) {
    switch (action.type) {
        case 'ADD_ORDER':
            const now = new Date()
            console.log('---------------------------------------------------------------------');
            console.log('now ',now);
            console.log(now.getTime());
            console.log(now.toLocaleString());

            const order = {
                id: now.getTime(),
                cart: action.cart,
                total: action.total,
                date: now.toLocaleString(),
            };
            const updateOrders = [...state.orders, order];

            return {
                ...state,
                orders: updateOrders,
            }
        case 'REMOVE_ORDER':
            const filterOrders = state.orders.filter(order => order.id !== action.orderId);
            return {
                ...state,
                orders: filterOrders,
            }
        default:
            return state;
    }
}
