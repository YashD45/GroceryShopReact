Decrement=()=>{
    return({
        type: 'Decrement',
        payload:1
    })
    
}
Increment=()=>{
    return({
        type: 'Increment',
        payload:1
    })
    
}

export {Increment,Decrement};