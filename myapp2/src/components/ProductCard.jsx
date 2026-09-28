import { useState } from "react";

function ProductCard(props){
    const[selected, setSelected]=useState(false)
  return(
    <>
        <p>
            <h2>Name {props.name}</h2>
            <p>Category {props.category}</p>
            <p>Price {props.price}</p>
            <button onClick={()=>setSelected(!selected)}>
                {selected?"Remove":"Select"}
            </button>            

        </p>
    </>
  )


}
export default ProductCard