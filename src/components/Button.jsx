import React from 'react'
import styled from 'styled-components'
import {useState} from "react";
import logo from "./assets/pic1.png"
function Button() {
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
    setIsOpen(!isOpen);
    }
    return (
        <div>
        <Div>
            <img src={logo} />
            <button className="N" >OVERVIEW</button>
            <button className="N" >ABOUT</button>
            <button className="N" >GITHUB</button>
        </Div>
    </div>
    )
}

export default Button

const Div = styled.div`

margin:0;
padding:1em;
display: block;
overflow: auto;






img {
    width: 200px;
    height: 50px;
    float: left;
}

.N {
    position: relative;
    white-space: nowrap;
    text-align: center;
    float: right;
    background-color: #F8C7C8;
    width:100px;
    padding:10px;
    margin-top: 8px;
    margin-right: 20px;
    font-size:12px;
    color:#000000;
    font-family: poppins;
    font-weight: 400;
    border: 0;
    text-transform:uppercase;
    Letter-spacing:3px;
    cursor:pointer;
    border-radius: 100px;
    transition:1.5s;
    &:hover {
        box-shadow: 0 5px 50px 0 #15f4ee inset, 0 5px 50px 0 #15f4ee,
        0 5px 50px 0 #15f4ee inset, 0 5px 50px 0 #15f4ee;
        text-shadow: 0 0 5px #15f4ee,0 0 5px #15f4ee;
    }
}

`
