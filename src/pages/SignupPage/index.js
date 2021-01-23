import { useState } from 'react';
import { signup } from '../../services/userService';

// import { Link } from 'react-router-dom';

function SignupPage(props) {

    const [formState, setFormState] = useState(getInitialFormState());

    function getInitialFormState() {
        return {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        }
    }

    function handleChange(event) {
        setFormState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    };

    async function handleSubmit(event) {
        try {
            event.preventDefault();
            
            await signup(formState);

            setFormState(getInitialFormState());

            props.handleSignupOrLogin();
    
            props.history.push('/dashboard');
            
        } catch (error) {
            alert(error.message)
        }

    };


    return (
        <div className="Page">
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        value={formState.firstName}
                        onChange={handleChange}
                        name="firstName"
                        type="text"
                    />
                    <input
                        value={formState.lastName}
                        onChange={handleChange}
                        name="lastName"
                        type="text"
                    />
                    <input
                        value={formState.email}
                        onChange={handleChange}
                        name="email"
                        type="email"
                    />
                    <input
                        value={formState.password}
                        onChange={handleChange}
                        name="password"
                        type="password"
                    />
                    <button>Sign Up</button>
                </div>
            </form>
        </div>
    )
};

export default SignupPage;

// create a signup form as a react controlled component
// this means you neee