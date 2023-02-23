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

  const handleMenu = () => {
    setToggle(!toggle)
    setIcon(!icon)
  }

  return (
    <>
    
    <div className="base">
    <img src="img/testfabric2.png" className="baseHeader"/>
      
      <h1>past exhibitions</h1>

      <p>Dutch Design Week, October 2022, Eindhoven (NL)</p>
      <div className="imageContainer2">
      <img src="img/Family-DDW-1.jpeg"/>
      <img src="img/Family-DDW-2.jpeg"/>
      <img src="img/Family-DDW-4.jpeg"/>
      <img src="img/Family-DDW-5.jpeg"/>
      <img src="img/Family-DDW-3.jpeg"/>
      </div>

    
    </div>
    <div className="sticky"><Menu toggle={toggle}/></div>
    <div className="toggle" onClick={() => { handleMenu()}}><h4>{icon ? `↑` : `↓`}</h4></div>
    </>
  )
}
