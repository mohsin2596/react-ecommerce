import React from 'react';
import CustomButton from '../custom-button/custom-button.component.jsx';

import FormInput from '../form-input/form-input.component.jsx';
import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password:''});
    }

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({[name]: value});
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.onSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={this.state.email} 
                        label='Email'
                        handleChange={this.handleChange} 
                        required/>
                    <FormInput 
                        name='password' 
                        password='password' 
                        label='Password'
                        handleChange={this.handleChange}  
                        value={this.state.password} 
                        required/>

                    <CustomButton type='submit'>Sign in</CustomButton>
                </form>
            </div>
        );

    }
}

export default SignIn;