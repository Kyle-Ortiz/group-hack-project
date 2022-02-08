import React, {useState, createContext } from 'react'

export const CartContext =  createContext();

const itemsList = new Map();

export const CartProvider = ( {children }) => {

    const [basket, setBasket] = useState([]);
    
    function addCartItem(item){
        const { name } = item
        
        if(!itemsList.has(name)){
            itemsList.set(name, {...item, quantity: 1})
        }
        else {
            const updatedItem = itemsList.get(name)
            updatedItem.quantity++
            itemsList.set(name, updatedItem)
        }
        // convert the values of the itemsList map into an array
        setBasket([...itemsList.values()])
    }

    function subtractCartItem(item){
        const { name } = item
        const updatedItem = itemsList.get(name);

        if(updatedItem.quantity === 1){
            itemsList.delete(name)
        }
        else {
            updatedItem.quantity--
            itemsList.set(name, updatedItem)
        }
        setBasket([...itemsList.values()])
    }
       
    function eliminateCartItem(item){
        itemsList.delete(item.name)
        setBasket([...itemsList.values()])
    }

    return (
        <CartContext.Provider 
            value= {{
                addCartItem,
                subtractCartItem,
                eliminateCartItem,
                basket
            }} 
        >
            {children}
        </CartContext.Provider>
    )

}
