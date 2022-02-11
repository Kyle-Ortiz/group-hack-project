import React, {useContext} from 'react'
import { CartContext } from '../cart/CartContext';
import styles from '../../styles/Selection.module.css'

function ItemInCart({item}) {

    const {addCartItem, subtractCartItem, eliminateCartItem } = useContext(CartContext);

    return (
        <div className={styles.itemInCart}>
            <p>{item.name} x {item.quantity} </p>
            <button className={styles.cartButtonCancel} onClick={() => eliminateCartItem(item)}>
                X
            </button>  
            <button className={styles.cartButton} onClick={() => subtractCartItem(item)}> 
                -
            </button>
            <button className={styles.cartButton} onClick={() => addCartItem(item)}>
                +
            </button>
        </div>
    )

}


export default ItemInCart;