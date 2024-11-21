import { useState } from "react"
import './task_2.css'
import RootLayout from "../Task_13/pages/RootLayout";

const Task_2 = () => {
    const [text, setText] = useState<string>('');

    return (
        <div className="container_task2">
            <RootLayout />
            <div>
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
                        onClick={() => { alert(text) }}>
                        GET ALERT
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Task_2