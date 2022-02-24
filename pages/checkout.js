import React from 'react'
import { CartProvider } from '../components/cart/CartContext'
import styles from '../styles/Selection.module.css'
import Cart from '../components/cart/Cart'
import Items from '../components/items/Items'
import {useContext} from 'react'
import { AppContext } from '../appState/appState'
import {useRouter} from 'next/router'



function checkout() {
     const router = useRouter();
     const goBack = () => {
          router.push("/selection");
     }
  return (
    <div>
         <button onClick={()=> goBack()}> Go back</button>
         <CartProvider>
               <div className={styles.cartContainer}>
                    <Cart />
               </div>
          </CartProvider>
          <div className='payment-method'>
               <h4>Please select payment method:</h4>
               <div className='payment-button'>
                    <button>Cash</button>
                    <button>Credit/Debit Card</button>
                    <button>Gift Card</button>
               </div>
          </div>
    </div>
  )
}

export default checkout