import React, { useContext } from 'react'
import styles from '../styles/categoryList.module.css'
import { ItemSearchCategoriesAndItemsContext } from './ItemSearchCategoriesAndItemsContext'

export default function Categories({categories}) {
    const { setSelectedCategory } = useContext(ItemSearchCategoriesAndItemsContext)
    console.log("Categories container rendered")
    return (
        <React.Fragment>
            <div style={{ display: "flex", justifyContent: "space-between"}} >
                <h4>Categories</h4>
                <button onClick={() => setSelectedCategory()}>
                    Clear category
                </button>
            </div>
            <div className={styles.categoryListWrapper} >
                <div className={styles.categoryList}>
                    {categories.map((category,index) => {
                        console.log("Individual category rendered")
                        return ( 
                            <div 
                                key={index} 
                                className={styles.individualCategory} 
                                onClick={() => setSelectedCategory(category)}
                            >{category}
                            </div>
                        )
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}