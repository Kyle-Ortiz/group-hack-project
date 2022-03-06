export default function itemsReducer (state = [], action={}) {
    console.log("itemsState called")
    const command = {
        "SET_ITEMS": action.payload,
        "ADD_ITEM": [ ...state, action.payload ],
        "UNSUBSCRIBE_ITEMS": []
    }
    return command[action.type] || state
}

