import React, { useContext} from 'react'
import ItemInCart from '../items/ItemInCart';
import { CartContext } from './CartContext';

// function Cart({items}) {
function Cart() {
    console.log("Cart component rendered")

    const { basket, clearCart } = useContext(CartContext);
    
    if(!basket.length) return <p>Your cart is empty. Select items to add them to your cart.</p>

    return (
        <div className='cart'>
            <button onClick={() => clearCart()}>Clear cart</button>
            <h4>Cart</h4>
            {basket.map((item, index) => {
                return <ItemInCart item={item} key={index} />
            })}
            <br/><br/>
        </div>
    )

}


export default Cart;