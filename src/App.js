import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  // NavLink
} from "react-router-dom";
import Home from './views/home.js'
import Test from './views/testMDB.js'
import Admin from './views/admin.js'
import Contact from './views/contact.js'
import Login from './views/login.js'
import TestContact from './views/testContact.js'
import EditConatct from './views/editContact.js'
import Register from './views/register.js'
class App extends Component {
  render(){
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/register" component={Register} />
          <Route path='/test' component ={Test} />
          <Route path='/index'component={Admin}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/login' component={Login}/>
          <Route path='/edit/:id' component={EditConatct}/>
          {/* <Link to="/home">Home</Link> */}
          <Route path="/info" component={TestContact}/>
        </Switch>
        <Switch className="test">
         
        </Switch>
        <Switch className="test">
         
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
