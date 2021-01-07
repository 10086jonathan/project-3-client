import Footer from './components/Footer'
import Header from './components/Header'

import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

import './App.css';

import { Route, Switch, Redirect } from 'react-router-dom'

// create three page components, login, signup, dashboard, home
// define as a function component and export them
// have them return a div with the text content of login, signup ... etc
// import thme into app.js
// import switch and route from react router and then define the various routes for all pages

function App() {
  return (
    <div className="App">
      <Header />
        <main>
          <Switch>
            <Route exact path="/" render={props =>
              <HomePage />
              } />
            <Route exact path="/dashboard" render={props =>
              <DashboardPage />
              } />
            <Route exact path="/signup" render={props =>
              <SignupPage {...props} />
              } />
            <Route exact path="/login" render={props =>
              <LoginPage {...props} />
              } />
          </Switch>
        </main>
      <Footer />
    </div>
  );
}

export default App;
