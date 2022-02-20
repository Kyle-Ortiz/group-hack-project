import React, { useContext } from 'react'
import Cart from '../components/cart/Cart'
import { CartProvider } from '../components/cart/CartContext'
import { ItemSearchCategoriesAndItemsProvider } from '../components/ItemSearchCategoriesAndItemsContext'
import { AppContext } from '../appState/appState'
import Categories from '../components/Categories'
import Company from '../components/company/Company'
import Employee from '../components/employee/Employee'
import Items from '../components/items/Items'
import NavBar from '../components/navbar/NavBar'
import styles from '../styles/Selection.module.css'
import ItemOnScreen from '../components/items/ItemOnScreen'
import ItemSearch from '../components/items/ItemSearch'


export const subscribedCompanies = [
    {
        name: "Greens Food Suppliers",
        logo: "https://camo.githubusercontent.com/1c94b38e955ab102dede85a82e317a3c8b94369c562d559d4663ab030fa5d983/687474703a2f2f7069676d656e742e6769746875622e696f2f66616b652d6c6f676f732f6c6f676f732f766563746f722f636f6c6f722f677265656e732d666f6f642d737570706c696572732e737667",
        description: "Delivering outstanding groceries!",
        industry: [],
        categories: ["Dairy and Juices", "Beverages", "Pasta", "Pastries", "Meats", "Electronics", "Cleaning", "Canned"],
    },
    {
        name: "TODO Retailers",
        logo: "https://devblogimages.s3-us-east-2.amazonaws.com/vNviR5jZz3eZajtkKtGqbF.png",
        description: "All your clothig needs in one place.",
        industry: [],
        categories: ["Pants", "Skirts", "Blouses", "Belts", "Sneakers", "Shoes", "Shirts", "Jackets"],
    },
    {
        name: "Tech Master",
        logo: "https://devblogimages.s3-us-east-2.amazonaws.com/3nn1XRJDj5sxRoe9F4WnJd.png",
        description:"We are the experts in computer hardware." ,
        industry: [],
        categories: ["Laptops", "Desktops", "Tablets", "Monitors", "Chargers", "Keyboards", "Mouses", "Screen Protection"],
    },
    {
        name: "Decora",
        logo: "https://devblogimages.s3-us-east-2.amazonaws.com/iv4dL1dUoCmfmo3eAH4Drs.jpeg",
        description: "Make your home comfty: Decora.",
        industry: [],
        categories: ["Tables", "Sofas", "Lamps", "Desks", "Frames", "Mirrors", "Drawers", "Bookshelf"],
    }
    
]

export const employees = [
    {name: "Kate Collins", employeeId: "54321", password: "posapp", isAdmin: true},
    {name: "Pete Waters", employeeId: "12345", password: "posapp", isAdmin: false}
]

export const itemsList = [
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

console.log("Main page rendered")


function Selection() {

  const { globalState, changeState } = useContext(AppContext) 
  const employee = globalState.users.current_user;
  const company = globalState.companyProfile;
  const pureItems = globalState.items;

  console.log(globalState)  
  console.log("Main page rendered inside component")

  let itemsForContainer = [];
  let itemsForDatalist  = [];

  pureItems.forEach((item, index) => {
    console.log("Full items iteration called")
    itemsForContainer.push(<ItemOnScreen item={item} key={index} />)
    itemsForDatalist.push(<option value={item.name} key={index} dataid={index} />)
  })

  
  return (
      <div className={styles.container}>          
            <div className={styles.selectionContainer}>
                    
                <div className={styles.companyContainer}>
                    <NavBar />     
                    <Company company={company} />
                </div>

                <div className={styles.employeeContainer}>
                    <Employee employeeInfo={employee} changeState={changeState} />
                </div>

                <ItemSearchCategoriesAndItemsProvider>
                    <div className={styles.itemSearchAndcategoriesContainer}>
                        <ItemSearch pureItems={pureItems} itemsForDatalist={itemsForDatalist} />
                        <hr/>
                        <Categories categories={company.categories}  />
                    </div>
                    
                    <CartProvider>
                        <div className={styles.cartContainer}>
                            <Cart />
                        </div>
                        <button className={styles.checkoutButton}>Proceed to Checkout</button>
                        
                        <div className={styles.itemsContainer}>
                            <div>
                                <h4>Items</h4>
                            </div>
                            <Items pureItems={pureItems} itemsForContainer={itemsForContainer} />
                        </div>
                    </CartProvider>
                </ItemSearchCategoriesAndItemsProvider>
                
            </div>
      </div>
  )


}

export default Selection;