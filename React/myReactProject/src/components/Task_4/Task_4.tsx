import { useState } from "react"
import './task_4.css'

const task_4 = () => {

    const [value, setValue] = useState<string>('');
    const [valueList, setValueList] = useState<string[]>([]);

    const handleClick = () => {
        setValueList([...valueList, value])
        setValue('')
    }

    const handleDelete = () => {
        const updatedValueList = valueList.slice(0, -1)
        setValueList(updatedValueList)
    }

    return(
        <div className="container">
            <p>Enter values in below inputbox, then click the button to get the input value below and if click a delete to remove the value from bottom.</p>
            <input 
                type="text" 
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />

            <button className="inputBtn" onClick={handleClick}>
                Add
            </button>

            <button className="deleteBtn" onClick={handleDelete}>
                Delete
            </button>

            {
                valueList.map((element, index) => {
                    return (
                        <div key={index}>
                            <ul className="outputList">
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