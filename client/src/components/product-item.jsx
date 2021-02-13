import React from 'react'
import products from '../data/products.json'
import Products from './products'


export default function ProductItem(props) {
    

    return (
        <>
         <h1>Products</h1> 
         <div className="container">
            <div className="row products g-3">
             {products.map((product)=>(
                 <Products key={product.id} {...product} />
             ))}
         </div> 
             
        </div>  
         
        </>
    )
}