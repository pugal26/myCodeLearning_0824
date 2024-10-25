import { useState } from "react";


type FormDate = {
    username: string;
    email: string;
}

type FormErrors = {
    username?: string;
    email?: string;
}

const initialState = {
    username: '',
    email: ''
}

const Example25 = () => {

    const [formData, setFormData] = useState<FormDate>(initialState);
    const [errors, setErrors] = useState<FormErrors>({});
    const [submitted, setSubmitted] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
    const validate = (): FormErrors => {
        const errors: FormErrors = {};

        if (!formData.username) {
            errors.username = 'Username is required';
          } else if (formData.username.length < 3) {
            errors.username = 'Username must be at least 3 characters long';
          }
      
          if (!formData.email) {
            errors.email = 'Email is required';
          } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email address is invalid';
          }
      
          return errors;
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
    
        if (Object.keys(validationErrors).length === 0) {
          setSubmitted(true);
          console.log('Form submitted successfully:', formData);
        } else {
          setSubmitted(false);
        }
      };
      

    return (
        <div>
           <h2>Simple Form Validation</h2>
           <h2>Simple Form Validation</h2>
            <form onSubmit={handleSubmit}>
                <div>
                <label>Username:</label>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                />
                {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
                </div>

                <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                </div>

                <button type="submit">Submit</button>
                {submitted && <p style={{ color: 'green' }}>Form submitted successfully!</p>}
            </form>
        </div>
    )
}

export default Example25;