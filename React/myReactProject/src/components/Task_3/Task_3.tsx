import { useState } from "react"


const getInput = () => {

    const [getNum, setGetNum] = useState<number>(0);
    const [isDisplay, setIsDisplay] = useState<number>();


    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setIsDisplay(getNum);
        setGetNum(Number(''));
    }

    return(
        <div>
            <p>Enter number in below inputbox, then click the button to get teh input value below</p>
            <div className="section">
                <input 
                    type="number" 
                    value={getNum}                    
                    onChange={(e) => setGetNum(Number(e.target.value))}          
                />
                <button onClick={handleSubmit}>
                    Click Here!
                </button>
                {isDisplay && <li>{isDisplay}</li>}
            </div>
        </div>
    )
}

export default getInput