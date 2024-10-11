import { useState } from "react"

const Value = () => {
    const [count, setCount] = useState(0);

    return(
        <div>
            <p>Your { count } value!</p>
            <button onClick={() => setCount(count + 1)}>
                Click Here!
            </button>
        </div>
    )
}

export default Value