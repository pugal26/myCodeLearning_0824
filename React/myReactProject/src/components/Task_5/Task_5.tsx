import { useState, ChangeEvent, FormEvent } from "react"

interface userInputData {
    userName: string
    email: string
    age: number
    gender: string
    address: string
    option: boolean
}

const initialState = { 
    userName: '',
    email: '',
    age:0,
    gender:'',
    address: '',
    option: false,
}

const task_5 = () => {

    const [formValue, setFormValue] = useState<userInputData>(initialState);

    const onFieldChange = (event : ChangeEvent<HTMLInputElement>) => {
        let value: string | number | boolean = event.target.value;
        if (event.target.type === 'number') {
            value = event.target.valueAsNumber
        } else if (event.target.type === 'checkbox') {
            value = event.target.checked;
        }
        setFormValue({...formValue, [event.target.id]: value});
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setFormValue(initialState);
        alert(`Name: ${formValue.userName}\nEmail: ${formValue.email}\nAge: ${formValue.age}\nGender: ${formValue.gender}\n\nAddress: ${formValue.address}\nAdress Type: ${formValue.option}`) 
        console.log(formValue)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="userName">User Name: </label>
                <input 
                    type="text" 
                    id="userName"
                    value={formValue.userName}
                    onChange={onFieldChange}
                /> <br />
                <label htmlFor="email">Email: </label>
                <input 
                    type="email" 
                    id="email"
                    value={formValue.email}
                    onChange={onFieldChange}
                /> <br />
                <label htmlFor="age">Age:</label>
                <input 
                    type="number" 
                    id="age"
                    value={formValue.age}
                    onChange={onFieldChange}
                 /> <br />
                <label htmlFor="gender">Gender: </label>
                <input 
                    type="radio" 
                    id="gender"
                    value='Male'
                    checked={formValue.gender === 'Male'}
                    onChange={onFieldChange}           
                />
                <label htmlFor="male">Male</label>
                <input 
                    type="radio" 
                    id="gender"
                    value='Female'
                    checked={formValue.gender === 'Female'}
                    onChange={onFieldChange}
                />
                <label htmlFor="female">Female</label>
                <input 
                    type="radio" 
                    id="gender"
                    value='Rather not say'
                    checked={formValue.gender === 'Rather not say'}
                    onChange={onFieldChange}
                />
                <label htmlFor="other">Rather not say</label> <br />
                <label htmlFor="address">Address: </label>
                <textarea 
                    id="address" 
                    name="address" 
                    rows={5} 
                    cols={30} 
                    value={formValue.address} 
                    onChange={onFieldChange} /> <br />
                <label htmlFor="option">Address Type: </label>
                <input 
                    type="checkbox" 
                    id="option"
                    value={formValue.option}
                    onChange={onFieldChange}
                />
                <label htmlFor="option">Permanent</label>
                <input 
                    type="checkbox"
                    id="option"
                    value={formValue.option}
                    onChange={onFieldChange}
                />
                <label htmlFor="option">Temporary</label> <br />
                <button type="submit">Submit</button>
            </form>           
        </div>
    )
}

export default task_5