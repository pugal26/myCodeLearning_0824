import { useState, ChangeEvent, FormEvent } from "react"
import './task_5.css'
import RootLayout from "../Task_13/pages/RootLayout";

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

    const onUserNameChange = (event: ChangeEvent<HTMLInputElement>) => {
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
        <div style={{ display: 'flex' }}>
            <RootLayout />
            <div className="task5_container">
                <h1 className="task5_title">Fill the form and get the alert while submit the form.</h1>
                <form onSubmit={handleSubmit} className="task5_form">
                    <div className="formSection">
                        <label htmlFor="userName" className="task5_label">User Name: </label>
                        <input
                            type="text"
                            id="userName"
                            value={userName}
                            onChange={onUserNameChange}
                            className="task5_input"
                        />
                    </div>

                    <div className="formSection">
                        <label htmlFor="email" className="task5_label">Email: </label>
                        <input
                            type="text"
                            id="email"
                            value={email}
                            onChange={onEmailChange}
                            className="task5_input"
                        />
                    </div>

                    <div className="formSection">
                        <label htmlFor="age" className="task5_label">Age: </label>
                        <input
                            type="number"
                            id="age"
                            value={age}
                            onChange={onAgeChange}
                            className="task5_input"
                        />
                    </div>

                    <div className="formSection">
                        <label htmlFor="gender" className="task5_label">Gender: </label>
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
                                <label htmlFor="male" className="task5_label">Male</label>
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
                                <label htmlFor="female" className="task5_label">Female</label>
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
                                <label htmlFor="ratherNotSay" className="task5_label">Rather Not Say</label>
                            </div>
                        </div>
                    </div>

                    <div className="formSection">
                        <label htmlFor="address" className="task5_label">Address: </label>
                        <textarea
                            name="address"
                            id="address"
                            rows={5}
                            cols={30}
                            value={address}
                            onChange={onAddressChange}
                            className="task5_textarea"
                        />
                    </div>

                    <div className="formSection">
                        <label htmlFor="contact" className="task5_label">Phone: (+91) </label>
                        <input
                            type="number"
                            id="phone"
                            value={phone}
                            onChange={onPhoneChange}
                            placeholder="tel"
                            className="task5_input"
                        />
                    </div>

                    <div className="formSection">
                        <label htmlFor="pinCode" className="task5_label">Pin Code:</label>
                        <input
                            type="number"
                            id="pinCode"
                            value={pinCode}
                            onChange={onPinCodeChange}
                            className="task5_input"
                        />
                    </div>

                    <div className="formSection">
                        <label htmlFor="countries" className="task5_label">Countries: </label>
                        <select
                            id="countries"
                            value={country}
                            onChange={onCountryChange}
                            className="task5_select"
                        >
                            <option value='' className="task5_option">Select your Country</option>
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
                            className="task5_checkbox"
                        />
                        <label htmlFor="terms" className="task5_label">Agree Terms & Conditions</label>
                    </div>

                    <div className="formSelection">
                        <label htmlFor="submitDate" className="task5_label">Form Submission Date: </label>
                        <input
                            type="datetime-local"
                            id="date"
                            value={date}
                            onChange={onDateChange}
                            className="task5_date"
                        />
                    </div>

                    <div className="submitBtn">
                        <button className="task5_btn" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default Task_5;