import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

//Creating store functions from redux
import {createStore} from 'redux';
import reducer from './reducer';
import {Provider} from 'react-redux'

//Creating an intialstore to serve as an argument for the redux store
const initialStore = {
  cart: cartItems,
  total: 105,
  amount: 0
}

//A variable which will hold the value
const store = createStore(reducer, initialStore)

function App() {
  // cart setup

  return (
    //Passing store as a props
    <Provider store={store}>
      <Navbar/>
      <CartContainer/>
    </Provider>
  );
}

export default App;
