import React, { useContext, useState } from "react";
import styles from "../../styles/payment.module.css"
import { CartContext } from "../cart/CartContext";
import { useRouter } from "next/router"
import { RadioGroup } from '@headlessui/react'

const paymenMethods = [
    {
      name: 'Credit/Debit',
      value: 'credit/debit'
    },
    {
      name: 'Cash',
      value: 'cash'
    },
  ]

export default function Payment() {
    const router = useRouter()
    const { basket, total, clearCart } = useContext(CartContext)
    const [showPayButton, setShowPayButton ] = useState('hidden')
    const [showError, setShowError ] = useState('hidden')
    
    function pay() {
        setShowError('')
        setTimeout(()=> {
            router.push("/thankYou")
            clearCart()
        }, 3000)
    }

    console.log("Payment component rendered")

   // Tailwind CSS radio group component variables
    const [selected, setSelected] = useState({})
      
    // Tailwind CSS radio group component function
    function CheckIcon(props) {
        return (
            <svg viewBox="0 0 24 24" fill="none" {...props}>
            <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
            <path
                d="M7 13l3 3 7-7"
                stroke="#fff"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            </svg>
        )
    }

     
    if(!basket.length) return (
        <div className="text-center">
             <p className="text-xl font-bold">You cart needs at least 1 item to proceed with payment</p>
        </div>
    )
  
    return (
        <React.Fragment>
            <span style={{marginTop: '2rem'}}>
                <h4>Select a payment method:</h4><br/>    
                {/* Tailwind CSS component */}
                <RadioGroup 
                    value={selected} 
                    onChange={(event)=> {
                        setShowPayButton("")
                        setSelected(event)
                    }}>
                    <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
                    <div className={styles.paymentMethod}>
                        {paymenMethods.map((method) => (
                            <RadioGroup.Option
                                key={method.name}
                                value={method}
                                disabled={basket.length ? false : true} 
                                className={({ checked }) =>                                 
                                    `${
                                        checked ? 'border-indigo-700 bg-indigo-700 text-white' : 'bg-white'
                                    }
                                    relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none hover:bg-indigo-600`
                                }
                            >
                                {({ checked }) => (
                                    <>
                                        <div className="flex items-center justify-between w-full">
                                            <div className="flex items-center">
                                                <div className="text-sm">
                                                    <RadioGroup.Label
                                                        as="p"
                                                        className={`font-medium ${
                                                            checked ? 'text-white' : 'text-gray-900'
                                                        }`}
                                                        >
                                                        {method.name}
                                                    </RadioGroup.Label>
                                                </div>
                                            </div>
                                            {checked && (
                                                <div className="flex-shrink-0 text-white">
                                                    <CheckIcon className="w-6 h-6" />
                                                </div>
                                            )}
                                        </div>
                                    </>
                                )}
                            </RadioGroup.Option>
                        ))}
                    </div>
                </RadioGroup>
            </span>
            <span style={{visibility: showPayButton, marginTop: '2rem'}} className={styles.payElement}>
                <p className="text-lg font-bold ">Total: ${total}</p>
                <button onClick={() => pay()} disabled={basket.length ? false : true} className="bg-slate-700 font-medium cursor-pointer text-white rounded-md hover:bg-slate-800">
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

