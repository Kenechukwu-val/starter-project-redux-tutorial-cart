import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items

//Creating store functions from redux
import {createStore} from 'redux';
import reducer from './reducer';
import {Provider} from 'react-redux'

//A variable which will hold the value
const store = createStore(reducer,  
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

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
