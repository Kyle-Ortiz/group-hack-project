const defaultState ={
    name: "",
    logo: {},
    industry: [],
    categories: [],
    employees: [],
    transactions: []
}

export default function companyReducer(state = defaultState, action={}) {

    const command = {
        "SET_CATEGORIES": {...state, categories: action.payload }
    }

    return command[action.type] || state
}