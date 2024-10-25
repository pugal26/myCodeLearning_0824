import { useState, ChangeEvent, FormEvent } from "react"
import './task_5_2.css'

interface userInputData {
    userName: string
    email: string
    age: number
    gender: string
    address: string
    phone:number
    pinCode: number
    country: string
    isChecked: boolean
    date: string
}

const initialState = {
    userName: '',
    email: '',
    age: 0,
    gender:'',
    address: '',
    phone:0,
    pinCode: 0,
    country:'',
    isChecked: false,
    date:''
}

const Task_5 = () => {

    const [userName, setUserName] = useState<userInputData>(initialState);
    const [email, setEmail] = useState<userInputData>(initialState);
    const [age, setAge] = useState<userInputData>(initialState);
    const [gender, setGender] = useState<userInputData>(initialState);
    const [address, setAddress] = useState<userInputData>(initialState);
    const [pinCode, setPinCode] = useState<userInputData>(initialState);
    const [country, setCountry] = useState<userInputData>(initialState);
    const [isChecked, setIsChecked] = useState<userInputData>(initialState);
    const [phone, setPhone] = useState<userInputData>(initialState);
    const [date, setDate] = useState<userInputData>(initialState);

    const onUserNameChange = (event : ChangeEvent<HTMLInputElement>) => {
        setUserName({...userName, userName: event.target.value})
    }

    const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail({...email, email: event.target.value})       
    }

    const onAgeChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAge({...age, age: event.target.valueAsNumber})
    }

    const onGenderChange = (event: ChangeEvent<HTMLInputElement>) => {
        setGender({...gender, gender: event.target.value})
    }

    const onAddressChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setAddress({...address, address:event.target.value})
    }

    const onPinCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPinCode({...pinCode, pinCode:event.target.valueAsNumber})
    }

    const countries = ['India', 'United States', 'Europe', 'Russia']

    const onCountryChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setCountry({...country, country:event.target.value})
    }

    const onCheckChange = (event: ChangeEvent<HTMLInputElement>) => {
        setIsChecked({...isChecked, isChecked:event.target.checked})
    }

    const onPhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPhone({...phone, phone:event.target.valueAsNumber})
    }

    const onDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDate({...date, date:event.target.value})
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert(`
                Name: ${userName.userName}
                Email: ${email.email}
                Age: ${age.age}
                Gender: ${gender.gender}\n
                Address: ${address.address}
                Phone: (+91) ${phone.phone}
                Pin Code: ${pinCode.pinCode}
                Country: ${country.country}\n
                Terms & Conditios: ${isChecked.isChecked}
                Form Submitted Date: ${date.date}
            `);
        setUserName(initialState)
        setEmail(initialState)
        setAge(initialState)
        setGender(initialState)
        setAddress(initialState)
        setPhone(initialState)
        setPinCode(initialState)
        setCountry(initialState)
        setIsChecked(initialState)
        setDate(initialState)
    }

    return (
        <div className="container">
            <h1>Fill the form and get the alert while submit the form.</h1>
            <form onSubmit={handleSubmit}>
                <div className="formSection">
                    <label htmlFor="userName">User Name: </label>
                    <input 
                        type="text" 
                        id="userName"
                        value={userName.userName}
                        onChange={onUserNameChange}
                    />
                </div>
                
                <div className="formSection">
                    <label htmlFor="email">Email: </label>
                    <input 
                        type="text" 
                        id="email"
                        value={email.email}
                        onChange={onEmailChange}
                    />
                </div>
                
                <div className="formSection">
                    <label htmlFor="age">Age: </label>
                    <input 
                        type="number" 
                        id="age" 
                        value={age.age}
                        onChange={onAgeChange}
                    />
                </div>

                <div className="formSection">
                    <label htmlFor="gender">Gender: </label>
                    <div className="genderDiv">
                        <div className="genderList">
                            <input 
                                type="radio" 
                                id="gender"
                                value='Male'
                                checked={gender.gender === 'Male'}
                                onChange={onGenderChange}
                                className="radioBtn"
                            />
                            <label htmlFor="male">Male</label>
                        </div>
                        <div className="genderList">
                            <input 
                                type="radio" 
                                id="gender"
                                value='Female'
                                checked={gender.gender === 'Female'}
                                onChange={onGenderChange}
                                className="radioBtn"
                            />
                            <label htmlFor="female">Female</label>
                        </div>
                        <div className="genderList">
                            <input 
                                type="radio" 
                                id="gender"
                                value='Rather Not Say'
                                checked={gender.gender === 'Rather Not Say'}
                                onChange={onGenderChange}
                                className="radioBtn"
                            />
                            <label htmlFor="ratherNotSay">Rather Not Say</label>
                        </div>
                    </div>
                </div>

                <div className="formSection">
                    <label htmlFor="address">Address: </label>
                    <textarea 
                        name="address" 
                        id="address"
                        rows={5}
                        cols={30}
                        value={address.address}
                        onChange={onAddressChange}
                    />
                </div>

                <div className="formSection">
                    <label htmlFor="contact">Phone: (+91) </label>
                    <input 
                        type="number" 
                        id="phone"
                        value={phone.phone}
                        onChange={onPhoneChange}
                        placeholder="tel"
                    />
                </div>

                <div className="formSection">
                    <label htmlFor="pinCode">Pin Code:</label>
                    <input 
                        type="number" 
                        id="pinCode"
                        value={pinCode.pinCode}
                        onChange={onPinCodeChange} 
                    />
                </div>

                <div className="formSection">
                    <label htmlFor="countries">Countries: </label>
                    <select 
                        id="countries"
                        value={country.country}
                        onChange={onCountryChange}
                    >
                    <option value=''>Select your Country</option>
                    {
                        countries.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))
                    }    
                    </select>
                </div>
                
                <div className="formSection_Terms">
                    <input 
                        type="checkbox"
                        id="checkbox"
                        checked={isChecked.isChecked}
                        onChange={onCheckChange}
                        className="checkbox"
                    />
                     <label htmlFor="terms">Agree Terms & Conditions</label>
                </div>

                <div className="formSelection">
                    <label htmlFor="submitDate" className="inputTitle">Form Submission Date: </label>
                    <input 
                        type="datetime-local"
                        id="date" 
                        value={date.date}
                        onChange={onDateChange}
                        className="date"
                    />
                </div>

                <div className="submitBtn">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )

} 

export default Task_5;