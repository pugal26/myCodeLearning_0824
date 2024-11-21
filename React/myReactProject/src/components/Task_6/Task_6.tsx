import { ChangeEvent, FormEvent, useState } from "react"
import './task_6.css'
import RootLayout from "../Task_13/pages/RootLayout";

type FormErrors = {
    userName?: string;
    email?: string
    age?: string,
    gender?: string
    address?: string
    phone?: string
    pinCode?: string
    country?: string
    isChecked?: string
    date?: string
}

const Task_6 = () => {

    const [userName, setUserName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [age, setAge] = useState<number>(0);
    const [gender, setGender] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [phone, setPhone] = useState<number>(0);
    const [pinCode, setPinCode] = useState<number>(0);
    const [country, setCountry] = useState<string>('');
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [date, setDate] = useState<string>('');

    const [errors, setErrors] = useState<FormErrors>({});
    const [submitted, setSubmitted] = useState<boolean>(false);

    const onUserNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUserName(event?.target.value)
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

    const onPhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
        // console.log(event.target.valueAsNumber)
        setPhone(event.target.valueAsNumber)
        // console.log(phone)
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

    const onDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDate(event.target.value)
    }

    const validate = (): FormErrors => {
        const errors: FormErrors = {};

        if (!userName) {
            errors.userName = '*Username is required*';
        } else if (userName.length < 3) {
            errors.userName = '*Username must be at least 3 characters*';
        }

        if (!email) {
            errors.email = '*Email is required*';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = '*Enter a valid email address*';
        }

        if (!age) {
            errors.age = '*Age is required*';
        } else if (age < 18 || age > 99) {
            errors.age = '*Enter a valid age between 18 and 99*';
        }

        if (!gender) {
            errors.gender = '*Please select any one of the above*'
        }

        if (!address) {
            errors.address = '*Address is required*'
        } else if (address.trim().split('\n').length < 2) {
            errors.address = '*Enter address for two lines*'
        }

        // console.log(phone);
        if (!phone) {
            errors.phone = '*Phone no. is requires*'
        } else if (phone.toString().length != 10)
            errors.phone = '*Enter a valid phone no.*'

        if (!pinCode) {
            errors.pinCode = '*Pincode is required*'
        } else if (pinCode.toString().length != 6)
            errors.pinCode = '*Enter a 6-digit pincode*'

        if (!country) {
            errors.country = '*Select any one Country*'
        }

        if (!isChecked) {
            errors.isChecked = '*Please accept the terms and conditions*'
        }

        if (!date) {
            errors.date = '*Pick a date and time*'
        }

        return errors;
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const validateErrors = validate();
        setErrors(validateErrors);

        if (Object.keys(validateErrors).length === 0) {
            setSubmitted(true);
            alert(`
                Username: ${userName}
                Email: ${email}
                Age: ${age}
                Gender: ${gender}\n
                Address: ${address}
                Phone: +91${phone}
                Pincode: ${pinCode}
                Country: ${country}\n
                Terms & Conditios: ${isChecked}
                Form Submitted Date: ${date}
            `)

            setUserName('');
            setEmail('');
            setAge(0)
            setGender('')
            setAddress('')
            setPhone(0)
            setPinCode(0)
            setCountry('')
            setIsChecked(false)
            setDate('')
        } else {
            setSubmitted(false);
        }
        // setUserName(initialState);
        // setEmail(initialState);
        // setAge(initialState)
        // setGender(initialState)
        // setAddress(initialState)
        // setPhone(initialState)
        // setPinCode(initialState)
        // setCountry(initialState)
        // setIsChecked(initialState)
        // setDate(initialState)
    }


    return (
        <div style={{ display: 'flex' }}>
            <RootLayout />
            <div className="container_task6">
                <h1 className="form_title_task6">Fill the form and get the alert while submit the form with form validation</h1>
                <form onSubmit={handleSubmit} className="form_task6">
                    <div className="formSection">
                        <label htmlFor="userName" className="label_task6">UserName:
                            <input
                                type="text"
                                id="userName"
                                value={userName}
                                onChange={onUserNameChange}
                                className="input_task6"
                                placeholder="Enter a username min of 3 characters"
                            />
                        </label>
                        {errors.userName && <p className="errorMsj">{errors.userName}</p>}
                    </div>

                    <div className="formSection">
                        <label htmlFor="email" className="label_task6">Email:
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={onEmailChange}
                                 className="input_task6"
                                placeholder="Enter you valid Email"
                            />
                        </label>
                        {errors.email && <p className="errorMsj">{errors.email}</p>}
                    </div>

                    <div className="formSection">
                        <label htmlFor="age" className="label_task6">Age:
                            <input
                                type="number"
                                id="age"
                                value={age}
                                onChange={onAgeChange}
                                className="input_task6"
                            />
                        </label>
                        {errors.age && <p className="errorMsj">{errors.age}</p>}
                    </div>

                    <div className="formSection">
                        <label htmlFor="gender" className="label_task6">Gender: </label>
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
                                <label htmlFor="male" className="label_task6">Male</label>
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
                                <label htmlFor="female" className="label_task6">Female</label>
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
                                <label htmlFor="ratherNotSay" className="label_task6">Rather Not Say</label>
                            </div>
                        </div>
                        {errors.gender && <p className="errorMsj">{errors.gender}</p>}
                    </div>

                    <div className="formSection">
                        <label htmlFor="address" className="label_task6">Address:
                            <textarea
                                name="address"
                                id="address"
                                rows={5}
                                cols={30}
                                value={address}
                                onChange={onAddressChange}
                                className="textarea_task6"
                                placeholder="Enter you valid Address"
                            />
                        </label>
                        {errors.address && <p className="errorMsj">{errors.address}</p>}
                    </div>

                    <div className="formSection">
                        <label htmlFor="contact" className="label_task6">Phone: (+91)
                            <input
                                type="number"
                                id="phone"
                                value={phone}
                                onChange={onPhoneChange}
                                className="input_task6"
                                placeholder="tel"
                            />
                        </label>
                        {errors.phone && <p className="errorMsj">{errors.phone}</p>}
                    </div>

                    <div className="formSection">
                        <label htmlFor="pinCode" className="label_task6">Pin Code:
                            <input
                                type="number"
                                id="pinCode"
                                value={pinCode}
                                onChange={onPinCodeChange}
                                maxLength={6}
                                size={6}
                                className="input_task6"
                                placeholder="Enter a 6-Digit pincode"
                            />
                        </label>
                        {errors.pinCode && <p className="errorMsj">{errors.pinCode}</p>}
                    </div>

                    <div className="formSection">
                        <label htmlFor="countries" className="label_task6">Countries: </label>
                        <select
                            id="countries"
                            value={country}
                            onChange={onCountryChange}
                            className="select_task6"
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
                        {errors.country && <p className="errorMsj">{errors.country}</p>}
                    </div>

                    <div className="formSection_Terms">
                        <input
                            type="checkbox"
                            id="checkbox"
                            checked={isChecked}
                            onChange={onCheckChange}
                            className="checkbox"
                        />
                        <label htmlFor="terms" className="label_task6">Agree Terms & Conditions</label>
                    </div>
                    {errors.isChecked && <p className="errorMsjCheck">{errors.isChecked}</p>}

                    <div className="formSelection">
                        <label htmlFor="submitDate" className="inputTitle">Form Submission Date:
                            <input
                                type="datetime-local"
                                id="date"
                                value={date}
                                onChange={onDateChange}
                                className="date"
                            />
                        </label>
                        {errors.date && <p className="errorMsj">{errors.date}</p>}
                    </div>

                    <div className="submitBtn">
                        <button className="task6_btn" type="submit">Submit</button>
                        {submitted && <p style={{ color: 'green' }}>Form submitted successfully</p>}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Task_6;