export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, qty: 1 }]
            }
        case 'REMOVE_TO_CART':
            return {
                ...state,
                cart: state.cart.filter((ar) => ar.id !== action.payload.id)
            }


        case 'CHANGE_CART_QTY':
            return {
                ...state,
                cart: state.cart.filter((ar) => ar.id === action.payload.id ? ar.qty = action.payload.qty : ar.qty)
            }

        default:
            return state
    }

}


export const productReducer = (state, action) => {
    switch (action.type) {
        case 'SORT_BY_PRICE':
            return {
                ...state,
                sort: action.payload
            }

        case 'BySearch':
            return {
                ...state,
                Searchquery: action.payload
            }
        case 'BYSTOCK':
            return {
                ...state,
                byStock: !state.byStock
            }

        case 'ByFastDelivery':
            return {
                ...state,
                byFastDelivery: !state.byFastDelivery
            }
        case 'BYRATING':
            return {
                ...state,
                byRating: action.payload
            }
        case 'CLEAR_FILTER':
            return {
                byStock: false,
                byRating: 0,
                byFastDelivery: false,
            
            }

        default:
            return state
    }
}


export default { cartReducer, productReducer }