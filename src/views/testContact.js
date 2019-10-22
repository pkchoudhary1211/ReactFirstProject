import React from 'react'
import { Component } from 'ag-grid-community';
import SimpleReactValidator from 'simple-react-validator';
import { MDBDataTable } from 'mdbreact';
import DataTable from 'react-data-table-component';
import { Redirect } from 'react-router-dom'

const axios = require('axios');
const instance = axios.create({baseURL: 'http://127.0.0.1:8000'})
const columnsMDB = [
    {
        label: 'Id',
        field: '_id',
        sort: 'asc',
        width:200
    },
    {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width:300
    },
    {
        label: 'E-mail',
        field: 'email',
        sort: 'asc',
        width:300
    },
    {
      label: 'Subject',
      field: 'subjecr',
      sort: 'asc',
      width:300
    },
    {
      label: 'Message',
      field: 'message',
      sort: 'asc',
      width:100
    },
  ] ;
class TestContact extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: null,
            name:'',
            subject:'',
            message:'',
        //     val: "Prakash" ,
        //    flag:1,
           users:[],
           name:'',
           err:'',
           keyword:'',
           apiValue:null,
           apiMDBvalue:null,
        }
        this.validator = new SimpleReactValidator({autoForceUpdate: this,messages: {
            email: 'That is not an E mail!!.',
            // OR
            default: 'Validation has failed!'  // will override all messages
          },element: message => <div style={{color: "red"}}>{message}</div>});
        this.contactForm = this.contactForm.bind(this)
        this.main = this.main.bind(this)
        this.getContact = this.getContact.bind(this)
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
                instance.post(`/contact/insert`,{  'name':this.state.name,
                'email':this.state.email,
                'subject':this.state.subject,
                'message':this.state.message})
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                    this.getContact();
                })
                console.log('All works fine, congratz!');
          }else {
            this.validator.showMessages();
            this.forceUpdate();
        }
    }
    contactForm(event){
        event.preventDefault();
        console.log("form submited",this.state.email,"name :",this.state.name,"subject :",this.state.subject,'message :',this.state.message)
        // let testAccount = await nodemailer.createTestAccount();
        this.main()
        event.target.reset();
        
    }
    componentDidMount(){
        // /contact/remove/
        this.getContact()
    }
    removeContact(id){
        axios.defaults.port = 8000;
        let isRemove=window.confirm('Are You Sure To Delete This Record ?')
        if(isRemove){
            instance.get('/contact/remove/'+id)
            .then(res => {
                this.getContact()
            })
            .catch(error =>{
                console.log(error)
            })
            console.log('user Id:',id);
        }
    }
    searchContact(event){

    }
    editContact(id){
        this.props.history.push('/edit/'+id);
        // this.props.history.push('/edit/'+id);
        // return <Redirect to='/edit/23' />
        console.log("htisi",id)
    }
    getContact(){
        // instance.post('/graphql')
        instance({
            url: '/graphql',
            method: 'post',
            data: {
              query:  `
                query {
                    contacts {
                    name
                    _id
                    email
                    subject
                    message
                    }
                }`
            }
          }).then((result) => {
            console.log('new result',result.data)
            const contact = result.data.data.contacts;
            console.log('const',contact)
            this.setState({ apiMDBvalue: contact });
          });


        // console.log("Inside get function");
        // const requestBody = {
        //     query: `
        //         query {
        //           contacts {
        //             name
        //             email
        //             subject
        //             message
        //           }
        //         }
        //       `
        //   };
        //   instance.post("/graphql",
        //    {requestBody})
        //     .then(res => {
        //         console.log("result",res);
        //       if (res.status !== 200 && res.status !== 201) {
        //         throw new Error("Failed!");
        //       }
        //       return res.json();
        //     })
        //     .then(resData => {
        //       const contact = resData.data.contacts;
        //       console.log(contact);
        //       this.setState({ apiMDBvalue: contact });
        //     })
        //     .catch(err => {
        //       console.log(err);
        //     });
        // axios
        
        // console.log('called here  in getcCOntact')
        // .defaults.port = 8000;
        // instance.get('/contact/list')
        // .then(res => {
        //     console.log('data result:',res);
        //     console.log('second value:',res.data);
        //     this.setState({
        //         // apiMDBvalue:{'coloums':columnsMDB,'rows': res.data}
        //         apiMDBvalue:res.data,
        //     });
        // })
        // .catch(error =>{
        //     console.log(error)
        // })
        // axios({
        //     method: 'get',
        //     url: 'http://localhost:8000/contact/list',
        //     responseType: 'stream'
        //   })
        //     .then(  (response)=>{
        //         console.log('    :',response)
        //         this.setState({
        //             apiValue: response.data,
        //             apiMDBvalue:{'coloums':columnsMDB,'rows': response.data}
        //         },()=>{
        //             console.log('api data vcaoue:',this.state.apiValue)
        //         })
        //     // getData(response.data);
        //     //   response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
        
        //     });
    }
    render(){
        return(
            <React.Fragment>
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
                    {/* <MDBDataTable
                        striped
                        bordered    
                        hover
                        paging={true}
                        columns={columnsMDB}
                        data={this.state.apiMDBvalue ? this.state.apiMDBvalue:[]}
                    /> */}
                     <div className="row">
                     <div className="col-md-3">
                            {/* <h4>Search</h4> */}
                            {/* <input type="text" name="search"/> */}
                        </div>
                        <div className="col-md-3">
                            <h4>Search</h4>
                            {/* <input type="text" name="search"/> */}
                        </div>
                        <div className="col-md-3">
                            {/* <input type="text" name="search" onChange={this.searchContact(event)}/> */}
                        </div>
                        <div className="col-md-3">
                            {/* <input type="text" name="search"/> */}
                        </div>
                       
                        
                    </div>
                    {/* </div> */}
                    <table class="table table-hover">
                    <thead>
                        <tr>
                        {/* <th scope="col">#</th> */}
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Meaasge</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.apiMDBvalue!=null ? this.state.apiMDBvalue.map(value =>
                        <tr>
                            {/* {i=0} */}
                            <th scope="row">{value.name}</th>
                            {/* <td>{i++}</td> */}
                            <td>{value.email}</td>
                            <td>{value.subject}</td>
                            <td>{value.message}</td>
                            <td>
                                <button type="button" class="btn btn-danger px-3" onClick={this.removeContact.bind(this,value._id)}><i class="fas fa-user-times" aria-hidden="true"></i></button>
                                <button type="button" class="btn btn-warning px-3" onClick={this.editContact.bind(this,value._id)}><i class="fas fa-user-edit" aria-hidden="true"></i></button>
                                
                            </td>
                        </tr>
                        ):<h1>Not Found</h1>}
                    </tbody>
                    </table>
                </div> 
            </React.Fragment>
        );
    }
}
export default TestContact;