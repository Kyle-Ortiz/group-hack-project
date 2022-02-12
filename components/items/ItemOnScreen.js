import React, { useContext } from 'react'
import { CartContext } from '../cart/CartContext';
import styles from '../../styles/Selection.module.css'
function ItemOnScreen({item}){

    const { addCartItem } = useContext(CartContext);

    return(
        <div className={styles.individualItemContainer} onClick={() => addCartItem(item)}>
            <div className={styles.individualItem} >
                <div>{item.picture}</div>
                <p>{item.name}</p>
            </div>
        </div>
    )

}

export default ItemOnScreen;