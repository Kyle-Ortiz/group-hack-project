import React, { useContext, useRef } from 'react'
import styles from '../../styles/items.module.css'
import { ItemSearchCategoriesAndItemsContext } from '../ItemSearchCategoriesAndItemsContext';


function ItemSearch({pureItems, itemsForDatalist}) {

    const datalist_ref = useRef();
    const { setSearchedItem, setSelectedCategory, selectedCategory } = useContext(ItemSearchCategoriesAndItemsContext)

    console.log(datalist_ref)

    const handleDatalistChange = () => {
        const search = pureItems.find(item => item.name === datalist_ref.current?.value)
        console.log(datalist_ref)
        setSearchedItem(search)
        setSelectedCategory()
    }

    const clearSearch = () => {
        console.log("hello")
        console.log(datalist_ref)
        if(datalist_ref.current) datalist_ref.current.value = ""
        setSearchedItem()
    }

    if(selectedCategory) clearSearch()
    

    return (
        <div className={styles.itemSearch}>
            <div style={{ display: 'flex', justifyContent: "space-between"}}>
                <h4>Search Item</h4>
                <button onClick={() => clearSearch()}>
                    Clear search
                </button>
            </div>
            
            <input 
                type="text" 
                list="item-search" 
                ref={datalist_ref} 
                onChange={handleDatalistChange}
            />
            <datalist id="item-search">
                {itemsForDatalist}
            </datalist>
        </div>
    )
}

export default ItemSearch;