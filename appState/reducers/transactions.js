const defaultState= {
    all_tranasactions: [],
    // created_at: "",
    // employeeId,
}

export default function transactions(state= defaultState, action={}) {
    const commnad = {
        "NEW_TRANSACTION": {...state, all_transactions: [...state.all_tranasactions, action.payload]}
    }
    return state
}