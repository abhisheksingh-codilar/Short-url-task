import React, { Component } from 'react';
import './App.scss';
import Features from './Components/Features';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Searchbar from './Components/Searchbar';


export default class App extends Component {

 
  render() {
    
    return (
      <>
      <Header/>
      <Searchbar/>
      <Features/>
      <Footer/>
     
      </>
    )
  }
}

