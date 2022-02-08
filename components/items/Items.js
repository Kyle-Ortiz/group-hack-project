import React from 'react'
import ItemOnScreen from './ItemOnScreen'
import styles from '../../styles/Selection.module.css'

function Items({items}) {

    if(!items.length) return <p>Sorry, no items to display</p>

    return (
        // <div className='itemsScreen'>
        <div className={styles.itemsOnScreen}>
            {items.map((item, index) => {
                return <ItemOnScreen item={item} key={index}/>
            })}
        </div>
    )



}


export default Items;