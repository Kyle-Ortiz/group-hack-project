import React, { createContext, useState, useEffect } from 'react'
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

const createMyStore = reducer => {
    let state;
    const subscribers = [];
    const store = {
        changeState: action => {
            if(typeof action !== "object" || action === null){
                throw new Error('Actions must be plain objects.');
            }
            if(typeof action.type === 'undefined') {
                throw new Error('Actions may not have an undefined "type" property.');
            }
            state = reducer(state, action)
            subscribers.forEach(handler => handler())
        },
        getState: () => state,
        subscribe: handler => {
            subscribers.push(handler)
            return () => {
                const index = subscribers.indexOf(handler)
                if(index > 0) subscribers.splice(index, 1)
            }
        }
    }
    store.changeState({type: '@@redux/INIT'});
    return store;
}

const myStore = createMyStore(rootReducer)

export const AppProvider = ({children}) => {

    const [globalState, setGlobalState] = useState(myStore.getState());

    useEffect(() => {
        setGlobalState(myStore.getState())

        return () => {
            myStore.subscribe(() => {
                console.log("subscribe function called")
            })
        };
    }, []);

    // const globalState = myStore.getState();
    const changeState = myStore.changeState;
    const value = {globalState, changeState}

    return (
        <AppContext.Provider value = {value}> 
            {children}
        </AppContext.Provider >
    )
}