import {CLEAR_CART,REMOVE,GET_TOTALS, TOGGLE_AMOUNT} from './actions';
import cartItems from "./cart-items";

//Creating an intialstore to serve as an argument for the redux store
const initialStore = {
    cart: cartItems,
    total: 0,
    amount: 0
  }

//A reducer function - accepts two parameters
const reducer = (state = initialStore, action) => {
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

    // //INCREASE reducer function
    // if ( action.type === INCREASE ) {
    //     let newCart = state.cart.map(cartItem => {
    //         if ( cartItem.id === action.payload.id ) {
    //             cartItem = { ...cartItem, amount: cartItem.amount + 1 }
    //         }

    //         return cartItem

    //     })

    //     return {...state, cart: newCart }
    // }

    // //DECREASE reducer function
    // if ( action.type === DECREASE ) {
    //    let newCart = state.cart.map(cartItem => {
    //         if ( cartItem.id === action.payload.id ) {

    //             cartItem = { ...cartItem, amount: cartItem.amount - 1 }
    //         }

    //             return cartItem

    //         })
    //    return { ...state, cart:newCart}
    // }


    //GET_TOTALS reducer function
    if ( action.type === GET_TOTALS ) {
        let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
            const { price, amount } = cartItem;
            const itemTotal = price * amount;


            cartTotal.total += itemTotal;
            cartTotal.amount += amount;

            return cartTotal
        }, 
        {
            total: 0,
            amount: 0
        })

        total = parseFloat(total.toFixed(2));
        return {...state, total, amount }
    }

    if ( action.type === TOGGLE_AMOUNT ) {
        return { ...state, cart:state.cart.map(cartItem => {
            if ( cartItem.id === action.payload.id ) {
                if( action.payload.toggle === "inc") {
                    cartItem = { ...cartItem, amount: cartItem.amount + 1 }
                }
                if( action.payload.toggle === "dec") {
                    cartItem = { ...cartItem, amount: cartItem.amount - 1 }
                }
            }

            return cartItem
        }
        )}
    }
    return state;

  }

  export default reducer