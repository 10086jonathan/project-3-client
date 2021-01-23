import { useState } from 'react';

import { getUser, logout } from './services/userService';

import Footer from './components/Footer'
import Header from './components/Header'

import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

import './App.css';

import { Redirect, Route, Switch, withRouter } from 'react-router-dom'

function App(props) {

  const [ userState, setUserState ] = useState({
    user: getUser()
  });

  function handleSignupOrLogin() {
    setUserState({
      user: getUser()
    })
  }

  function handleLogout() {
    logout();

    setUserState({ user: null });
    
    props.history.push('/');
  }

  return (
    <div className="App">
      <Header handleLogout={handleLogout} user={userState.user}/>
        <main>
          <Switch>
            <Route exact path="/" render={props =>
              <HomePage />
              } />
            <Route exact path="/dashboard" render={props =>
              userState.user ?
              <DashboardPage />
              :
              <Redirect to="/login" />
              } />
            <Route exact path="/signup" render={props =>
              <SignupPage {...props} handleSignupOrLogin={handleSignupOrLogin}/>
              } />
            <Route exact path="/login" render={props =>
              <LoginPage {...props} handleSignupOrLogin={handleSignupOrLogin}/>
              } />
          </Switch>
        </main>
      <Footer />
    </div>
  );
}

export default withRouter(App);
