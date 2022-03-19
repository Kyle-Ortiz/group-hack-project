import React, {useEffect} from 'react';
import { useRouter } from 'next/router';

const ThankYou= () => {

    const router = useRouter();
    
    useEffect(() => {
        setTimeout(()=> {
            router.push("/selection")
        }, 3000)
        return () => {
            console.log("Pending timeout cleanup")
        };
    });

    return(
        <div>Thank you for your purchase!</div>
    )
}

export default ThankYou;
