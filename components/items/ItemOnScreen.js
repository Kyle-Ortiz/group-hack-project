import React, { useContext } from 'react'
import { CartContext } from '../cart/CartContext';

function ItemOnScreen({item}){

    const { addCartItem } = useContext(CartContext);

    return(
        <div className='"individualItem' onClick={() => addCartItem(item)}>
        {/* <div className='"individualItem' > */}
            <div>{item.picture}</div>
            <p>{item.name}</p>
        </div>
    )

}

export default ItemOnScreen;