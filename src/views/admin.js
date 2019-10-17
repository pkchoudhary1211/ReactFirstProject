import React from 'react'
import { Component } from 'ag-grid-community';
import Header from './header.js'
import Footer from './footer.js'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import { Zoom } from 'react-slideshow-image';
// import React from 'react';
import { Slide } from 'react-slideshow-image';
import slide1 from '../static/images/slide1.jpg';
import slide2 from '../static/images/slide2.jpg';
import slide3 from '../static/images/slide3.jpg';
const slideImages = [
    'http://redintegro.com/img/slider/slider_1.jpg',
    'http://redintegro.com/img/slider/slider_2.jpg',
    'http://redintegro.com/img/slider/slider_3.jpg',
    'http://redintegro.com/img/slider/slider_4.jpg',
    'http://redintegro.com/img/slider/slider_5.jpg',
  ];
  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    height:400,
    indicators: true,
    arrows: true
  }
class Admin extends React.Component{
    constructor(props) {
        super(props)
        this.state = { isLoading: true }
    }
    
    componentDidMount() {
        setTimeout(()=>{
            this.setState({
                isLoading: false
            })
        },3000)
    }
    render(){
        console.log("url",slideImages[0]);
        return(
            <React.Fragment>
                <Header/>
                 <h1>Main File </h1>
                 <Slide {...properties}>
                    <div className="each-slide">
                    <div style={{backgroundImage: `url(${slideImages[0]})`,'height':400,'background-size': 'cover'}}>
                        <span>Empower</span>
                    </div>
                    </div>
                    <div className="each-slide">
                    <div style={{'backgroundImage': `url(${slideImages[1]})` ,'height':400,'background-size': 'cover'}}>
                        <span>Enhance</span>
                    </div>
                    </div>
                    <div className="each-slide">
                    <div style={{'backgroundImage': `url(${slideImages[2]})` ,'height':400,'background-size': 'cover' ,'background-repeat': 'no-repeat'}}>
                        <span>Elevate</span>
                    </div>
                    </div>
                    <div className="each-slide">
                    <div style={{'backgroundImage': `url(${slideImages[3]})` ,'height':400,'background-size': 'cover' ,'background-repeat': 'no-repeat'}}>
                        <span>Empower</span>
                    </div>
                    </div>
                    <div className="each-slide">
                    <div style={{'backgroundImage': `url(${slideImages[4]})` ,'height':400,'background-size': 'cover' ,'background-repeat': 'no-repeat'}}>
                        <span>Enhance</span>
                    </div>
                    </div>
                </Slide>
                <div className="about-color">
                    <div className="container">
                        <div className="row">   
                            <div className="col-md-12 margin_value">
                                <h1 className="white-color">About RedIntegro </h1>
                            </div>
                        </div>
                        <div className="row">   
                            <div className="col-md-12">
                                <p className="white-color">Redintegro is a software development, consulting and training company formed by senior professionals who have a combined experience of about 200 person years in various roles in the computer software industry.</p>
                            </div>
                        </div>
                        <div className="row">   
                            <div className="col-md-12">
                                <p className="white-color">Have developed software for telecom OSS/BSS, SCADA applications for leading process automation companies , ERP software for top discrete manufacturing companies and have managed large, transnational teams to deliver high quality software on schedule.</p>
                            </div>
                        </div>
                        <div className="row">   
                            <div className="col-md-12 margin_value_bottom">
                                <p className="white-color">Recently, we have also started training, development and consulting services in the areas of data analytics, machine learning and artificial intelligence.</p>
                            </div>
                        </div>
                    </div>
                </div>
                    {/* <div className="center_loader">
                    {this.state.isLoading ?   <Loader
                                            type="Puff"
                                            color="#00BFFF"
                                            height={100}
                                            width={100}
                                            timeout={3000} //3 secs
                                        /> : ''}
                    </div> */}
                 
                <Footer />
            </React.Fragment>
        )
    }
}
export default Admin;