import { useState } from "react"
import RootLayout from "../Task_13/pages/RootLayout";


const Task_1 = () => {
    const [name, setName] = useState(false);

    return(
        <div style={{ display: 'flex' }}>
            <RootLayout />
            <div style={{ marginTop: 50, padding: 50 }}>
                <button onClick={() => setName(!name)}>Click here</button> <br />  
                {name ? "Pugal" : ""}
            </div>
        </div>
    )
}

export default Task_1