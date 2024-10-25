import { ChangeEvent, FormEvent, useState } from "react"

interface UserInputData {
    userName: string;
    email: string
    age: number
    gender: string
    address: string
    phone:string
}

type FormErrors = {
    userName?: string;
    email?: string
    age?: string,
    gender?: string
    address?: string
    phone?:string
}

const initialState = {
    userName: '',
    email:'',
    age: 0,
    gender:'',
    address: '',
    phone:'',
}

const Task_6 = () => {

    const [userName, setUserName] = useState<UserInputData>(initialState);
    const [email,setEmail] = useState<UserInputData>(initialState);
    const [age, setAge] = useState<UserInputData>(initialState);
    const [gender, setGender] = useState<UserInputData>(initialState);
    const [address, setAddress] = useState<UserInputData>(initialState);
    const [phone, setPhone] = useState<UserInputData>(initialState);
    
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


    const validate = (): FormErrors => {
        const errors: FormErrors = {};

        if (!userName.userName) {
            errors.userName = 'Username is required';
        } else if (userName.userName.length < 3) {
            errors.userName = 'Username must be at least 3 characters';
        }

        if (!email.email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email.email)) {
            errors.email = 'Enter a valid email address';
        }   

        if (!age.age) {
            errors.age = 'Age is required';
        } else if (age.age < 18 || age.age > 99) {
            errors.age = 'Enter a valid age between 18 and 99';
        }

        if (!gender.gender) {
            errors.gender = 'Select any one option'
        }

        if (!address.address) {
            errors.address = "Address is required"
        } else if (address.address.trim().split('\n').length < 2) {
            errors.address = "Enter address for two lines"
        }

        if (!phone.phone) {
            errors.phone = 'Phone no. is requires'
        } else if (/^\d{10}$/.test(phone.phone))
            errors.phone = 'Enter a valid phone no.'

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
                        />
                    </label>
                    {errors.userName && <p style={{ color: 'red' }}>{errors.userName}</p>}
                </div>

                <div className="formSection">
                    <label htmlFor="email">Email: 
                        <input 
                            type="email"
                            id="email"
                            value={email.email}
                            onChange={onEmailChange} 
                        />
                    </label>
                    {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
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
                    {errors.age && <p style={{ color: 'red' }}>{errors.age}</p>}
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
                        {errors.gender && <p style={{ color:'red' }}>{errors.gender}</p>}
                    </div>
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
                        />
                    </label>
                    {errors.address && <p style={{ color:'red' }}>{errors.address}</p>}
                </div>

                <div className="formSection">
                    <label htmlFor="contact">Phone: (+91) </label>
                    <input 
                        type="tel" 
                        id="phone"
                        value={phone.phone}
                        onChange={onPhoneChange}
                        placeholder="tel"
                    />
                    {errors.phone && <p style={{ color:'red' }}>{errors.phone}</p>}
                </div>

                <div>
                    <button type="submit">Submit</button>
                    {submitted && <p  style={{ color: 'green' }}>Form submitted successfully</p>}
                </div>
            </form>
        </div>
    )
}

export default Task_6;