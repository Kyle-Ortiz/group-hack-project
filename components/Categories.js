import React, { useContext } from 'react'
import styles from '../styles/categories.module.css'
import { ItemSearchCategoriesAndItemsContext } from './ItemSearchCategoriesAndItemsContext'

export default function Categories({ categories, branding }) {

    const { selectedCategory, setSelectedCategory } = useContext(ItemSearchCategoriesAndItemsContext)
    console.log("Categories container rendered")

    let resetRadio = selectedCategory ? {} : {backgroundColor: "inherit", fontWeight: "inherit", color: "inherit"}

    return (
        <React.Fragment>
            <div style={{ display: "flex", justifyContent: "space-between"}} >
                <h4>Categories</h4>
                <button onClick={() => setSelectedCategory()} className='clearanceButton'>
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
                                // style= {{backgroundColor: branding.color }} 
                                onClick={() => setSelectedCategory(category)}
                            >
                                <input type='radio' name="category" />
                                <label style={resetRadio}>
                                    {category}
                                </label>
                            </div>
                        )
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}


// export default function Categories({categories}) {
//     const { setSelectedCategory } = useContext(ItemSearchCategoriesAndItemsContext)
//     console.log("Categories container rendered")
//     return (
//         <React.Fragment>
//             <div style={{ display: "flex", justifyContent: "space-between"}} >
//                 <h4>Categories</h4>
//                 <button onClick={() => setSelectedCategory()}>
//                     Clear category
//                 </button>
//             </div>
//             <div className={styles.categoryListWrapper} >
//                 <div className={styles.categoryList}>
//                     {categories.map((category,index) => {
//                         console.log("Individual category rendered")
//                         return ( 
//                             <div 
//                                 key={index} 
//                                 className={styles.individualCategory} 
//                                 // className={styles.categoryButton} 
//                                 onClick={() => setSelectedCategory(category)}
//                             >{category}
//                             </div>
//                         )
//                     })}
//                 </div>
//             </div>
//         </React.Fragment>
//     )
// }