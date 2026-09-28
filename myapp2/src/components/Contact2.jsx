import { useState } from "react"

function Contact2(){
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")

    const [contact, setContact]=useState({id:"",email:"",phone:""}) //one contact 

    const [contacts, setContacts]=useState([])
    // const handlEmail = (e)=>{
    //     setEmail(e.target.value)
    // }
    // const handlPhone = (e)=>{
    //     setPhone(e.target.value)
    // }

    const handleChange = (event)=>{
        setContact({...contact,[event.target.name]:event.target.value})
    }

    return(
        <>
            <h1>Contact form</h1>
            <form onSubmit={handlesubmit}>
                Enter your email <input type="email" value={email} name="email" onChange={(e)=>setEmail(e.target.value)} />
                Enter phone number <input type="text" value={phone} name="phone" onChange={(e)=>setPhone(e.target.value)} />

                <h2>input type object</h2>

                Enter your email <input type="email" value={contact.email} name="email" onChange={handleChange} />
                Enter phone number <input type="text" value={contact.phone} name="phone" onChange={handleChange} />


                <button type="submit" >Submit</button>
            </form>
            <p>
                <h2>Display contact</h2>
                <p>{contact.phone}</p>
                <p>{contact.email}</p>
            </p>
        </>
    )
}

export default Contact2
