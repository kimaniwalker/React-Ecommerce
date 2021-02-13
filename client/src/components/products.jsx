import React from 'react'
import cartCtx from '../cart-modules/cart-context'
import Options from './options'


export default function Products({ id, name, image, sizes, styles, colors }) {



    const [selectedColor, setSelectedColor] = React.useState(colors[0])
    const [selectedStyle, setSelectedStyle] = React.useState(styles[0])
    const [selectedSize, setSelectedSize] = React.useState(sizes[0])
    const [price, setPrice] = React.useState((selectedStyle.price * selectedSize.price).toFixed(2))
    const [cart, setCart] = React.useState([]);
    const ctx = React.useContext(cartCtx)

    React.useEffect(() => {

    }, [])

    return (
        <>
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title text-center">{name}</h5>

                    </div>
                    <img className="card-img-top p-5" src={selectedColor.image} alt={`Image for ${name}`} />
                     {/* <div class="card-body">


                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><Options options={colors}
                            label='Available in'
                            selectedOption={selectedColor}
                            setSelectedOption={setSelectedColor} /></li>
                        <li class="list-group-item"><Options options={styles}
                            label='Available Styles'
                            selectedOption={selectedStyle}
                            setSelectedOption={setSelectedStyle} /></li>
                        <li class="list-group-item"><Options
                            label='Available Sizes'
                            options={sizes}
                            selectedOption={selectedSize}
                            setSelectedOption={setSelectedSize} /></li>
                    </ul>

                </div> */}
                    <div class="card-footer text-muted">
                        {/* <a href="#" class="btn btn-primary" onClick={() => ctx.addToCart({
                        id, name, price, selectedSize, selectedStyle, selectedColor
                    })} >Add to Cart</a>
                    <a href="#" class="btn btn-primary" onClick={() => ctx.removeCartItem(id)}>Remove Item</a> */}
                        <p class="card-text text-center">

                            Price:{(selectedStyle.price * selectedSize.price).toFixed(2)}

                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}