import React, { forwardRef } from "react";
import Button from './components/Button'
import image from './components/assets/pic1.png';
import groupcode from './groupcode.js'
import image1 from './components/assets/fd.jpg';

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
          <h2 style={{color: "yellow"}}> Development </h2>
          <div>
          <div style="float: left">
          <img src= {image1} height={100} width={100}/>
          </div>
          <div>
          <p>In this domain, we concentrate on developing and maintaining websites to solve real time problems. For any website, it's the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience.</p>
          </div>
          </div>
          <img src={image} height={100} width={100} />
          <groupcode/>
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