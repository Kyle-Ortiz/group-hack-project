export default function companies(state = [], action={}) {

    const command= {
        "SET_COMPANIES": action.payload 
    }
    return command[action.type] || state
}