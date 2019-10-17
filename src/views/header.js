import React from 'react'
import { Component } from 'ag-grid-community';
import "../static/style.css"
import { Link } from "react-router-dom"; 
class Header extends React.Component {
    constructor(props){
        super(props)
        this.state={
            path_value:window.location.pathname
        }
    }
    render() {
       
        return (
            <React.Fragment>
                <div lang="en" class="full-height">
                    <header>
                        <nav class="navbar fixed-top navbar-expand-lg navbar-dark indigo">
                            <a class="navbar-brand" href="#"><strong><span className="black_color">Red</span><span className="red_color">Integro</span></strong></a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav mr-auto">
                                    <li  className={this.state.path_value==='/index'?"nav-item active" :"nav-item"} >
                                        <Link class="nav-link" to="/index">Home <span class="sr-only">(current)</span></Link>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">THE PEOPLE</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">WHAT WE DO</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">OUR EDGE</a>
                                    </li>
                                    <li className={this.state.path_value==='/contact'?"nav-item active" :"nav-item"}>
                                        <Link class="nav-link" to="/contact">CONTACT US</Link>
                                    </li>
                                </ul>
                                <ul class="nav navbar-nav nav-flex-icons ml-auto">
                                    <li class="nav-item">
                                    <a class="nav-link"><i class="fas fa-envelope"></i> <span class="clearfix d-none d-sm-inline-block">Contact</span></a>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link"><i class="far fa-comments"></i> <span class="clearfix d-none d-sm-inline-block">Support</span></a>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link"><i class="fas fa-user"></i> <span class="clearfix d-none d-sm-inline-block">Account</span></a>
                                    </li>
                                    <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">
                                        More
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>
                                </ul>
                            </div>
                        </nav>
                        <div class="view intro-2">
                            <div class="full-bg-img">
                                <div class="mask rgba-black-light flex-center">
                                    <div class="container text-center white-text">
                                        <div class="white-text text-center wow fadeInUp">
                                            <h2>This Navbar is fixed</h2>
                                            <h5>It will always stay visible on the top, even when you scroll down</h5>
                                            <p>Full page intro with background image will be always displayed in full screen mode, regardless
              of device </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
               </div>
            </React.Fragment>
        );
    }
}
export default Header;