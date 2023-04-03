import React, { useState, useEffect } from 'react'
import '../index.css'
import '../style/landing.css'
import '../style/base.css'
import Menu from '../components/Menu'

export default function Exhibits() {
  
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

  return (
    <>
    
    <div className="base">
      
      <h1>past exhibitions</h1>

      <img src="img/cer/6.png" className="cerImg" id="exhone"/>

      <p><span className="hili">Dutch Design Week, October 2022, Eindhoven (NL)</span></p>
      
      <div className="imageContainer2">
        <img src="img/Family-DDW-1.jpeg"/>
        <img src="img/Family-DDW-2.jpeg"/>
        <img src="img/Family-DDW-4.jpeg"/>
        <img src="img/Family-DDW-5.jpeg"/>
        <img src="img/Family-DDW-3.jpeg"/>
      </div>

    
    </div>
    
    <div className="sticky"><Menu toggle={toggle}/></div>
    <div className={ bg ? "toggle toggled" : "toggle nottoggled" } onClick={() => { handleMenu()}}><h4>{icon ? `≡` : `\u00d7`}</h4></div>

    </>
  )
}
