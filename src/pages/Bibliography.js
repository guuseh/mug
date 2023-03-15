import React, { useState, useEffect } from 'react'
import '../index.css'
import '../style/landing.css'
import '../style/base.css'
import Menu from '../components/Menu'

export default function Bibliography() {
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

  const bottomImg = {
    position: "relative",
    left: "40%",
    height: "10vh"
  }

  return (
    <>
    
    <div className="base">
    {/* <img src="img/testfabric2.png" className="baseHeader"/> */}
      
      <h1>Bibliography</h1>

      <p>The Social Construction (1966) of Reality by Peter L. Berger and Thomas Luckmann</p>
      <p>Shared Reality: Experiencing commonality with others' inner states about the world (2009) by Gerald Echterhoff, E. Tory Higgins and John M. Levine</p>
      <p>What Kinship Is - And Is Not (2013) by Marshall Sahlins</p>
      <p>The social life of things (1986) edited by Arjun Appadurai</p>


      <img src="img/1.png" style={bottomImg}/>

    </div>
    <div className="sticky"><Menu toggle={toggle}/></div>
    <div className="toggle" onClick={() => { handleMenu()}}><h4>{icon ? `↑` : `↓`}</h4></div>
    </>
  )
}