import { style } from '@mui/system'
import React, {useContext} from 'react'
import Cart from '../components/cart/Cart'
import { CartContext } from '../components/cart/CartContext'
import Categories from '../components/Categories'
import Company from '../components/company/Company'
import Employee from '../components/employee/Employee'
import Items from '../components/items/Items'
import NavBar from '../components/navbar/NavBar'
import styles from '../styles/Selection.module.css'

const itemsList = [
    {name: "Orange juice", category: "Beverages"}, 
    {name: "Lamp", category: "Home"}, 
    {name: "Chicken Alfredo Pasta", category: "Pasta"}, 
    {name: "Corn muffin", category: "Pastries"},
    {name: "Steak", category: "Meats"},
    {name: "Spinach", category: "Vegetables"},
    {name: "Corn", category: "vegetables"},
    {name: "Strawberries", category: "Fruits"},
    {name: "Apple", category: "Fruits"},
    {name: "Watermelon", category: "Fruits"}
]

const employeeInfo = {
    name: "John Doe",
    employeeId: "12345"
}

const categoriesList = [
    "Home", "Beverages", "Pasta", "Pastries", "Furniture", "Electronics", 
    "School", "Babies", "Cleaning", "Selfcare"
]

function Selection() {

  const { basket } = useContext(CartContext);

  return (
      <div className={styles.container}>
          <div className={styles.main}>
                <div className={styles.selectionContainer}>
                        
                        <div className={styles.companyContainer}>
                            <NavBar />     
                            <Company />
                        </div>

                        <div className={styles.employeeContainer}>
                            <h4>Current Employee:</h4>
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
                            <h4 className={styles.stickyTop}>Cart</h4>
                            <Cart items={basket} />
                        </div>

                        <button className={styles.checkoutButton}>Proceed to Checkout</button>

                        <div className={styles.itemsContainer}>
                            <div>
                                <h4>Items</h4>
                                <p>Styling in progress</p>
                            </div>
                            <Items items={itemsList}/>
                        </div>
                        
                </div>
            </div>
      </div>
  )


}

export default Selection;