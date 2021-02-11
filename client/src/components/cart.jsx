import React from 'react'
import cartCtx from '../cart-modules/cart-context';

export default function Cart(props) {
    const { cart, cartTest } = React.useContext(cartCtx);
    

    return (
        <>
        <input value={cart} onChange={(e) => cartTest(e.target.value)}>
        
        </input>
            <h2>{cart}</h2>
        </>
    )
}
