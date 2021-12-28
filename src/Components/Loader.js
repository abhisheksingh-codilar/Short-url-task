import React, { Component } from 'react'
import './Loader.scss'

export default class Loader extends Component {
    render() {
        return (
           <>
           <div className="area">
      <div className="scissors-position">
        <div className="scissors">
          <div className="scissors__r">
            <div className="rotate">
              <div className="spike"></div>
              <div className="razor"></div>
              <div className="cable">
                <div className="cable__base"></div>
                <div className="cable__finger"></div>
              </div>
            </div>
          </div>
          <div className="scissors__l">
            <div className="rotate">
              <div className="razor"></div>
              <div className="cable">
                <div className="cable__base"></div>
                <div className="cable__finger"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="trail">
        <div className="trail-rotate"><div className="trail-trace"></div></div>
      </div>
      <div className="paper">
        <div className="paper-rotate">
          <div className="paper-balance">
            <div className="paper__p1"></div>
            <div className="paper__p2"></div>
          </div>
        </div>
      </div>
      <div className="scissors-shadow-position"><div className="shadow"></div></div>
      <div className="p1-shadow-position"><div className="shadow p1-shadow"></div></div>
      <div className="p2-shadow-position"><div className="shadow p2-shadow"></div></div>
    </div>

           </>
        )
    }
}
