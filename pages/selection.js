import React from 'react'
import Cart from '../components/cart/Cart'
import Categories from '../components/categories'
import CompanyLogo from '../components/company/CompanyLogo'
import Employee from '../components/employee/employee'
import Items from '../components/items/Items'


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

  return (
      <div className='selectionContainer'>

            <div className='companyContainer'>
                <CompanyLogo />
            </div>

            <div className='employeeContainer'>
                <Employee employeeInfo={employeeInfo}/>
            </div>

            <div className='itemSearch'>
                <input type="text" ></input>
            </div>

            <div className='categoriesContainer'>
                <Categories categories={categoriesList} />
            </div>

            <div className='cartContainer'>
                <Cart />
            </div>

            <div className='itemsContainer'>
                <Items items={itemsList}/>
            </div>
            
      </div>
  )


}

export default Selection;