import React from 'react'
import ItemInCart from '../items/ItemInCart';

function Cart({items}) {
    console.log("Cart component rendered")

    if(!items.length) return <p>Your cart is empty. Select items to add them to your cart.</p>

    return (
        <div className='cart'>
            {items.map((item, index) => {
                return <ItemInCart item={item} key={index} />
            })}
            <br/><br/>
        </div>
    )

}


export default Cart;