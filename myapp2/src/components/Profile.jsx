import { useState } from "react"

function Profile(){
    const [name, setName] =useState("")
    const [address, setAddress] =useState("")
    const [submittedname,setSubmittedName]=useState("")
    const [submittedaddress, setSubmittedAddress]=useState("")
 
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(name)
        console.log(address)
        setSubmittedName(name)
        setSubmittedAddress(address);
    }
    const handleNameChange = (e)=>{
        setName(e.target.value)

    }
    const handleAdresschange=(e)=>{
        setAddress(e.target.value)
    }
    return(
        <>
            <h1>Simple form in react</h1>
            <form onSubmit={handleSubmit}>
               Enter your name <input type="text" value={name} name="name" onChange={(e)=>setName(e.target.value)}/>
               Enter your address <input type="text" value={address} name="address" onChange={(e)=>setAddress(e.target.value)}/>

               <button type="submit" >Submit</button>

            </form>
            <p>Name is : {name}</p>
            <p>Address is : {address}</p>
            <p>After submit button clicked</p>
            <p>Name is : {submittedname}</p>
            <p>Address is : {submittedaddress}</p>
        </>
    )
}
export default Profile