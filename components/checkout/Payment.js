import React, { useContext, useState } from "react";
import styles from "../../styles/payment.module.css"
import { CartContext } from "../cart/CartContext";
import { useRouter } from "next/router"

export default function Payment() {
    const router = useRouter()
    const { basket, total } = useContext(CartContext)
    const [showPayButton, setShowPayButton ] = useState('hidden')
    const [showError, setShowError ] = useState('hidden')
    
    function pay() {
        setShowError('')
        setTimeout(()=> {
            router.push("/thankYou")
        }, 3000)
    }
    
    if(!basket.length) ()=>setShowPayButton("hidden")
    console.log("Payment component rendered")
  
    return (
        <React.Fragment>
            <span style={{marginTop: '2rem'}}>
                <h4>Payment Method:</h4><br/>    
                <span className={styles.paymentMethod} >
                    <button disabled={basket.length ? false : true} onClick={() => setShowPayButton('')} >
                        Credit/Debit
                    </button>
                    <button disabled={basket.length ? false : true} onClick={() => setShowPayButton('')} >
                        Cash
                    </button>
                </span>
            </span>
            <span style={{visibility: showPayButton, marginTop: '2rem'}} className={styles.payElement}>
                <strong>Total: ${total}</strong>
                <button onClick={() => pay()} disabled={basket.length ? false : true} >
                    Pay
                </button>
            </span>
            <span style={{visibility: showError }}>
                <p>
                    ...Processing transaction
                </p>
            </span>
        </React.Fragment>
    )
}