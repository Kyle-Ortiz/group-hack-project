import React, { useContext } from 'react'
import { useRouter } from 'next/router';
import selectionStyles from '../styles/pages/Selection.module.css'
import styles from '../styles/pages/Checkout.module.css'
import { AppContext } from '../appState/appState';
import { CartProvider } from '../components/cart/CartContext';
import Company from '../components/company/Company';
import Employee from '../components/employee/Employee';
import Cart from '../components/cart/Cart';
import Payment from '../components/checkout/Payment';


function Checkout() {
    const { globalState, changeState } = useContext(AppContext)
    const router = useRouter()
    const company = globalState.companyProfile
    const employee = globalState.users.current_user

    return (
        <div className={selectionStyles.container}>
            <div className={styles.checkoutContainer}>

                <div className={selectionStyles.companyContainer}>
                    <Company company={company} employee={employee}/>
                </div>
                <span>
                    <button onClick={() => router.push('/selection')}>Go Back</button>
                </span>
                <CartProvider>
                    <div className={selectionStyles.employeeContainer}>
                        <Employee employeeInfo={employee} changeState={changeState} />
                    </div>

                    <div className={styles.paymentContainer}>
                        <Payment />
                    </div>
                
                    <div style={{gridArea: "cartBox"}}>
                        <Cart />
                    </div>
                </CartProvider>

            </div>
        </div>
    )
}
export default Checkout;