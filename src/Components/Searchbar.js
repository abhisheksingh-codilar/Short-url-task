import React, { Component } from 'react';
import './Searchbar.scss'

export default class Searchbar extends Component {
    state={
        value:'',
        btnText:"Copy",
        cards:[],
        empty:false,
        falseLink:false
      }


    urlText = (e) =>{
        this.setState({value: e.target.value})
        this.setState({empty:false,falseLink:false})
      }

      getShortUrl= (e) => {

        e.preventDefault();

        if(this.state.value.length == 0){
            this.setState({empty:true})
        }
        else{

        
      
            fetch(`https://api.shrtco.de/v2/shorten?url=${this.state.value}`)
                .then(response => response.json())
                .then(data => {if(data.ok){
                    this.setState({cards:[...this.state.cards,{url:data.result.short_link,search:this.state.value,clicked:false}],value:""})
                }
                else{
                    this.setState({falseLink:true})
                }
            } )  
                       
      }
    }

      copy= (url,id) =>{
        navigator.clipboard.writeText(url);
        var elements = document.getElementsByClassName("copy-btn");
       elements[id].innerHTML ='Copied!';
       elements[id].style.backgroundColor  ='#3b3054';
       elements[id].style.border =' 1px solid #3b3054';
      }

    render() {
        return (
            <>
            <div className="searchbar-outer">

              <div className="searchbar-container">
                    <form  onSubmit={this.getShortUrl}>

                        
                        <input type="text" value={ this.state.value } id="input" onChange={this.urlText} placeholder="Shorten a link here..." className={this.state.empty || this.state.falseLink ? 'urlInput emptyInput': 
                        'urlInput'}/>

                        {this.state.empty && <span className="empty-error">Please enter url</span>}

                        {this.state.falseLink && <span className="false-link-error">Please enter a valid url</span> }
                        
                        
                        <input  type ="submit"  className="sub-btn" value="Shorten it!"/>
                       
                       
                     </form>
                     

                  </div>  

                  <div className="urlCards-outer" >
                {
                    this.state.cards.map((card,i) => {
                        return(
                            <div className="urlCards" key={i}>
                                <p className="org-url">https://{card.search}</p>

                                <div className="short-url-container">
                                    <a className =" short-url" href={card.url} target="_blank">{card.url}</a>
                                    <button className ="copy-btn" onClick={() => this.copy(card.url,i)}>Copy</button>
                                </div>
                            </div>
                        )
                    })
                }
              
            </div>
            </div>

            
            </>
        )
    }
}
