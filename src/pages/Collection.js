import React, { useState, useEffect } from 'react'
import '../index.css'
import '../style/landing.css'
import '../style/base.css'
import Menu from '../components/Menu'
import Mug3Doverlay from '../components/Mug3Doverlay'

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

  // const [shown, setShown] = useState(false);
  const[currentMug, setCurrentMug] = useState()

  // const handleOverlay = event => {
  //   setShown(current => !current )
  // }

  return (
    <>
    
    <div className="base">
    {/* <img src="img/testfabric2.png" className="baseHeader"/> */}
      
      <h1>First collection</h1>

      <div className="imageContainer">
        <div><img src="img/mugpng/mugs1.png" onClick={() => setCurrentMug("firstmug.glb")}/></div>
        <div><img src="img/mugpng/mugs2.png" onClick={() => setCurrentMug("poly2.glb")} /></div>
        <div><img src="img/mugpng/mugs3.png"/></div>
        <div><img src="img/mugpng/mugs4.png"/></div>
        <div><img src="img/mugpng/mugs5.png"/></div>
        <div><img src="img/mugpng/mugs6.png"/></div>
        <div><img src="img/mugpng/mugs7.png"/></div>
        <div><img src="img/mugpng/mugs8.png"/></div>
        <div><img src="img/mugpng/mugs9.png"/></div>
        <div><img src="img/mugpng/mugs10.png"/></div>
        <div><img src="img/mugpng/mugs11.png"/></div>
        <div><img src="img/mugpng/mugs12.png"/></div>
        <div><img src="img/mugpng/mugs13.png"/></div>
        <div><img src="img/mugpng/mugs14.png"/></div>
        <div><img src="img/mugpng/mugs15.png"/></div>
        <div><img src="img/mugpng/mugs16.png"/></div>
        <div><img src="img/mugpng/mugs17.png"/></div>
        <div><img src="img/mugpng/mugs18.png"/></div>
        <div><img src="img/mugpng/mugs19.png"/></div>
        <div><img src="img/mugpng/mugs20.png"/></div>
      </div>

      {currentMug ? <div><Mug3Doverlay mug={currentMug} /> <div className="closeBtn" onClick={() => setCurrentMug()}><h4>close</h4></div></div> : ""}

    
    </div>
    <div className="sticky"><Menu toggle={toggle}/></div>
    <div className="toggle" onClick={() => { handleMenu()}}><h4>{icon ? `↑` : `↓`}</h4></div>
    </>
  )
}
