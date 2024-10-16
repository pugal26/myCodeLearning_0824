import { useState } from "react"
import './example.css'

const Example = () => {
    const [value, setValue] = useState<number>(0);

    return(
        <>
            <button onClick={() => setValue(value + 1)}>
                Click Here!
            </button>
            <p>{ value }</p>
        </>
    )

}

export default Example

