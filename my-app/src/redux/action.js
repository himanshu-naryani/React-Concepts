export const counterIncrement = (payload) => {
    return {
        type: "INCREMENT",
        payload: payload
    }
} 

export const counterDecrement = (payload) => {
    return {
        type: "DECREMENT",
        payload: payload
    }
}
