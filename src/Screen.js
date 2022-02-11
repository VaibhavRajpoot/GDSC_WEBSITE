import React, { forwardRef } from "react";
import Button from './components/Button'
const Screen = forwardRef(({ caption, scroll }, ref) => (
    <div
      ref={ref}
      onScroll={(e) => {
        scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)
        caption.current.innerText = scroll.current.toFixed(2)
      }}
      className="scroll">
      <Button/>
      <div style={{ height: "400vh" }}>
        <div className="dot">
          <h1>Google Developer</h1>
          <h1 style={{float:"left"}}>Student&nbsp;</h1>
          <h1 style={{color:"blue", "margin-bottom":"0.5em"}}> Club</h1>
          JAYPEE UNIVERSITY OF ENGINEERING AND TECHNOLOGY
        </div>
      </div>
      <div style={{ height: "200vh" }}>
        <div className="dot">
          <h1>ALL GROUPS</h1>
        </div>
      </div>
      <div style={{ height: "200vh" }}>
        <div className="dot">
          <h1>UpComing Events</h1>
        </div>
      </div>
      <div style={{ height: "200vh" }}>
        <div className="dot">
          <h1>TeamLeads</h1>
        </div>
      </div>
      <div style={{ height: "200vh" }}>
        <div className="dot">
          <h1>PartnerShips</h1>
        </div>
      </div>
      <div style={{ height: "200vh" }}>
        <div className="dot">
          <h1>Footer</h1>
        </div>
      </div>
      <div style={{ height: "200vh" }}>
        <div className="dot">
          <h1>Others...</h1>
        </div>
      </div>
    </div>
  ))
  
  export default Screen;