import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../component/header/header';
import { auth, createUserProfileDocument, signInWithGoogle } from '../../firebase/firebase.utils';
import './signup-page.styles.css';

class SignUp extends React.Component{
    constructor(){
        super()

        this.state = {
            email: '',
            password: '',
            confirmPassword: ''
        }

    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password, confirmPassword } = this.state;

        if(password !== confirmPassword){
            alert("password don't match");
            return;
        }else{
            try{
                const { user } = await auth.createUserWithEmailAndPassword( email, password );
                await createUserProfileDocument( user );
    
                this.setState({ email: '', password: '', confirmPassword});
    
            }catch(error){
                console.log('error creating user', error);
            }
        }



        

        

    }

    handleChange = event => {
        const { value , name } = event.target;

        this.setState({ [name] : value });
    }

    render(){
        return(
            <div className = 'signup'>
                <Header/>
                <div className = 'signup-container'>
                    <div className = 'signup-form'>
                        <h3>Let's sign you up!</h3>
                        <form onSubmit = { this.handleSubmit }>
    
                            <div className = 'signup-button-div button-div'>
                                <button className = 'facebook-btn'>Facebook</button>
                                <button className = 'google-btn' onClick = { signInWithGoogle }>Google</button>
                            </div>
    
                            <p className='already-account' >Already have an account? 
                            <span><Link to = 'signin' > Log in</Link></span></p>
    
                            <input type="email" name="email" value = { this.state.email } onChange={this.handleChange} placeholder = 'email address' />
                            <input type="password" name="password" value = { this.state.password } onChange={this.handleChange} placeholder = 'password'  />
                            <input type="password" name="confirmPassword" value = { this.state.confirmPassword } onChange={this.handleChange} placeholder = 'confirm password'/>
    
    
                            <div className ='signup-form-button-div' ><button className ='signup-form-button'>Sign up</button></div>
    
                        </form>
                    </div>
                    <div className = 'signup-banner' style={{backgroundImage:`url(https://res.cloudinary.com/amarachi-2812/image/upload/v1616715738/signin5_dfz9ms.jpg)`}}></div>
                </div>
            </div>
        )
    }
};

export default SignUp;