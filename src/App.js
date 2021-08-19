import React from "react"
import Button1 from "./button1"
import Button2 from "./button2"
import Button3 from "./button3"
import Button4 from "./button4"
 

const App = () => {

    return (



       <div className='container'>
           <h1>Risk Reduction</h1>
           <h2>Choose your option: </h2>
           <div className='buttonContainer'>
                <Button1 />
                <Button2 />
                <Button3 />
                <Button4 />
           </div>
       </div>
    )

}

export default App