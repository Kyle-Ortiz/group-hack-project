import React, {useEffect} from 'react';
import styles from "../styles/pages/ThankYou.module.css"
import { useRouter } from 'next/router';

const ThankYou= () => {

    const router = useRouter();
    
    useEffect(() => {
        // setTimeout(()=> {
        //     router.push("/selection")
        // }, 3000)
        return () => {
            console.log("Pending timeout cleanup")
        };
    });

    return(
        <div className={styles.base}>
            <div></div>
        <div className={styles.thankYouContainer}><h1>Thank you for your purchase!</h1></div>
            <div></div>
        </div>
    )
}

export default ThankYou;
