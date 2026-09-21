import { useState } from "react";
export function Counter(){
    const [counter,setCounter]=useState(0)
    const add = ()=>{
        setCounter(counter+1)
    }
    return(
        <>
            <h2>Counter app</h2>
            <p>{counter}</p>
            <button onClick={add}>Add </button>
        </>
    )
}