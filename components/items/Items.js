import React, { useContext } from 'react'
import ItemOnScreen from './ItemOnScreen'
import styles from '../../styles/items.module.css'
import { ItemSearchCategoriesAndItemsContext } from '../ItemSearchCategoriesAndItemsContext'

function Items({ pureItems, itemsForContainer }) {
    let renderedItems;
    const { selectedCategory, searchedItem } = useContext(ItemSearchCategoriesAndItemsContext);

    if(!pureItems.length) return <p>Sorry, there are currently no items to display.</p>

    console.log("Items container rendered")
    
    if(selectedCategory) {
        const filtered = pureItems.filter(item => item.category === selectedCategory)
        if(filtered.length) renderedItems = filtered.map((item, index) => <ItemOnScreen item={item} key={index}/> )
        else return <p>Sorry, there are currently no items in this category.</p>
    } else if(searchedItem){
        renderedItems = <ItemOnScreen item={searchedItem} />
    } else renderedItems = itemsForContainer
    
    return (
        <div className={styles.itemsOnScreen}>
            {renderedItems}
        </div>
    )

}


export default Items;