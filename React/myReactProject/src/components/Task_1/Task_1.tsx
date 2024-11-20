import { useState } from "react"
import RootLayout from "../Task_13/RootLayout";


const Task_1 = () => {
    const [name, setName] = useState(false);

    return(
        <div>
            <RootLayout />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button onClick={() => setName(!name)}>Click here</button> <br />  
                {name ? "Pugal" : ""}
            </div>
        </div>
    )
}

export default Task_1