import React from 'react'

export default function UseCart(props) {

    /* const [cart , setCart] = React.useState('Testingggg') */
    const [cart, setCart] = React.useState(
        () => JSON.parse(localStorage.getItem('cart')) || []
    );





    React.useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, ['cart', cart]);

    function cartTest(value) {
        setCart(value)
    }

    function addToCart(product) {
        setCart((prev) => {
            const existing = cart.find((item) => item.id === product.id,);

            return existing
                ? [...cart.map((item) => item.id === product.id
                    ? { ...item, qty: item.qty + 1 }
                    : item,
                ),
                ]
                : [...prev, { ...product, qty: 1 }]

        })




        /* setCart((prev) => [...prev, { ...product , qty:1 }])
        localStorage.setItem('cart', JSON.stringify([...cart, product])) */



    }

    function changeQty(product, qty) {
        if (qty === 0 ) return removeCartItem(product.id)
        setCart((prev) => [
            ...prev.map((item) => item.id === product.id ? { ...item, qty } : item,)
        ])
    }



    function getCartItems() {
        const data = localStorage.getItem('cart')
        if (!data) return []
        return JSON.parse(data)
    }

    function clearCartItems() {
        setCart([])
        return cart;
    }

    function removeCartItem(id) {
        const itemId = getItemId(id)
        console.log(itemId)

        if (!itemId) return []
        const result = cart.filter(cartItem => cartItem.id !== itemId)
        console.log(result)

        setCart(result)
        return result


    }

    function getItemId(id) {
        console.log(id)
        return id

    }


    return{ 
       
        cart,
        cartTest,
        addToCart,
        getCartItems,
        clearCartItems,
        removeCartItem,
        changeQty,
        getItemId   
        
    }
    
}
