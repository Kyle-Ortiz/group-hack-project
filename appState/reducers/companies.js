export default function companies(state = [], action={}) {

    const commnad= {
        "SET_COMPANIES": {state: action.payload }
    }
    return state
}