export default function companies(state = [], action={}) {

    const command= {
        "SUBSCRIBE_COMPANIES": action.payload 
    }
    return command[action.type] || state
}