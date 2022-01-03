import React, { Component } from 'react'
import './Header.scss'
import logo from '../images/logo.svg'
import ham from '../images/hamburger.svg'
import cross from '../images/cross.svg'
import illustration from '../images/illustration-working.svg'

export default class Loader extends Component {

    state={
        isClicked:false
    }

    clicking = () =>{
        if(this.state.isClicked){
            
            document.querySelector('.page-link-outer').style.display='none';
            document.body.style.overflow ="scroll";  
        }
        else{
            document.querySelector('.page-link-outer').style.display='block'; 
            document.body.style.overflow ="hidden";  
        }
        this.setState({isClicked:!this.state.isClicked})


    }

    render() {
        return (
           <>
           <div className="header" id="head">

                <div className="navbar-desktop">
                    <div className="about">
                        <a href="#" className="app-name">
                            <img src={logo} href=""/></a>  
                        <a href="#">Features</a>
                        <a href="#">Pricing</a>
                        <a href="#">Resources</a>
                    </div>
                    <div className="auth">
                        <button className="login">Login</button>
                        <button className="signup">Sign Up</button>
                    </div>
                </div>


                <div className="navbar-mobile-outer">

                <div className="navbar-mobile" >
                <img src={logo} href=""/>
                <img src={!this.state.isClicked? ham :cross} className="icon-img" href ="" onClick={this.clicking}/>
                </div>

                <div className="page-link-outer">

                <div className="page-link">
                        <a href="#">Features</a>
                        <a href="#">Pricing</a>
                        <a href="#">Resources</a>
                        <span className="hr-line"></span>
                        <button className="login">Login</button>
                        <button className="signup">Sign Up</button>

                </div>
                </div>
                </div>


                <div className="content-container">
                    <div className="content-description">
                        <h1>More than just shorter links</h1>
                        <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                        <button>Get Started</button>

                    </div>
                    <div className="content-image">
                        <img src={illustration} alt="" />
                    </div>
                </div>


           </div>
           </>
        )
    }
}
