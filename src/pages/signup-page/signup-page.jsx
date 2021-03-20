import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../component/header/header';
import SignUpImg from '../../assets/signin5.jpg';
import { auth, createUserProfileDocument, signInWithGoogle } from '../../firebase/firebase.utils';
import './signup-page.styles.css';

class SignUp extends React.Component{
    constructor(){
        super()

        this.state = {
            email: '',
            displayName: '',
            password: ''
        }

    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, displayName, password } = this.state;

        try{
            const { user } = await auth.createUserWithEmailAndPassword( email, password );
            await createUserProfileDocument( user, { displayName });

            this.setState({ email: '', displayName: '', password: ''});

        }catch(error){
            console.log('error creating user', error);
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
    
                            <input type="email" name="email" value = { this.state.email } onChange={this.handleChange} />
                            <input type="text" name="displayName" value = { this.state.displayName } onChange={this.handleChange} />
                            <input type="password" name="password" value = { this.state.password } onChange={this.handleChange} />
    
    
                            <div className ='signup-form-button-div' ><button className ='signup-form-button'>Sign up</button></div>
    
                        </form>
                    </div>
                    <div className = 'signup-banner' style={{backgroundImage:`url(${SignUpImg})`}}></div>
                </div>
            </div>
        )
    }
};

export default SignUp;