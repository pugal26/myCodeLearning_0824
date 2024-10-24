import { useState, ChangeEvent, FormEvent } from "react"
import './task_5.css'

interface userInputData {
    userName: string
    email: string
    age: number
    gender: string
    address: string
    option: string
    date: string
}

const initialState = { 
    userName: '',
    email: '',
    age:0,
    gender:'',
    address: '',
    option: '',
    date: ''
}

const task_5 = () => {

    const [formValue, setFormValue] = useState<userInputData>(initialState);

    const onFieldChange = (event : ChangeEvent<HTMLInputElement>) => {
        let value: string | number = event.target.value;
        if (event.target.type === 'number') {
            value = event.target.valueAsNumber
        } else if (event.target.type === 'checked') {
            value = event.target.value
        }
        setFormValue({...formValue, [event.target.id]: value});
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setFormValue(initialState);
        alert(`
                Name: ${formValue.userName}
                Email: ${formValue.email}
                Age: ${formValue.age}
                Gender: ${formValue.gender}\n
                Address: ${formValue.address}
                Address Type: ${formValue.option}\n
                Form Submitted Date: ${formValue.date}
            `)

            console.log(formValue)
    }

    return (
        <div className="container">
            <h1>Fill the form and get the alert while submit the form.</h1>
            <form onSubmit={handleSubmit} className="formContainer">
                <div className="formInputs">
                    <label htmlFor="userName" className="inputTitle">User Name: </label>
                    <input 
                        type="text" 
                        id="userName"
                        value={formValue.userName}
                        onChange={onFieldChange}
                        placeholder="Enter your Name"
                        className="inputField"
                    />
                </div> 
                <div className="formInputs">
                    <label htmlFor="email" className="inputTitle">Email: </label>
                    <input 
                        type="email" 
                        id="email"
                        value={formValue.email}
                        onChange={onFieldChange}
                        placeholder="Enter your Email"
                        className="inputField"
                    />
                </div>
                <div className="formInputs">
                    <label htmlFor="age" className="inputTitle">Age:</label>
                    <input 
                        type="number" 
                        id="age"
                        value={formValue.age}
                        onChange={onFieldChange}
                        placeholder="Enter your Age"
                        className="inputField"
                    />
                </div>
                <div className="formInputs">
                    <label htmlFor="gender" className="inputTitle">Gender: </label>
                    <div className="genderDiv">
                        <div className="genderList">
                            <input 
                                type="radio" 
                                id="gender"
                                value='Male'
                                checked={formValue.gender === 'Male'}
                                onChange={onFieldChange}
                                className="radioBtn"
                            />
                            <label htmlFor="male" className="radioBtn">Male</label>
                        </div>
                        <div className="genderList">
                            <input 
                                type="radio" 
                                id="gender"
                                value='Female'
                                checked={formValue.gender === 'Female'}
                                onChange={onFieldChange}
                                className="radioBtn"
                            />
                            <label htmlFor="female" className="radioBtn">Female</label>
                        </div>
                        <div className="genderList">
                            <input 
                                type="radio" 
                                id="gender"
                                value='Rather not say'
                                checked={formValue.gender === 'Rather not say'}
                                onChange={onFieldChange}
                                className="radioBtn"
                            />
                            <label htmlFor="other" className="radioBtn">Rather not say</label>
                        </div>
                    </div>
                </div>
                <div className="formInputs">
                    <label htmlFor="address" className="inputTitle">Address: </label>
                    <textarea 
                        id="address" 
                        name="address" 
                        rows={5} 
                        cols={30} 
                        value={formValue.address} 
                        onChange={onFieldChange}
                        placeholder="Enter your Full Address"
                    />
                </div>
                <div className="formInputs">
                    <label htmlFor="option" className="inputTitle">Address Type: </label>
                    <div className="checkboxDiv">
                        <div className="addressTypes">
                            <input 
                                type="checkbox" 
                                id="option"
                                value={formValue.option}
                                onChange={onFieldChange}
                            />
                            <label htmlFor="option" className="checkbox">Permanent</label>
                        </div>
                        <div className="addressTypes">
                            <input 
                                type="checkbox"
                                id="option"
                                value={formValue.option}
                                onChange={onFieldChange} 
                            />
                            <label htmlFor="option" className="checkbox">Temporary</label>
                        </div>
                    </div>
                </div>
                <div className="formInputs">
                    <label htmlFor="submitDate" className="inputTitle">Form Submission Date: </label>
                    <input 
                        type="datetime-local"
                        id="date" 
                        value={formValue.date}
                        onChange={onFieldChange}
                        className="date"
                    />
                </div>
                <div className="btnDiv"><button type="submit" className="submitBtn">Submit</button></div>
            </form>           
        </div>
    )
}

export default task_5