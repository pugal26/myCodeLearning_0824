import { useState } from "react"
import './task_3.css'

const Task_3 = () => {

    const [num, setNum] = useState<number>(0);
    const [numList, setNumList] = useState<number[]>([]);


    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setNumList([...numList, num]);
        setNum(0)
    }

    return(
        <div className="container">
            <p>Enter number in below inputbox, then click the button to get the input value below</p>
            <div className="section">
                <input 
                    type="text" 
                    value={num}                    
                    onChange={(e) => setNum(Number(e.target.value))}          
                />
                <button onClick={handleSubmit}>
                    Click Here!
                </button>
                {
                    numList.map((element, index) => {
                            return (
                                <div key={index}>
                                    <p>{element}</p>
                                    <div>
                                        <p></p>
                                    </div>
                                </div>
                            )
                        }
                    )
                }
            </div>
        </div>
    )
}

export default Task_3