import './App.scss';
import Nav from './components/navigation/nav';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Login from './components/login/login';

function App() {
  return (
    <Router>
      <div className='app-container'>
        {/* <Nav/> */}
        <Switch>
            <Route path="/news">
              news
            </Route>
            <Route path="/about">
              about
            </Route>
            <Route path="/contact">
              contact
            </Route>
            <Route path="/">
              Home
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="*">
              404 Not Found
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
