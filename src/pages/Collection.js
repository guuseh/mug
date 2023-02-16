import React, { useState, useEffect } from 'react'
import '../index.css'
import '../style/landing.css'
import '../style/base.css'
import Menu from '../components/Menu'

export default function Collection() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  },[])

  const [toggle, setToggle] = useState(false);
  const [icon, setIcon] = useState(true);

  const handleMenu = () => {
    setToggle(!toggle)
    setIcon(!icon)
  }

  return (
    <>
    
    <div className="base">
    <img src="img/testfabric2.png" className="baseHeader"/>
      
      <h1>First collection</h1>

      <div className="imageContainer">
        <div><img src="img/mugs.png"/></div>
        <div><img src="img/mugs.png"/></div>
        <div><img src="img/mugs.png"/></div>
        <div><img src="img/mugs.png"/></div>
        <div><img src="img/mugs.png"/></div>
        <div><img src="img/mugs.png"/></div>
        <div><img src="img/mugs.png"/></div>
        <div><img src="img/mugs.png"/></div>
        <div><img src="img/mugs.png"/></div>
        <div><img src="img/mugs.png"/></div>
      </div>

    
    </div>
    <div className="sticky"><Menu toggle={toggle}/></div>
    <div className="toggle" onClick={() => { handleMenu()}}><h4>{icon ? `↑` : `↓`}</h4></div>
    </>
  )
}
