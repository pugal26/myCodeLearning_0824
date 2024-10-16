import { useState } from "react"
import './task_3.css'

const getInput = () => {

    const [getNum, setGetNum] = useState<string>('');
    const [isDisplay, setIsDisplay] = useState<string>([]);


    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setIsDisplay([...isDisplay, getNum]);
        setGetNum('')
    }

    return(
        <div className="container">
            <p>Enter number in below inputbox, then click the button to get teh input value below</p>
            <div className="section">
                <input 
                    type="text" 
                    value={getNum}                    
                    onChange={(e) => setGetNum(String(e.target.value))}          
                />
                <button onClick={handleSubmit}>
                    Click Here!
                </button>
                {
                    isDisplay.map((c, index)=><div key={index}>
                        <p>{c}</p>
                    </div>)
                }
            </div>
        </div>
    )
}

export default getInput