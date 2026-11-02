import React, { useState } from 'react'
import { NameContext, PersonContext } from './PersonContext' 
 import Detial from './Detial'
function Person() {
  const [firstname, setFirstname]=useState("");
  const [lastname,setLastname]=useState("")

    const detail = {firstname:"Aron", lastname:"Tom"}
  const [namelist, setNamelist]= useState({firstname:"",lastname:""})

  function handleSubmit (event){
    event.preventDefault();
    setNamelist({firstname:firstname, lastname:lastname})
  }

  return (
    <PersonContext.Provider value={detail}>
        <NameContext.Provider value={namelist}>
        <form onSubmit={handleSubmit}>
            Enter first name<input type='text' value={firstname} onChange={(e)=>{setFirstname(e.target.value)}}/>
            Enter last name <input type='text' value={lastname} onChange={(e)=>{setLastname(e.target.value)}} />
            <button type='submit'>Send</button>
        </form>
        <Detial />
        </NameContext.Provider>
    </PersonContext.Provider>
  )
}
export default Person