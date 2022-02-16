import React from 'react'
import ItemOnScreen from './ItemOnScreen'
import styles from '../../styles/Selection.module.css'

function Items({items}) {

    if(!items.length) return <p>Sorry, there are currently no items in this category</p>
    console.log("Items container rendered")
    return (
        <div className={styles.itemsOnScreen}>
            {items.map((item, index) => {
                return <ItemOnScreen item={item} key={index}/>
            })}
        </div>
    )

}


export default Items;