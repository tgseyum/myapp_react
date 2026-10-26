import mystyle from "Contact.module.css"
import "./About.css"
function Contact(){

    const mystyle ={
        color:"blue",
        border:"solid 2px red"
    }

    return(
        <>
        <h1 style={mystyle}>Contact page</h1>
        <p>Contact us via our website....</p>
        <p className={mystyle.container}>text</p>
        <p className="container">more text</p>
        
        </>
    )
}
export default Contact