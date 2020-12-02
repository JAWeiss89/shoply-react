import React from 'react';
import Store from './Store';
import ProductDetail from './ProductDetail';
import CartDetail from './CartDetail';
import Navbar from './Navbar';
import {Route} from 'react-router-dom';
import '../styles/App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <Store />
      </Route>
      <Route exact path="/products/:id">
        <ProductDetail />
      </Route>
      <Route exact path="/cart">
        <CartDetail />
      </Route>
    </div>
  );
};

export default App;

