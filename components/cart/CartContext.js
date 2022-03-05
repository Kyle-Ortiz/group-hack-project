import React, {useState, createContext } from 'react'

export const CartContext =  createContext();

const itemsList = new Map();

let total = 0;

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
        total = (Number(total) + item.price).toFixed(2)
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
        total = (Number(total) - item.price).toFixed(2)
        setBasket([...itemsList.values()])
    }
       
    function eliminateCartItem(item){
        itemsList.delete(item.name)
        total = (Number(total) - item.quantity*item.price).toFixed(2)
        setBasket([...itemsList.values()])
    }

    function clearCart() {
        itemsList.clear();
        total = 0
        setBasket([])
    }

    return (
        <CartContext.Provider 
            value= {{
                addCartItem,
                subtractCartItem,
                eliminateCartItem,
                clearCart,
                basket,
                total
            }} 
        >
            {children}
        </CartContext.Provider>
    )

}
