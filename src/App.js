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
    visible:false,
    error:""
  
  }

  urlText = (e) =>{
    this.setState({value: e.target.value,btnText:"Shorten It!",shortUrl:"",clicked:false})
  }

  getShortUrl= (e) => {
    e.preventDefault();
  
    this.setState({btnText:'fetching...'} );
    this.setState({visible:true} );

   if(this.state.value.length==0 && this.state.value == this.state.shortUrl){
      alert('Enter any url....');
      this.setState({btnText:'Shorten It!',visible:false})
    }

    else{
     
        fetch(`https://api.shrtco.de/v2/shorten?url=${this.state.value}`)
            .then(response => response.json())
            .then(data => {
              if(data.ok){
                this.setState({ shortUrl:data.result.short_link, clicked:true, value:data.result.short_link, btnText:"Copy",btnDisabled:false,visible:false,status:data.ok }) 
              }
              else{
                throw Error(data.error),this.setState({error:data.error,btnText:'Shorten It!',visible:false})
              }
            })
            .catch(e => {
              console.log(e);
            })
          }
  }

  copy = (e) =>{
    e.preventDefault();
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
        <form onSubmit={!this.state.clicked ? this.getShortUrl : this.copy } >

              <label>Get the  short url :

              <input type="text" value={ this.state.value }  onChange={this.urlText} placeholder="Shorten your Url..."/>

              </label>

              <input  type ="submit" onClick={!this.state.clicked ? this.getShortUrl : this.copy }
                className={this.state.btnText=='Copied!'? 'btn btn-copied': 'btn' }
              value={this.state.btnText} />

        </form>

      </div>

      {this.state.visible ? <Loader /> : null}

      <span>{this.state.error}</span>
      </>
    )
  }
}

