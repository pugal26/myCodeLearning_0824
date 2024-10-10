import { useState } from "react"

const MyName = () => {
    const [Name, SetName] = useState();

    return (
        <div>            
            <button onClick={() => SetName('Pugal')}>
                Click Here
            </button>
            <p>{ Name }</p>
            
        </div>
    )
        
}

export default MyName