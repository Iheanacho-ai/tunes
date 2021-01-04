import React from 'react';
import { Link } from 'react-router-dom';
import SigninImg from '../../assets/signin3.jpg';
import Header from '../../component/header/header';

import { auth ,signInWithGoogle } from '../../firebase/firebase.utils';

import './signin-page.styles.css';


class SignIn extends React.Component{
    constructor(){
        super()

        this.state = {
            email: '',
            password: ''
        }
    }


    handleSubmit =async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword( email, password );
            this.setState({ email: '', password: ''});
        } catch (error) {
            console.log(error);
        }

        this.setState({ email: '', password: ''})
    }

    handleChange = event => {
        const { value , name } = event.target;

        this.setState({ [name] : value })
    }

    render(){
        return(
            <div className = 'signin'>
                <Header/>
                <div className = 'signin-container'>
                    <div className = 'signin-form'>
                        <h1>Log in</h1>

                        <form onSubmit = {this.handleSubmit} >
                            
                            <div className = 'button-div login-margin-bottom'>
                                <button className = 'facebook-btn'>Facebook</button>
                                <button className = 'google-btn' onClick = { signInWithGoogle } >Google</button>
                            </div>

                            <input type="email" name="email" value = { this.state.email } onChange = {this.handleChange}/>
                            <input type="password" name="password" value = { this.state.password } onChange = {this.handleChange}/>


                            <div className= 'login-form-button-div' ><button className= 'login-form-button' >Log in</button></div>
                            
                            <p className= 'register-here'>Don't have an account? <span><Link to = 'signup' > Sign up</Link></span></p>

                        </form>
                        
                    </div>
                    <div className = 'signin-banner' style={{backgroundImage:`url(${SigninImg})`}}></div>
                </div>
            </div>
            
        )
    }
};

export default SignIn;