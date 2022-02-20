const defaultState = {
    users: [],
    current_user: {
        // name: "",
        // employeeId: ""
    }
}

export default function usersReducer(state = defaultState, action={}) {
    const command = {
        "SET_USERS": {...state, users: action.payload},
        "SET_CURRENT_USER": {...state, current_user: action.payload },
        "ADD_USER": {...state, users: [state.users, action.payload] },
        "LOGOUT_USER": {...state, users: [], current_user: {} }
    }
    return command[action.type] || state;
}
