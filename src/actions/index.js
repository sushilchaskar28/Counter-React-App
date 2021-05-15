export const increament = (num)=>{
    return {
        type: 'INCREMENT',
        payload: num ,
    }
}

export const decreament = (num)=>{
    return {
        type: 'DECREMENT',
        payload: num ,
    }
}