import React from 'react'
import Header from './header.js'
import Footer from './footer.js'
import SimpleReactValidator from 'simple-react-validator';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';//-react-validator';
const axios = require('axios');
const nodemailer = require('nodemailer'); 
// const creds = require('./config');
var transport = {
  host: 'smtp.mailtrap.io', // e.g. smtp.gmail.com
  auth: {
    user: '4dc7ea6a3b078a',
    pass: '08471842350daf'
  }
}
// var transporter = nodemailer.createTransport(transport)
class Contact extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            email: null,
            name:'',
            subject:'',
            message:'',
        }
        this.validator = new SimpleReactValidator({autoForceUpdate: this,messages: {
            email: 'That is not an E mail!!.',
            // OR
            default: 'Validation has failed!'  // will override all messages
          },element: message => <div style={{color: "red"}}>{message}</div>});

        this.contactForm = this.contactForm.bind(this)
        this.main = this.main.bind(this)
    }

    main() {
        if (this.validator.allValid()) {
            alert('You submitted the form and stuff!');
            console.log("test here")
                var user={
                    'name':this.state.name,
                    'email':this.state.email,
                    'subject':this.state.subject,
                    'message':this.state.message
                };
                axios.post(`http://localhost:8000/frontend/contact`,{ user })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                })
              console.log('All works fine, congratz!');
          }else {
            this.validator.showMessages();
            // rerender to show messages for the first time
            // you can use the autoForceUpdate option to do this automatically`
            this.forceUpdate();
        }
    }
    contactForm(event){
        event.preventDefault();
        console.log("form submited",this.state.email,"name :",this.state.name,"subject :",this.state.subject,'message :',this.state.message)
        // let testAccount = await nodemailer.createTestAccount();
        this.main()
        
    }
    render(){
       
        console.log(this.state.email)
        return(
            <React.Fragment>
                <Header/>
                <h1>/</h1>
                {/*Section: Contact v.2*/}
                <div className="contact-form">
                    <div className="container">
                    <section className="mb-4">
                        {/*Section heading*/}
                        <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
                        {/*Section description*/}
                        <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                        a matter of hours to help you.</p>
                        <div className="row">
                        {/*Grid column*/}
                        <div className="col-md-9 mb-md-0 mb-5">
                            <form id="contact-form" onSubmit={this.contactForm}>
                            {/*Grid row*/}
                            <div className="row">
                                {/*Grid column*/}
                                <div className="col-md-6">
                                <div className="md-form mb-0">
                                    <input type="text" id="name" name="name"  value={this.state.name} onChange={(e)=>{
                                        this.setState({
                                            name:e.target.value
                                        })
                                    }}   onBlur={() => this.validator.showMessageFor('name')}placeholder="Please Enter Your Name" className="form-control" />
                                     {this.validator.message('name', this.state.name, 'required')}
                                </div>
                                </div>
                                {/*Grid column*/}
                                {/*Grid column*/}
                                <div className="col-md-6">
                                <div className="md-form mb-0">
                                    <input type="text" id="email"  value={this.state.email} name="email" onChange={(e)=>{
                                        this.setState({
                                            email: e.target.value
                                        })
                                    }} onBlur={() => this.validator.showMessageFor('email')}  placeholder="Please Enter Your Email Id" className="form-control"/>
                                    
                                    {this.validator.message('email', this.state.email, 'required|email')}

                                </div>
                                </div>
                                {/*Grid column*/}
                            </div>
                            {/*Grid row*/}
                            {/*Grid row*/}
                            <div className="row">
                                <div className="col-md-12">
                                <div className="md-form mb-0">
                                    <input type="text" id="subject"  value={this.state.subject} onChange={(e)=>{
                                        this.setState({
                                            subject:e.target.value
                                        })
                                    }}  onBlur={() => this.validator.showMessageFor('subject')} placeholder="Please Enter Your Subject" name="subject" className="form-control" />
                                </div>
                                {this.validator.message('subject', this.state.subject, 'required')}
                                </div>
                            </div>
                            {/*Grid row*/}
                            {/*Grid row*/}
                            <div className="row">
                                {/*Grid column*/}
                                <div className="col-md-12">
                                <div className="md-form">
                                    <textarea type="text" value={this.state.message} onChange={(e)=>{
                                        this.setState({
                                            message:e.target.value
                                        })
                                    }}   onBlur={() => this.validator.showMessageFor('message')} id="message" name="message" placeholder="Please Enter Your message" rows={2} className="form-control md-textarea" defaultValue={""} />
                                </div>
                                </div>
                                {this.validator.message('message', this.state.message, 'required')}
                            </div>
                            {/*Grid row*/}
                           
                            <div className="text-center text-md-left">
                            <button className="btn btn-primary" type="submit">Send Message</button>
                            </div>
                            </form>
                            <div className="status" />
                        </div>
                        {/*Grid column*/}
                        {/*Grid column*/}
                        <div className="col-md-3 text-center">
                            <ul className="list-unstyled mb-0">
                            <li><i className="fas fa-map-marker-alt fa-2x" />
                                <p>Rajajinagar, West of Chord road, Bangalore 560086, India</p>
                            </li>
                            <li><i className="fas fa-phone mt-4 fa-2x" />
                                <p>+ 01 234 567 89</p>
                            </li>
                            <li><i className="fas fa-envelope mt-4 fa-2x" />
                                <p>info@redintegro.com</p>
                            </li>
                            </ul>
                        </div>
                        {/*Grid column*/}
                        </div>
                    </section>
                    
                    </div>

                </div>
      {/*Section: Contact v.2*/}
                <Footer/>
            </React.Fragment>
        )
    }
}
export default Contact;