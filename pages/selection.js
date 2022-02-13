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
    {name: "Orange juice", price: 3.99, category: "Beverages", picture: "https://devblogimages.s3-us-east-2.amazonaws.com/vNviR5jZz3eZajtkKtGqbF.png"}, 
    {name: "Lamp", price: 42.99, category: "Home", picture: "https://camo.githubusercontent.com/1c94b38e955ab102dede85a82e317a3c8b94369c562d559d4663ab030fa5d983/687474703a2f2f7069676d656e742e6769746875622e696f2f66616b652d6c6f676f732f6c6f676f732f766563746f722f636f6c6f722f677265656e732d666f6f642d737570706c696572732e737667"}, 
    {name: "Chicken Alfredo Pasta", price: 7.85, category: "Pasta", picture: "https://devblogimages.s3-us-east-2.amazonaws.com/vNviR5jZz3eZajtkKtGqbF.png"}, 
    {name: "Corn muffin", price: 2.75, category: "Pastries", picture: "https://camo.githubusercontent.com/1c94b38e955ab102dede85a82e317a3c8b94369c562d559d4663ab030fa5d983/687474703a2f2f7069676d656e742e6769746875622e696f2f66616b652d6c6f676f732f6c6f676f732f766563746f722f636f6c6f722f677265656e732d666f6f642d737570706c696572732e737667"},
    {name: "Steak", price: 12.68, category: "Meats", picture: "https://devblogimages.s3-us-east-2.amazonaws.com/vNviR5jZz3eZajtkKtGqbF.png"},
    {name: "Spinach", price: 5.99, category: "Fruits & Vegetables", picture: "https://camo.githubusercontent.com/1c94b38e955ab102dede85a82e317a3c8b94369c562d559d4663ab030fa5d983/687474703a2f2f7069676d656e742e6769746875622e696f2f66616b652d6c6f676f732f6c6f676f732f766563746f722f636f6c6f722f677265656e732d666f6f642d737570706c696572732e737667"},
    {name: "Corn", price: 0.99, category: "vegetables", picture: "https://devblogimages.s3-us-east-2.amazonaws.com/vNviR5jZz3eZajtkKtGqbF.png"},
    {name: "Strawberriessssss", price: 4.99, category: "Fruits & Vegetables", picture: "https://camo.githubusercontent.com/1c94b38e955ab102dede85a82e317a3c8b94369c562d559d4663ab030fa5d983/687474703a2f2f7069676d656e742e6769746875622e696f2f66616b652d6c6f676f732f6c6f676f732f766563746f722f636f6c6f722f677265656e732d666f6f642d737570706c696572732e737667"},
    {name: "Apple", price: 0.99, category: "Fruits & Vegetables", picture: "https://devblogimages.s3-us-east-2.amazonaws.com/vNviR5jZz3eZajtkKtGqbF.png"},
    {name: "Watermelon", price: 3.99, category: "Fruits & Vegetables", picture: "https://camo.githubusercontent.com/1c94b38e955ab102dede85a82e317a3c8b94369c562d559d4663ab030fa5d983/687474703a2f2f7069676d656e742e6769746875622e696f2f66616b652d6c6f676f732f6c6f676f732f766563746f722f636f6c6f722f677265656e732d666f6f642d737570706c696572732e737667"},

    {name: "Spinach", category: "Fruits & Vegetables"},
    {name: "Corn", category: "Fruits & Vegetables"},
    {name: "Strawberries", category: "Fruits & Vegetables"},
    {name: "Apple", category: "Fruits & Vegetables"},
    {name: "Watermelon", category: "Fruits & Vegetables"}
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