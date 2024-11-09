import { useState } from "react"


const YourName = () => {
    const [name, setName] = useState(false);

    return(
        <div>
                <button onClick={() => setName(!name)}>Click here</button> <br />  
                {name ? "Pugal" : ""}
                
             


        </div>
    )
}

export default YourName