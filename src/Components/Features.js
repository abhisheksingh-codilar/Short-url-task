import React, { Component } from 'react'
import './Features.scss'
import brand from '../images/icon-brand-recognition.svg'
import detailed from '../images/icon-detailed-records.svg'
import fully from '../images/icon-fully-customizable.svg'

export default class Features extends Component {
    render() {
        return (
            <>
            <div className="features-outer">
              <div className="features">
                  <div className="features-heading">     
                    <h2>Advanced Statistics</h2>
                    <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
                  </div>

                    <div className="brandBoxes">

                        <div className="line">
                            </div>    
                        <div className="brand box">
                            <div className="img">
                                <img src={brand} alt="" />
                            </div>
                            <div className="box-content">
                                <h3>Brand Recognition</h3>
                                <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
                            </div>
                        </div>


                        <div className="detailed box">
                        <div className="img">
                                <img src={detailed} alt="" />
                            </div>
                            <div className="box-content">
                                <h3>Detailed Records</h3>
                                <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                            </div>
                        </div>

                        <div className="fully box">
                        <div className="img">
                                <img src={fully} alt="" />
                            </div>
                            <div className="box-content">
                                <h3>Fully Customizable</h3>
                                <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                            </div>
                        </div>

                    </div>
                  
                  </div>  
            </div>
        
            <div className="advertesiment-section-outer">
                <div className="advertesiment-section">
                    <h1>Boost your links today</h1>
                    <button className ="get-btn">Get Started</button>
                </div>
            </div>
            </>
        )
    }
}
