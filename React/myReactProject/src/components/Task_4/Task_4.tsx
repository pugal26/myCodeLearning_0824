import { useState } from "react"


const task_4 = () => {

    const [value, setValue] = useState<string>('');
    const [valueList, setValueList] = useState<string[]>([]);

    const handleClick = () => {
        setValueList([...valueList, value])
        setValue('')
    }

    const handleDelete = () => {
        setValueList([])
    }

    return(
        <div>
            <input 
                type="text" 
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />

            <button onClick={handleClick}>
                Click Here!
            </button>

            <button onClick={handleDelete}>
                Clear All!
            </button>

            {
                valueList.map((element, index) => {
                    return (
                        <div key={index}>
                            <ul>
                                <li>{element}</li>
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default task_4