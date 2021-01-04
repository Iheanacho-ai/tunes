import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from './component/header/header';
import LandingPage from './pages/landing-page/landing-page';
import SignInPage from './pages/signin-page/signin-page';
import SignUpPage from './pages/signup-page/signup-page';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


import './App.css';

class App extends React.Component{ 
  constructor(){
    super();

    this.state = {
      currentUser : null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if( userAuth ){
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        });


      }else{
        this.setState({ currentUser : userAuth });
      }


    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
      return(
      <div>
        <Route exact path = '/' component = { LandingPage} />
        <Route exact path = '/signin' render={() => this.state.currentUser ? (<Redirect to= '/explore' />) : ( <SignInPage/> )} />
        <Route exact path  = '/signup' render={() => this.state.currentUser ? (<Redirect to= '/explore' />) : ( <SignUpPage/> )} />
      
        
        
      </div>
    )
  }
}
export default App;
