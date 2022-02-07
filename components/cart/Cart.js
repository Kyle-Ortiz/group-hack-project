import React from 'react'
import ItemInCart from '../items/ItemInCart';

function Cart({items}) {

    if(!items) return <p>You cart is empty</p>

    // const set = new Set(items);

    return (
        <div className='cart'>
            {items.map((item, index) => {
                return <ItemInCart item={item} key={index} />
            })}
        </div>
    )

}


export default Cart;