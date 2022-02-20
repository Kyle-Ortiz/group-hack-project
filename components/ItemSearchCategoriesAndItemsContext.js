import React, { createContext, useMemo, useState } from 'react'

export const ItemSearchCategoriesAndItemsContext = createContext()

export const ItemSearchCategoriesAndItemsProvider = ({children}) => {

    const [selectedCategory, setSelectedCategory] = useState();
    const [searchedItem, setSearchedItem] = useState();

    const value = useMemo(() => (
        {
            selectedCategory, 
            setSelectedCategory,
            searchedItem,
            setSearchedItem
        }
    ), [selectedCategory, setSelectedCategory, searchedItem, setSearchedItem])

    return (
        <ItemSearchCategoriesAndItemsContext.Provider value = {value}>
            {children}
        </ItemSearchCategoriesAndItemsContext.Provider>
    )
}