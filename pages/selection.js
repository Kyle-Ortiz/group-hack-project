import React, {useContext} from 'react'
import Cart from '../components/cart/Cart'
import { CartContext } from '../components/cart/CartContext'
import Categories from '../components/Categories'
import CompanyLogo from '../components/company/CompanyLogo'
import Employee from '../components/employee/Employee'
import Items from '../components/items/Items'
import styles from '../styles/Selection.module.css'

const itemsList = [
    {name: "Orange juice", category: "Beverages"}, 
    {name: "Lamp", category: "Home"}, 
    {name: "Chicken Alfredo", category: "Pasta"}, 
    {name: "Corn muffin", category: "Pastries"}
]

const employeeInfo = {
    name: "John Doe",
    employeeId: "12345"
}

const categoriesList = [
    "Home", "Beverages", "Pasta", "Pastries"
]

function Selection() {

  const { basket } = useContext(CartContext);

  return (
      <div className={styles.container}>
          <div className={styles.main}>
                <div className={styles.selectionContainer}>

                        <div className={styles.companyContainer}>
                            <CompanyLogo />
                            <h4>Greens Food Suppliers</h4>
                        </div>

                        <div className={styles.employeeContainer}>
                            <h4>Employee</h4>
                            <Employee employeeInfo={employeeInfo}/>
                        </div>

                        <div className={styles.itemSearch}>
                            <h4>Search Item</h4>
                            <input type="text" ></input>
                        </div>

                        <div className={styles.categoriesContainer}>
                            <h4>Categories</h4>
                            <Categories categories={categoriesList} />
                        </div>

                        <div className={styles.cartContainer}>
                            <h4>Cart</h4>
                            <Cart items={basket} />
                        </div>

                        <div className={styles.itemsContainer}>
                            <h4>Items</h4>
                            <Items items={itemsList}/>
                        </div>
                        
                </div>
            </div>
      </div>
  )


}

export default Selection;