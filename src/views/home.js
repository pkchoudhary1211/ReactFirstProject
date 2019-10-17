import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBDataTable } from 'mdbreact';
import DataTable from 'react-data-table-component';
const axios = require('axios');
const columns = [
    {
        name: 'Id',
        selector: 'id',
        sortable: true,
        right: true,
    },
    {
      name: 'Title',
      selector: 'title',
      sortable: true,
    },
    {
      name: 'Body',
      selector: 'body',
      sortable: true,
      right: true,
    },
  ] ;
  const columnsMDB = [
    
    {
        label: 'userId',
        field: 'userId',
        sort: 'asc',
        width:150
    },
    {
        label: '#',
        field: 'id',
        sort: 'asc',
        width:100
    },
    {
      label: 'Title',
      field: 'title',
      sort: 'asc',
      width:300
    },
    {
      label: 'Body',
      field: 'body',
      sort: 'asc',
      width:600
    },
  ] ;
const data = [{ id: 1, title: 'Conan the Barbarian', year: '1982' } ];
class Home extends React.Component{
    
    constructor(props){
        super(props)
        this.email = React.createRef();
        this.password  = React.createRef();
        this.state = {
           val: "Prakash" ,
           flag:1,
           users:[],
           name:'',
           err:'',
           apiValue:null,
           apiMDBvalue:null,
        }
    }
     componentDidMount=() =>{
        this.apiData();
     }
    check = ()=>{
        const flag=this.state.flag;
        console.log("flag" +flag)
        console.log(this.email.current.value)
        if(flag===1){
            this.setState({
                val:"Hello You clicked",
                flag:0
            })
        }else{
            this.setState({
                val:"Click",
                flag:1
            })
        }
        }
        addUser = () => {
            this.setState((prevState)=>{
                if(prevState.name===''){
                   return{
                    err:'Please Enter Name'
                   } 
                }else{
                    return {
                        users : [...prevState.users, prevState.name],
                        name: "",
                        err:''
                    }
                }
            })
        }
        handleChange(event) {
            this.setState({name: event.target.value})
        }
        formSubmit = (event) =>{
            event.preventDefault();
            console.log("Fom data validation",event)
        }
        apiData = () =>{
            // var self = this;
            axios({
                method: 'get',
                url: 'https://jsonplaceholder.typicode.com/posts',
                responseType: 'stream'
              })
                .then(  (response)=>{
                    this.setState({
                        apiValue: response.data,
                        apiMDBvalue:{'coloums':columnsMDB,'rows': response.data}
                    },()=>{
                        console.log(this.state.apiValue)
                    })
                // getData(response.data);
                //   response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
            
                });
        }
    render(){
        // var val="prakash";
        // const flag=this.state;
        // console.log(this.state.users)
        return(
            <React.Fragment>
                <h1>Hello World</h1>
                <div>
                    <input type="button"  class="btn btn-info" value="Click" onClick={this.check}/>
                    <h1>hello Wolrd {this.state.val}</h1>
                </div>
                <div class="conatiner">
                    <div class="row">
                        <div class="col-md-3">
                        </div>
                        <div class="col-md-3">
                            <input type="text" class="form-control" name="userName" value={this.state.name} onChange={this.handleChange.bind(this)}/> 
                        </div>
                        <div class="col-md-3">
                            <input type="button" onClick={(this.apiData)} class="btn btn-primary" value="add User"/>
                        </div>
                        <div class="col-md-3">
                        </div>
                    </div>
                </div>
                <div class="container">
                    <h2> form</h2>
                    <form onSubmit={this.formSubmit}>
                        <div class="form-group">
                            <input type="email" class="form-control" ref={this.email} id="email" placeholder="Enter email" name="email"/>
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" ref={this.password} id="pwd" placeholder="Enter password" name="pwd"/>
                        </div>
                        <div class="checkbox">
                            <label><input type="checkbox" name="remember"/> Remember me</label>
                        </div>
                        <button type="submit" class="btn btn-secondary">Submit</button>
                    </form>
                </div>
                <DataTable
                    title="Arnold Movies"
                    columns={columns}
                    selectableRowsComponentProps={{ inkDisabled: true }}
                    selectableRows
                    pagination={true}   
                    expandableDisabledField="expanderDisabled"
                    data={this.state.apiValue?this.state.apiValue:[]}
                />
                <h1>MD DataTable</h1>
                <MDBDataTable
                    striped
                    bordered    
                    hover
                    paging={true}
                    columns={columnsMDB}
                    data={this.state.apiMDBvalue ? this.state.apiMDBvalue:[]}
                />
               <div class="container">
                <h2>Basic Table</h2>
                <p>The .table class adds basic styling (light padding and only horizontal dividers) to a table:</p>            
                <table class="table">
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.apiValue ? this.state.apiValue.map(value=>
                        <tr>
                            <td>{value.id}</td>
                            <td>{value.title}</td>
                            <td>{value.body}</td>
                        </tr>
                    ):<h1>Not Found</h1>}
                    </tbody>
                </table>
                </div>
                {this.state.apiValue?this.state.apiValue.map(value =>(
                  <> { value.userId === 2 ?<h6>{value.userId}</h6>: null} </>
                )): <h1>Not Avaialbe</h1>}
              <h3> {this.state.err}</h3> 
                { this.state.users.map((user,index)=>(
                   <h1 key={index}>{user}</h1>
               ))}
            </React.Fragment>
        );       
    }
}
export default Home;