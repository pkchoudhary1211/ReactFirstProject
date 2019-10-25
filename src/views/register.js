import React from 'react'
// import { Component } from 'ag-grid-community';
// import GoogleLogin from 'react-google-login';
// or
import { Redirect } from 'react-router';
import "../static/style.css"
import SimpleReactValidator from 'simple-react-validator';
import { GoogleLogin } from 'react-google-login';
import Login from './login.js'
import { Provider } from 'react-redux'
// import store from './store'
const responseGoogle = (response) => {
    console.log(response);
}
class Register extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            email:'',
            password:''            
        }
        this.validator = new SimpleReactValidator({autoForceUpdate: this,messages: {
            email: 'That is not an E mail!!.',
            min: "please Enter minimum 6 letter",
            default: 'Validation has failed!'  // will override all messages
        },element: message => <div style={{color: "red"}}>{message}</div>});
        this.userLogin= this.userLogin.bind(this)
        // this.responseGoogle= this.responseGoogle.bind(this)
    }
    userLogin(event){
        event.preventDefault()
        if(this.validator.allValid()){
            return(
            <Login  data={'test value'}/>);
            console.log("password value",this.state.password,"name:",this.state.name,"email:",this.state.email)
        }
        else{
            this.validator.showMessages()
            this.forceUpdate()
        }
    }
    // responseGoogle(data){
    //     console.log("got user")
    //     console.log("user data",data.profileObj);
    // }
      render(){
        return(
            <React.Fragment>
                <h1> Register page</h1>
                <Provider store={'store'}>
                   
                </Provider>,
                    <div className="wrapper fadeInDown">
                        <div id="formContent">
                        {/* Tabs Titles */}
                        {/* Icon */}
                        <div className="fadeIn first">
                            <img src="https://png.pngtree.com/svg/20161229/_username_login_1172579.png" id="icon" alt="User Icon" />
                        </div>
                        {/* Login Form */}
                        <form onSubmit={this.userLogin.bind(this)}>
                            <input type="text" id="login" className="fadeIn second" name="name" placeholder="Name" onChange={(e)=>{
                                this.setState({
                                    name:e.target.value
                                })
                            }} 
                            onBlur={()=> this.validator.showMessageFor('name')} />
                            {this.validator.message('name',this.state.name,'required')}
                            <input type="text" id="login" className="fadeIn second" name="email" placeholder="Email" onChange={(e)=>
                            this.setState({
                                email:e.target.value
                            })} 
                            onBlur={()=>{
                                this.validator.showMessageFor('email')
                            }} />
                            {this.validator.message('email',this.state.email,'email|required')}
                            <input type="text" id="password" className="fadeIn third" name="password"  placeholder="password" 
                            onChange={(e)=>{
                                this.setState({
                                    password:e.target.value
                                })
                            }} 
                            onBlur={()=>{
                                this.validator.showMessageFor('password')
                            }}/>
                            {this.validator.message('password',this.state.password,'required|min:6')}
                            <input type="submit" className="fadeIn fourth" defaultValue="Log In" />
                        </form>
                        {/* Remind Passowrd */}
                        <div id="formFooter">
                            <a className="underlineHover" href="#">Forgot Password?</a>
                        </div>
                        </div>
                    </div>
            </React.Fragment>
            
        );
    }
}
export default Register;