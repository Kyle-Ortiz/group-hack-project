import React, { useContext } from 'react'
import ItemInCart from '../items/ItemInCart';
import { CartContext } from './CartContext';
import styles from '../../styles/cart.module.css'

function Cart() {

    console.log("Cart component rendered")

    const { basket, clearCart } = useContext(CartContext);
    
    if(!basket.length) return (
        <React.Fragment>
            <br/>
           <h4>Cart</h4> <p>Your cart is empty. Select items to add them to your cart.</p>
        </React.Fragment>
    )
    
    return (
        <React.Fragment>
            <div style={{display: "flex", flexDirection: "column", alignItems: "flex-end"}}>
                <button onClick={() => clearCart()}>Clear cart</button>
                <h4 style={{alignSelf: "center"}}> Cart</h4>
            </div>
            <div className={styles.cartList}>
                {basket.map((item, index) => {
                    return <ItemInCart item={item} key={index} />
                })}
            </div>
            <br/><br/>
        </React.Fragment>
    )

}


export default Cart;