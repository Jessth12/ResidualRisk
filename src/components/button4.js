import React from "react"

const Button4 = () => {
    const clicked = () => {
        alert("working")
    }
    return (
        <div>
            <button onClick={clicked}>Full TF</button>
        </div>
    )
}

export default Button4 