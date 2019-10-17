import React from 'react'
// import { Component } from 'ag-grid-community';
// import GoogleLogin from 'react-google-login';
// or
import { GoogleLogin } from 'react-google-login';
const responseGoogle = (response) => {
    console.log(response);
}
class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            email:'',
            imageUrl:''            
        }

        this.responseGoogle= this.responseGoogle.bind(this)
    }
    responseGoogle(data){
        console.log("got user")
        console.log("user data",data.profileObj);
        this.setState({
            name:data.profileObj.name,
            email:data.profileObj.email,
            imageUrl:data.profileObj.imageUrl
        })
    }
    onFailure(data){
        console.log(data)
    }
    render(){
        return(
            <React.Fragment>
                <h1> login page</h1>
                   <div className="container-fluid">
                        {/* Section: Edit Account */}
                        <section className="section">
                        {/* First row */}
                        <div className="row">
                            {/* First column */}
                            <div className="col-lg-4 mb-4">
                            {/* Card */}
                            <div className="card card-cascade narrower">
                                {/* Card image */}
                                <div className="view view-cascade gradient-card-header mdb-color lighten-3">
                                <h5 className="mb-0 font-weight-bold">{this.state.name}</h5>
                                </div>
                                {/* Card image */}
                                {/* Card content */}
                                <div className="card-body card-body-cascade text-center">
                                { this.state.email==''? '' :
                                    <>
                                     <img src={this.state.imageUrl} alt="User Photo" className="z-depth-1 mb-3 mx-auto" />
                                    <p className="text-muted"><small>{this.state.email}</small></p>
                                    <div className="row flex-center">
                                        <button className="btn btn-info btn-rounded btn-sm waves-effect waves-light">Edit</button><br />
                                     </div>
                                    </>
                                }
                                </div>
                                <GoogleLogin
                                    clientId="907270977097-68lm5uj9kim80gsrpto7ooblinntav7h.apps.googleusercontent.com"
                                    buttonText="Login With Google"
                                    className="btn btn-info btn-rounded btn-sm waves-effect waves-light"
                                    onSuccess={this.responseGoogle}
                                    onFailure={responseGoogle}
                                    cookiePolicy={'single_host_origin'}
                                />,
                                {/* Card content */}
                            </div>
                            {/* Card */}
                            </div>
                            {/* First column */}
                            {/* Second column */}
                            <div className="col-lg-8 mb-4">
                            {/* Card */}
                            
                            {/* Card */}
                            </div>
                            {/* Second column */}
                        </div>
                        {/* First row */}
                        </section>
                        {/* Section: Edit Account */}
                    </div>

            </React.Fragment>
            
        );
    }
}
export default Login;