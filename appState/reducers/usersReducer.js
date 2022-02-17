const defaultState = {
    current_user: {}
}

export default function usersReducer(state = defaultState, action={}) {

    const commnad = {
        "SET_USER": {...state, current_user: action.payload },
        "ADD_USER": {...state, users: [state.users, action.payload] }
    }

    return commnad[action.type] || state;
}
