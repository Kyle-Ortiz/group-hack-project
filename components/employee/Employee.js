import React, { useContext } from 'react'
import { useRouter } from 'next/router'
import { CartContext } from '../cart/CartContext';

export default function Employee({employeeInfo, changeState}){

    const router = useRouter();
    const { clearCart } = useContext(CartContext);

    const logout = () => {
        changeState({type: "UNSUBSCRIBE_COMPANY"})
        changeState({type: "LOGOUT_USER"})
        changeState({type: "UNSUBSCRIBE_ITEMS"})
        router.push("/")
        clearCart()
    }

    console.log("Ecmployee container rendered ")

    return (
        <React.Fragment>
            <div style={{display: "flex", justifyContent: "flex-end"}}>
                <button onClick={() => logout()} className='clearanceButton'>
                    Logout
                </button>
            </div>
            <div style={{marginRight: "1rem"}}>
                <h4>Current Employee:</h4>
                <p>Name: {employeeInfo.name}</p>
                <p>Employee ID: {employeeInfo.employeeId}</p>
            </div>      
            
        </React.Fragment>
    )
}