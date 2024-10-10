import React, { useState } from "react";

const Value = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Here is { count } value</p>
            <button onClick={() => setCount(count + 1)}>
                Click Here
            </button>
        </div>
    )
}

export default Value;