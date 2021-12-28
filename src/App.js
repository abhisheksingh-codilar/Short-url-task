import React, { Component } from 'react';
import './App.scss';
import Loader from './Components/Loader';

export default class App extends Component {

  

  timer;

  state={
    value:'',
    shortUrl:'',
    clicked:false,
    btnText:'Shorten It!',
    btnDisabled: false,
    visible:false
  }

  urlText = (e) =>{
    this.setState({value: e.target.value,btnText:"Shorten It!",shortUrl:"",clicked:false})
  

  }

  getShortUrl= (e) => {
    this.setState({btnDisabled:true});
    this.setState({btnText:'fetching...'} );
    this.setState({visible:true} );

    e.preventDefault();
   if(this.state.value.length==0 && this.state.value == this.state.shortUrl){
      alert('Enter any url....');
      this.setState({btnText:'Shorten It!',visible:false})
    }
    else{
      fetch(`https://api.shrtco.de/v2/shorten?url=${this.state.value}`)
  .then(response => response.json())
  .then(data =>this.setState({ shortUrl:data.result.short_link, clicked:true, value:data.result.short_link, btnText:"Copy",btnDisabled:false,visible:false}));
    }
  
  }

  copy = () =>{
    this.setState({clicked:true})
    navigator.clipboard.writeText(this.state.shortUrl);
    this.setState({btnText:'Copied!'} );
    this.timer =setTimeout(() => this.setState({btnText:'Copy'}), 1000);
    
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    
    return (
      <>
      <div className="main-container">
        <h2>Short Link Generator</h2>
          <input type="text" value={ this.state.value }  onChange={this.urlText} placeholder="Shorten your Url..."/>
          <button onClick={!this.state.clicked ? this.getShortUrl : this.copy }
             className={this.state.btnText=='Copied!'? 'btn btn-copied': 'btn' }
             disabled={this.state.btnDisabled} >{this.state.btnText}</button>

        <div className="url-display">Short Url  :  <span>{this.state.shortUrl}</span></div>

      </div>

      {this.state.visible ? <Loader /> : null}
      </>
    )
  }
}

