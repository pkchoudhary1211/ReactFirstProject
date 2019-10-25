import React from 'react'
import "../static/chatStyle.css"
import io from 'socket.io-client';
const axios = require('axios');
const instance = axios.create({baseURL: 'http://127.0.0.1:8000'})
class Chat extends React.Component{
    constructor(props){
        super(props)
        this.getChat = this.getChat.bind(this)
        this.getChat= this.getChat.bind(this)
        this.state={
            chateData:null,
            sendValue:'',
        }
    }
    componentDidMount(){
        this.getChat()
        // var socket = require('socket.io-client')('http://localhost:8001');
        // socket.on('disconnect', function(){
        //     console.log('discounnected')
        // });
    }
    sendChat=()=>{
        if(this.state.sendValue){
            let body={
                sender:'user',
                message:this.state.sendValue
            }
            console.log('user data value')
            var socket = require('socket.io-client')('http://localhost:8002',{ query: body });
            socket.on('sendChat', function(){
                console.log('connect')
            });
            this.setState({
                sendValue:''
            })
        }
    }
    getChat=()=>{
            var socket = require('socket.io-client')('http://localhost:8001');
        socket.on('responseData', (data)=>{
            console.log('redata',data)
            this.setState({
                chateData:data!=null ? data.chat:[]
            })

        });
        
        // let body ={
        //     query:`query{
        //         getChat{
        //             chat{
        //               message,
        //               sender,
        //               date
        //             }
        //         }
        //     }`
        // }
        // instance({
        //     url:'graphql',
        //     method:'post',
        //     data:body
        // }).then(res=>{
        //     console.log('user result',res.data.data.getChat.chat);
        //     this.setState({
        //         chateData:res.data.data.getChat.chat
               
        //     })
        // })
    }
    render(){
        return(
            <React.Fragment>
                <div className="container">
                <h3 className=" text-center">Chat With Me</h3>
                <div className="messaging">
                <div className="inbox_msg">
                    <div className="inbox_people">
                    <div className="headind_srch">
                        <div className="recent_heading">
                        <h4>Recent</h4>
                        </div>
                        <div className="srch_bar">
                        <div className="stylish-input-group">
                            <input type="text" className="search-bar" placeholder="Search" />
                            <span className="input-group-addon">
                            <button type="button"> <i className="fa fa-search" aria-hidden="true" /> </button>
                            </span> </div>
                        </div>
                    </div>
                    <div className="inbox_chat">
                        <div className="chat_list active_chat">
                        <div className="chat_people">
                            <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                            <div className="chat_ib">
                            <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                            <p>Test, which is a new approach to have all solutions 
                                astrology under one roof.</p>
                            </div>
                        </div>
                        </div>
                        <div className="chat_list">
                        <div className="chat_people">
                            <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                            <div className="chat_ib">
                            <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                            <p>Test, which is a new approach to have all solutions 
                                astrology under one roof.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="mesgs">
                    <div className="msg_history">
                        {this.state.chateData!=null ? this.state.chateData.map(value=>
                            <> 
                        {value.sender=='admin' ?
                         <div className="incoming_msg">
                          {/* <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div> */}
                        <div className="received_msg">
                            <div className="received_withd_msg">
                            <p>{value.message}</p>
                            <span className="time_date">{value.date}</span></div>
                        </div>
                        </div>  
                        :
                        <div className="outgoing_msg">
                        <div className="sent_msg">
                            <p>{value.message}</p>
                            <span className="time_date">{value.date}</span> </div>
                        </div>
                        }    
                        </>
                        ):'No data' }
                    </div>
                    <div className="type_msg">
                        <div className="input_msg_write">
                        <input type="text" className="write_msg" value={this.state.sendValue}  placeholder="Type a message" onChange={(e)=>{
                            this.setState({
                                sendValue:e.target.value
                            })
                        }} />
                        {
                            this.state.sendValue ? <button className="msg_send_btn" type="button" onClick={this.sendChat}><i className="fa fa-paper-plane-o" aria-hidden="true" /></button>
                            : ''
                        }
                        
                        </div>
                    </div>
                    </div>
                </div>
                </div></div>
            </React.Fragment>
        )
    }
}
export default Chat