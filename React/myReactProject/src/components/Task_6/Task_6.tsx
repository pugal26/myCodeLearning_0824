import { ChangeEvent, FormEvent, useState } from "react"
import './task_6.css'   

interface UserInputData {
    userName: string;
    email: string
    age: number
    gender: string
    address: string
    phone:string
    pinCode: string
    country: string
    isChecked: boolean
    date: string
}

type FormErrors = {
    userName?: string;
    email?: string
    age?: string,
    gender?: string
    address?: string
    phone?:string
    pinCode?: string
    country?: string
    isChecked?: string
    date?: string
}

const initialState = {
    userName: '',
    email:'',
    age: 0,
    gender:'',
    address: '',
    phone:'',
    pinCode: '',
    country:'',
    isChecked: false,
     date:''
}

const Task_6 = () => {

    const [userName, setUserName] = useState<UserInputData>(initialState);
    const [email,setEmail] = useState<UserInputData>(initialState);
    const [age, setAge] = useState<UserInputData>(initialState);
    const [gender, setGender] = useState<UserInputData>(initialState);
    const [address, setAddress] = useState<UserInputData>(initialState);
    const [phone, setPhone] = useState<UserInputData>(initialState);
    const [pinCode, setPinCode] = useState<UserInputData>(initialState);
    const [country, setCountry] = useState<UserInputData>(initialState);
    const [isChecked, setIsChecked] = useState<UserInputData>(initialState);
    const [date, setDate] = useState<UserInputData>(initialState);
    
    const [errors, setErrors] = useState<FormErrors>({});
    const [submitted, setSubmitted] = useState<boolean>(false);

    const onUserNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUserName({...userName, userName: event?.target.value})
    }

    const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail({...email, email:event.target.value})
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

    const onPhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPhone({...phone, phone:event.target.value})
    }

    const onPinCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPinCode({...pinCode, pinCode:event.target.value})
    }

    const countries = ['India', 'United States', 'Europe', 'Russia']

    const onCountryChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setCountry({...country, country:event.target.value})
    }

    const onCheckChange = (event: ChangeEvent<HTMLInputElement>) => {
        setIsChecked({...isChecked, isChecked:event.target.checked})
    }

    const onDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDate({...date, date:event.target.value})
    }



    const validate = (): FormErrors => {
        const errors: FormErrors = {};

        if (!userName.userName) {
            errors.userName = '*Username is required*';
        } else if (userName.userName.length < 3) {
            errors.userName = '*Username must be at least 3 characters*';
        }

        if (!email.email) {
            errors.email = '*Email is required*';
        } else if (!/\S+@\S+\.\S+/.test(email.email)) {
            errors.email = '*Enter a valid email address*';
        }   

        if (!age.age) {
            errors.age = '*Age is required*';
        } else if (age.age < 18 || age.age > 99) {
            errors.age = '*Enter a valid age between 18 and 99*';
        }

        if (!gender.gender) {
            errors.gender = '*Please select any one of the above*'
        }

        if (!address.address) {
            errors.address = '*Address is required*'
        } else if (address.address.trim().split('\n').length < 2) {
            errors.address = '*Enter address for two lines*'
        }

        if (!phone.phone) {
            errors.phone = '*Phone no. is requires*'
        } else if (!/^\d{10}$/.test(phone.phone))
            errors.phone = '*Enter a valid phone no.*'

        if (!pinCode.pinCode) {
            errors.pinCode = '*Pincode is required*'
        } else if (!/^\d{6}$/.test(pinCode.pinCode))
            errors.pinCode = '*Enter a 6-digit pincode*'

        if (!country.country) {
            errors.country = '*Select any one Country*'
        }

        if (!isChecked.isChecked) {
            errors.isChecked = '*Please accept the terms and conditions*'
        }

        if (!date.date) {
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
                Username: ${userName.userName}
                Email: ${email.email}
                Age: ${age.age}
                Gender: ${gender.gender}\n
                Address: ${address.address}
                Phone: +91${phone.phone}
                Pincode: ${pinCode.pinCode}
                Country: ${country.country}\n
                Terms & Conditios: ${isChecked.isChecked}
                Form Submitted Date: ${date.date}
            `)
        } else {
            setSubmitted(false);
        }
        setUserName(initialState);
        setEmail(initialState);
        setAge(initialState)
        setGender(initialState)
        setAddress(initialState)
        setPhone(initialState)
        setPinCode(initialState)
        setCountry(initialState)
        setIsChecked(initialState)
        setDate(initialState)
    }


    return(
        <div className="container">
            <h1>Fill the form and get the alert while submit the form with form validation</h1>
            <form onSubmit={handleSubmit}>
                <div className="formSection">
                    <label htmlFor="userName">UserName: 
                        <input 
                            type="text"
                            id="userName"
                            value={userName.userName}
                            onChange={onUserNameChange}
                            placeholder="Enter a username min of 3 characters" 
                        />
                    </label>
                    {errors.userName && <p className="errorMsj">{errors.userName}</p>}
                </div>

                <div className="formSection">
                    <label htmlFor="email">Email: 
                        <input 
                            type="email"
                            id="email"
                            value={email.email}
                            onChange={onEmailChange} 
                            placeholder="Enter you valid Email"
                        />
                    </label>
                    {errors.email && <p className="errorMsj">{errors.email}</p>}
                </div>

                <div className="formSection">
                    <label htmlFor="age">Age: 
                        <input 
                            type="number" 
                            id="age" 
                            value={age.age}
                            onChange={onAgeChange}
                        />
                    </label>
                    {errors.age && <p className="errorMsj">{errors.age}</p>}
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
                    {errors.gender && <p className="errorMsj">{errors.gender}</p>}
                </div>

                <div className="formSection">
                    <label htmlFor="address">Address: 
                        <textarea 
                            name="address" 
                            id="address"
                            rows={5}
                            cols={30}
                            value={address.address}
                            onChange={onAddressChange}
                            placeholder="Enter you valid Address"
                        />
                    </label>
                    {errors.address && <p className="errorMsj">{errors.address}</p>}
                </div>

                <div className="formSection">
                    <label htmlFor="contact">Phone: (+91) 
                        <input 
                            type="tel" 
                            id="phone"
                            value={phone.phone}
                            onChange={onPhoneChange}
                            placeholder="tel"
                        />
                    </label>
                    {errors.phone && <p className="errorMsj">{errors.phone}</p>}
                </div>

                <div className="formSection">
                    <label htmlFor="pinCode">Pin Code:
                        <input 
                            type="text" 
                            id="pinCode"
                            value={pinCode.pinCode}
                            onChange={onPinCodeChange}
                            maxLength={6}
                            size={6}
                            placeholder="Enter a 6-Digit pincode"
                        />
                    </label>
                    {errors.pinCode && <p className="errorMsj">{errors.pinCode}</p>}
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
                    {errors.country && <p className="errorMsj">{errors.country}</p>}
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
                {errors.isChecked && <p className="errorMsjCheck">{errors.isChecked}</p>}

                <div className="formSelection">
                    <label htmlFor="submitDate" className="inputTitle">Form Submission Date: 
                        <input 
                            type="datetime-local"
                            id="date" 
                            value={date.date}
                            onChange={onDateChange}
                            className="date"
                        />
                    </label>
                    {errors.date && <p className="errorMsj">{errors.date}</p>}
                </div>

                <div className="submitBtn">
                    <button type="submit">Submit</button>
                    {submitted && <p  style={{ color: 'green' }}>Form submitted successfully</p>}
                </div>
            </form>
        </div>
    )
}

export default Task_6;