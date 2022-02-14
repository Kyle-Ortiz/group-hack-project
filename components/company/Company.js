import React from 'react'
import styles from '../../styles/Selection.module.css'


export default function Company () {

    console.log("Company rendered")
    
    return (
        <div className={styles.company}>
            <h2>Greens Food Suppliers</h2>
        </div>
    )
}