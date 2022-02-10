import React, {useContext} from 'react'
import { CartContext } from '../cart/CartContext';

function ItemInCart({item}) {

    const {addCartItem, subtractCartItem, eliminateCartItem } = useContext(CartContext);

    return (
        <div className='itemInCart'>
            <p>{item.name} x {item.quantity}</p>
            <button onClick={() => eliminateCartItem(item)}>
                X
            </button>  
            <button onClick={() => subtractCartItem(item)}> 
                -
            </button>
            <button onClick={() => addCartItem(item)}>
                +
            </button>
        </div>
    )

}


export default ItemInCart;