
import React, { useState }  from "react"
import Student from "./components/Student";
import Profile from "./components/Profile";
import Contact from "./components/Contact"
import ProductCard from "./components/ProductCard";
import Contact4 from "./components/Contact4";
import Counter from "./comp/Counter";
import ShoppingCart from "./comp/ShoppingCart";
import Users from "./comp/User";
import StudentStatus from "./comp/StudentStatus";
import Course from "./comp/Course";
import ShoppingCart2 from "./comp/ShoppingCart2";
import ShoppingCart3 from "./comp/ShoppingCart3";

function App() {
  // const [name, setName]=useState("Alex");

  // const handlechangename = function(){
  //   setName("Saron")
  // }

   return (
    <>
        <Counter />
        <h2>Shopping cart example</h2>
        <ShoppingCart />
        <Users />
        <StudentStatus />
        <Course />
        <ShoppingCart2 />
        <ShoppingCart3></ShoppingCart3>

       {/* <h1>useState hook leesson</h1>
       <p>{name}</p>
       <button onClick={()=>setName("Aron")}>Change name</button>
       <button onClick={handlechangename}>Change name again</button>
       <Student /> */}
       {/* <Profile />
       <Contact />
       <ProductCard name="Phone" price={100} category="Mobile"/>
       <ProductCard name="laptop" price={1200} category="Computer"/>
       <ProductCard name="ipad" price="500" category="Mobile" /> */}
       {/* <Contact4 /> */}
    </>
  )
}

export default App

 