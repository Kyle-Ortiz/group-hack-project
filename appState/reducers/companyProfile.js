const defaultState = {
    name: "",
    logo: {},
    industry: [],
    categories: [],
    branding: {
        background: "",
        borders: ""
    },
    transactions: []
}

export default function companyProfile(state = defaultState, action={}) {

    const command = {
        "SET_COMPANY": action.payload,
        "ADD_CATEGORIES": {...state, categories: [...state.categories, action.payload] }
    }
    return command[action.type] || state

}