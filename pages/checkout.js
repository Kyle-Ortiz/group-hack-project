import React from 'react'
import { CartProvider } from '../components/cart/CartContext'
import styles from '../styles/Selection.module.css'
import Cart from '../components/cart/Cart'
import Items from '../components/items/Items'
import {useContext} from 'react'
import { AppContext } from '../appState/appState'
import {useRouter} from 'next/router'
import { useState } from 'react'



function checkout() {
     const router = useRouter();
     const goBack = () => {
          router.push("/selection");
     }
     const [payed,setPayed] = useState(false);
     const [payButton, setPayButton] = useState(true);
     const customerPay = () => { 
          setPayed(true);
          setPayButton(false)
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
               <div>
                    {payButton ? <button onClick={()=> customerPay()}>Pay Now</button> : null}
               </div>
               {payed ? <div>
                    <h4>Payment successful</h4>
                    <button onClick={() => goBack()}>Start New Order</button>
                    </div> : null}
          </div>
    </div>
  )
}

export default checkout