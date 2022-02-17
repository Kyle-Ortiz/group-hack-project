const defaultState = {
    items: []
}

export default function itemsReducer (state = defaultState, action={}) {
    console.log("itemsState called")

    const command = {
        "SET_ITEMS": {...state, items: action.payload},
        "ADD_ITEM": {...state, items: [...state.items, action.payload ]},
        "DELETE_ITEM": function(){

            return (
                "hi"
            )
        }
    }
    return command[action.type] || state
}

