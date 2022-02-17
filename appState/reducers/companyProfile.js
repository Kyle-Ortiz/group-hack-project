const defaultState = {
    name: "",
    logo: {},
    industry: [],
    categories: [],
    transactions: []
}

export default function companyProfile(state = defaultState, action={}) {

    const command = {
        "ADD_CATEGORIES": {...state, categories: [...state.categories, action.payload] }
    }
    return command[action.type] || state

}