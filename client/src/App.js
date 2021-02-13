import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import useCart from './cart-modules/use-cart';
import cartCtx from './cart-modules/cart-context';
import Cart from './components/cart';
import ProductItem from './components/product-item';

export default function App(props) {

  const { cart, addToCart, getCartItems, clearCartItems, removeCartItem, changeQty, getItemId, cartTest } = useCart([]);

  return (
    <>
    <cartCtx.Provider value={{
        cart,
        cartTest,
        addToCart,
        getCartItems,
        clearCartItems,
        removeCartItem,
        changeQty,
        getItemId}}>

      <Router>
        <Switch>
          <Route exact path="/" component={Cart} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/products" component={ProductItem} />
          <Route render={() => <h1>404: page not found</h1>} />
        </Switch>
      </Router>

      </cartCtx.Provider>
    </>
  )
}
