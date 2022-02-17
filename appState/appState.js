import React, { createContext, useMemo, useState } from 'react'
import companies from './reducers/companies';
import itemsReducer from './reducers/itemsReducer';
import usersReducer from './reducers/usersReducer';
import companyProfile from './reducers/companyProfile';

export const AppContext = createContext();


const reducers = {
    items: itemsReducer,
    users: usersReducer,
    companies,
    companyProfile
}

// Mimicking redux's combineReducers function
function aggregateReducers(reducers) {

    const keys = Object.keys(reducers);

    return function combine(state={}, action) {

        const nextState ={};

        for(let i=0; i < keys.length; i++) {

            const reducerKey = keys[i];
            const reducerFunction = reducers[reducerKey];
            const slicedState = state[reducerKey];

            nextState[reducerKey] = reducerFunction(slicedState, action)
        }

        return nextState;
    }
}

const rootReducer = aggregateReducers(reducers);


export const AppProvider = ({children}) => {

    const [globalState, setGlobalState ] = useState(rootReducer(({}, {})));

    function changeState(action) {
        if(typeof action !== "object" || action === null){
            throw new Error('actions must be plain object.');
        }

        if(typeof action.type === 'undefined') {
            throw new Error('Actions may not have an undefined "type" property.');
        }

        const newState = rootReducer(globalState, action)
        setGlobalState(newState)
    }

    const value = useMemo( () => ({globalState, changeState}),[globalState, changeState])

    return (
        <AppContext.Provider value = {value}> 
            {children}
        </AppContext.Provider >
    )
}