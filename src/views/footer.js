import React from 'react'
import { Component } from 'ag-grid-community';
class Footer extends React.Component{
    render(){
        return(
            <React.Fragment>
               <div className="footer">
                   <div className="container">
                       <div className="row">
                           <div className="col-md-4">
                                <h3 className="white-color">Our Expertise</h3>
                                <ul  className="footer-list">
                                    <li>Development</li>
                                    <li>Consulting</li>
                                    <li>Software Testing</li>
                                    <li>Soft Skills</li>
                                </ul>
                           </div>
                           <div className="col-md-4">
                                <h3  className="white-color">Quick Link</h3>
                                <ul  className="footer-list">
                                    <li>The People</li>
                                    <li>What We Do</li>
                                    <li>Join Us</li>
                                    <li>Contact Us</li>
                                </ul>
                           </div>
                           <div className="col-md-4">
                                <h3  className="white-color">Contact Info</h3>
                                <ul  className="footer-list">
                                    <li>#11, 1st main, 2nd stage</li>
                                    <li>Rajajinagar, West of Chord road</li>
                                    <li>Bangalore - 560086</li>
                                    <li>info@redintegro.com</li>
                                </ul>
                           </div>
                       </div>
                   </div>
               </div>
               <div className="bottom-color white-color">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                            © 2018<span className="light-white"> RedIntegro</span>. All Rights Reserved. Developed by :redintegro
                            </div>
                            <div className="col-md-3">
                            </div>
                            <div className="col-md-3">
                                Back to top
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Footer;