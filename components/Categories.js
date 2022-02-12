import styles from '../styles/categoryList.module.css'

export default function Categories({categories}) {
    return (
        <div className={styles.categoryList}>
            {categories.map((category,index) => {
                return <div key={index} className={styles.individualCategory} >
                    {category}
                </div>
            })}
        </div>
    )
}