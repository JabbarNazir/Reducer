export const incNumber = (num) =>{
    return{
        type : "INCREMENT",
        payload:num
    }
}

export const decNumber = (num1) =>{
    return{
        type : "DECREMENT",
        payload1:num1
    }
}