import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './Header';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header/>
            <h1>Checkout Page</h1>
          </Route>

          <Route path="/login">
            <h1>Login Page</h1>
          </Route>

          {/* This is the default route i.e. Home Page */}
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
    );
    
    // We need React-Router for this
  }
  
  export default App;
  