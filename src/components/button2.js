import React from "react"

const Button2 = () => {
    const clicked = () => {
        alert("working")
    } 
    return(
        <div>
            <button onClick={clicked}>TF Approved</button>
        </div>
    )
}

export default Button2