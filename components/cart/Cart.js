import React, { useContext } from 'react'
import ItemInCart from '../items/ItemInCart';
import { CartContext } from './CartContext';
import styles from '../../styles/cart.module.css'
import selectionStyles from '../../styles/pages/Selection.module.css'
import { useRouter } from 'next/router';

function Cart({view, branding}) {

    const router = useRouter();
    console.log("Cart component rendered")

    const { basket, clearCart, total } = useContext(CartContext);
    
    // if(!basket.length) return (
    //     <React.Fragment>
    //         <br/>
    //        <h4>Cart</h4> <p>Your cart is empty. Select items to add them to your cart.</p>
    //        <button className={selectionStyles.checkoutButton} onClick={() => router.push('/checkout')}>
    //             Proceed to Checkout
    //         </button>
    //     </React.Fragment>
    // )
    
    return( 
        <React.Fragment>
            <div className={selectionStyles.cartContainer} style={{ border: branding?.border }} >
                {!basket.length ? (
                    <React.Fragment><br/><h4>Cart</h4> <p>Your cart is empty. Select items to add them to your cart.</p></React.Fragment>
                ) : (
                    <React.Fragment>
                        <div 
                            style={{
                                display: "flex", 
                                flexDirection: "row", 
                                justifyContent:"space-between", 
                                alignItems:"flex-end",
                                margin:"0rem 0rem 0.5rem 0.5rem",    
                            }}
                        >
                        <span>
                            Total: <strong>${total}</strong> 
                        </span> 
                        <button onClick={() => clearCart()} className='clearanceButton'>
                            Clear cart
                            </button>
                        </div>
                        <h4 style={{alignSelf: "center"}}> Cart</h4>
                        <div className={styles.cartList}>
                            {basket.map((item, index) => {
                                return <ItemInCart item={item} key={index} />
                            })}
                        </div>
                        <br/><br/>
                    </React.Fragment>
                )}
            </div>
            <div style={{display: view === "selectionPage" ? "" : "none" }} >
                <button 
                    className={selectionStyles.checkoutButton} 
                    onClick={() => router.push('/checkout')} 
                    disabled={!basket.length ? true : false }
                >
                    Proceed to Checkout
                </button>
            </div>
        </React.Fragment>
    )
}


export default Cart;