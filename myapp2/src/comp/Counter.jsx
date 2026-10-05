import { useState, useEffect } from "react"

function Counter(){
    const[count, setCount]=useState(0)

    useEffect(()=>{},[])
    
    useEffect(()=>{
        console.log("useEffect without dependency")

    })

  
    useEffect(()=>{
        console.log("useEffect for intial rendering")

    },[])

      
    useEffect(()=>{
        console.log("useEffect when state count changes")
         document.title = `Count: ${count}`;
    },[count])


    return(
        <>
            <h1>React useEffect hook</h1>
            <p>{count}</p>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </>
    )
}

export default Counter