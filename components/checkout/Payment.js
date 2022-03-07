import React, { useContext, useState } from "react";
import { CartContext } from "../cart/CartContext";
import { useRouter } from "next/router"

export default function Payment() {
    const { basket, total } = useContext(CartContext)
    console.log("Payment container rendered")
    const [showPayButton, setShowPayButton ] = useState('hidden')
    const [showError, setShowError ] = useState('hidden')
    
    function pay() {
        setShowError('')
    }

    if(!basket.length) () => setShowPayButton('hidden')

    return (
        <React.Fragment>
            <span style={{marginTop: '2rem'}}>
                <h4>Payment Method:</h4><br/>    
                <span style={{display: 'grid', gridTemplateColumns: '50% 50%'}} >
                    <button disabled={basket.length ? false : true} onClick={() => setShowPayButton('')} >
                        Credit/Debit
                    </button>
                    <button disabled={basket.length ? false : true} onClick={() => setShowPayButton('')} >
                        Cash
                    </button>
                </span>
            </span>
            <span style={{visibility: showPayButton, marginTop: '2rem'}}>
                <strong>Total: ${total}</strong>
                <button onClick={() => pay()} style={{height: '40px'}}>
                    Pay
                </button>
            </span>
            <span style={{visibility: showError }}>
                <p>
                    ...Processing or Error
                </p>
            </span>
        </React.Fragment>
    )
}