import React, { useState, useEffect } from 'react'
import '../index.css'
import '../style/landing.css'
import '../style/base.css'
import Menu from '../components/Menu'

export default function Contact() {
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  },[])

  const [toggle, setToggle] = useState(false);
  const [icon, setIcon] = useState(true);
  const [bg, setBg] = useState(true);


  const handleMenu = () => {
    setToggle(!toggle)
    setIcon(!icon)
    setBg(!bg)
  }

  const bottomImg = {
    position: "relative",
    left: "40%",
    height: "10vh"
  }

  return (
    <>
    
    <div className="base">
      
      <h1>get in touch</h1>

      <p>Do you want to enter the process of creating your own mug, have a question or just want to chat?</p>

      <p>You can send me an e-mail at:<br/>
      guus-99 (at) live (dot) nl</p>
      
      <p>Or send me a message on Instagram:<br/>
      @guus.eh</p>

      <img src="img/1.png" style={bottomImg}/>

    
    </div>
    <div className="sticky"><Menu toggle={toggle}/></div>
    <div className={ bg ? "toggle toggled" : "toggle nottoggled" } onClick={() => { handleMenu()}}><h4>{icon ? `↑` : `↓`}</h4></div>
    </>
  )
}