import React from 'react'
import ItemInCart from '../items/ItemInCart';

function Cart({items}) {

    if(!items) return <p>You cart is empty</p>

    const set = new Set(items);
    
    return (
        <div className='cart'>
            {set.forEach(item => {
                return <ItemInCart item={item} />
            })}
        </div>
    )

}


export default Cart;