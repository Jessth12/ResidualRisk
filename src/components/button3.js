import React from "react"

const Button3 = () => {
    const clicked = () => {
        alert("working")
    } 
    return(
         <div>
             <button onClick={clicked}>Wegmans</button>
        </div>
    )

    
}

export default Button3