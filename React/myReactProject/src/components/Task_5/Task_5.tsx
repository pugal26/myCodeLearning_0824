import { useState, ChangeEvent, FormEvent } from "react"
import './task_5.css'

const Task_5 = () => {

    const [userName, setUserName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [age, setAge] = useState<number>(0);
    const [gender, setGender] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [pinCode, setPinCode] = useState<number>(0);
    const [country, setCountry] = useState<string>('');
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [phone, setPhone] = useState<number>(0);
    const [date, setDate] = useState<string>('');

    const onUserNameChange = (event : ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value)
    }

    const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)       
    }

    const onAgeChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAge(event.target.valueAsNumber)
    }

    const onGenderChange = (event: ChangeEvent<HTMLInputElement>) => {
        setGender(event.target.value)
    }

    const onAddressChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setAddress(event.target.value)
    }

    const onPinCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPinCode(event.target.valueAsNumber)
    }

    const countries = ['India', 'United States', 'Europe', 'Russia']

    const onCountryChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setCountry(event.target.value)
    }

    const onCheckChange = (event: ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked)
    }

    const onPhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPhone(event.target.valueAsNumber)
    }

    const onDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDate(event.target.value)
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert(`
                Name: ${userName}
                Email: ${email}
                Age: ${age}
                Gender: ${gender}\n
                Address: ${address}
                Phone: (+91) ${phone}
                Pin Code: ${pinCode}
                Country: ${country}\n
                Terms & Conditios: ${isChecked}
                Form Submitted Date: ${date}
            `);
        setUserName('')
        setEmail('')
        setAge(0)
        setGender('')
        setAddress('')
        setPhone(0)
        setPinCode(0)
        setCountry('')
        setIsChecked(false)
        setDate('')
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
                        value={userName}
                        onChange={onUserNameChange}
                    />
                </div>
                
                <div className="formSection">
                    <label htmlFor="email">Email: </label>
                    <input 
                        type="text" 
                        id="email"
                        value={email}
                        onChange={onEmailChange}
                    />
                </div>
                
                <div className="formSection">
                    <label htmlFor="age">Age: </label>
                    <input 
                        type="number" 
                        id="age" 
                        value={age}
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
                                checked={gender === 'Male'}
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
                                checked={gender === 'Female'}
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
                                checked={gender === 'Rather Not Say'}
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
                        value={address}
                        onChange={onAddressChange}
                    />
                </div>

                <div className="formSection">
                    <label htmlFor="contact">Phone: (+91) </label>
                    <input 
                        type="number" 
                        id="phone"
                        value={phone}
                        onChange={onPhoneChange}
                        placeholder="tel"
                    />
                </div>

                <div className="formSection">
                    <label htmlFor="pinCode">Pin Code:</label>
                    <input 
                        type="number" 
                        id="pinCode"
                        value={pinCode}
                        onChange={onPinCodeChange} 
                    />
                </div>

                <div className="formSection">
                    <label htmlFor="countries">Countries: </label>
                    <select 
                        id="countries"
                        value={country}
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
                        checked={isChecked}
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
                        value={date}
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