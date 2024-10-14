import { useState } from "react"
import './task_2.css'

const Value = () => {
    const [text, setText] = useState<string>('');

    return(
        <div className="container">
            <p>Enter Input In Textbox, Then Click Button To Get Input Value In Alert</p>
            <div className="section">
            <input
                className="fields"
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                className="fields"
                onClick={() => {alert(text)}}>
                GET ALERT
            </button> 
        </div>          
    </div>
    )
} 

export default Value