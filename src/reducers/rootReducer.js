import data from '../data.json';

const products = data.products;

const INITIAL_STATE = {cart: [], products};

const rootReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADDTOCART':
            return {...state, cart: [...state.cart, action.payload]};
        case 'REMOVEFROMCART':
            const index = state.cart.indexOf(action.payload);
            const newCart = [...state.cart];
            newCart.splice(index,1);
            return {...state, cart: newCart};
        default:
            return state;
    }
};

export default rootReducer;