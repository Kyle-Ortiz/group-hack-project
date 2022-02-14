import React, { createContext } from 'react'
import itemsReducer from './reducers/itemsReducer';
import usersReducer from './reducers/usersReducer';

const AppContext = createContext();


const globalState = {
    items: () => itemsReducer(),
    users: () => usersReducer()
}

const aggregateReducer = {}

export const AppProvider = ({children}) => {

    const value = { usersReducer }

    return (
        <AppContext.Provider value = {value}> 
            {children}
        </AppContext.Provider >
    )
}