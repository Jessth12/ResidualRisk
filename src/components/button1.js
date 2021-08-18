import React from "react"

const Button1 = () => {
    const clicked = () => {
        alert("working")
    }

    return (
        <div>
            <button onClick={clicked}> LGMA</button>
        </div>
    )
}

export default Button1