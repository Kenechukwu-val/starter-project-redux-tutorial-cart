import {CLEAR_CART,REMOVE,INCREASE,DECREASE} from './actions';

//A reducer function - accepts two parameters
const reducer = (state, action) => {
    //CLEAR_CART reducer function
    if ( action.type === CLEAR_CART ) {
        return { ...state, cart: [] }
    }

    //REMOVE reducer function
    if ( action.type === REMOVE ) {
        return {
            ...state, cart:state.cart.filter((cartItem) => cartItem.id !== action.payload.id)
        }
    }

    //INCREASE reducer function
    if ( action.type === INCREASE ) {
        let newCart = state.cart.map(cartItem => {
            if ( cartItem.id === action.payload.id ) {
                cartItem = { ...cartItem, amount: cartItem.amount + 1 }
            }

            return cartItem

        })

        return {...state, cart: newCart }
    }

    //DECREASE reducer function
    if ( action.type === DECREASE ) {
       let newCart = [];
       if ( action.payload.amount === 1 ) {

           newCart = state.cart.filter((cartItem) => cartItem.id !== action.payload.id)
       }
       else {
            newCart = state.cart.map(cartItem => {
                if ( cartItem.id === action.payload.id ) {
                    cartItem = { ...cartItem, amount: cartItem.amount - 1 }
                }

                return cartItem

            })
       }
       return { ...state, cart:newCart}
    }
    return state;

  }

  export default reducer