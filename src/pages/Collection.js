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
  const [blur, setBlur] = useState(false);
  const [bg, setBg] = useState(true);
  const[currentMug, setCurrentMug] = useState()

  const handleMenu = () => {
    setToggle(!toggle)
    setIcon(!icon)
    setBg(!bg)
  }

  return (
    <>
    
    <div className="base">
      
      <h1>first collection</h1>

      <p style={ blur ? {animationName:"blur", animationDuration:"0.1s", filter:"blur(4px)"} : {} }>
        The first collection of milk cups, based on twenty honest conversations about the family.
        <br/><span className="hili">» Click on the cups to enlarge.</span></p>
      <div className="imageContainer" style={ blur ? {animationName:"blur", animationDuration:"0.1s", filter:"blur(4px)"} : {} }>

        <div><img src="img/mugpng/mugs1.png" className="mugImg" onClick={() => {setCurrentMug("/mug/9.glb"); setBlur(true)}} /></div>
        <div><img src="img/mugpng/mugs2.png" className="mugImg" onClick={() => {setCurrentMug("/mug/12.glb"); setBlur(true)}} /></div>
        <div><img src="img/mugpng/mugs3.png" className="mugImg" onClick={() => {setCurrentMug("/mug/7.glb"); setBlur(true)}}/></div>
        <div><img src="img/mugpng/mugs4.png" className="mugImg" onClick={() => {setCurrentMug("/mug/2.glb"); setBlur(true)}}/></div>  
        <div><img src="img/mugpng/mugs5.png" className="mugImg" onClick={() => {setCurrentMug("/mug/11.glb"); setBlur(true)}}/></div>
        <div><img src="img/mugpng/mugs6.png" className="mugImg" onClick={() => {setCurrentMug("/mug/4.glb"); setBlur(true)}}/></div>
        <div><img src="img/mugpng/mugs7.png" className="mugImg" onClick={() => {setCurrentMug("/mug/6.glb"); setBlur(true)}}/></div>
        <div><img src="img/mugpng/mugs8.png" className="mugImg" onClick={() => {setCurrentMug("/mug/10.glb"); setBlur(true)}}/></div>
        <div><img src="img/mugpng/mugs9.png" className="mugImg" onClick={() => {setCurrentMug("/mug/19.glb"); setBlur(true)}}/></div>
        <div><img src="img/mugpng/mugs10.png" className="mugImg" onClick={() => {setCurrentMug("/mug/20.glb"); setBlur(true)}}/></div>
        <div><img src="img/mugpng/mugs11.png" className="mugImg" onClick={() => {setCurrentMug("/mug/5.glb"); setBlur(true)}}/></div>
        <div><img src="img/mugpng/mugs12.png" className="mugImg" onClick={() => {setCurrentMug("/mug/15.glb"); setBlur(true)}}/></div>
        <div><img src="img/mugpng/mugs13.png" className="mugImg" onClick={() => {setCurrentMug("/mug/13.glb"); setBlur(true)}}/></div>
        <div><img src="img/mugpng/mugs14.png" className="mugImg" onClick={() => {setCurrentMug("/mug/8.glb"); setBlur(true)}}/></div>
        <div><img src="img/mugpng/mugs15.png" className="mugImg" onClick={() => {setCurrentMug("/mug/14.glb"); setBlur(true)}}/></div>
        <div><img src="img/mugpng/mugs16.png" className="mugImg" onClick={() => {setCurrentMug("/mug/3.glb"); setBlur(true)}}/></div>
        <div><img src="img/mugpng/mugs17.png" className="mugImg" onClick={() => {setCurrentMug("/mug/1.glb"); setBlur(true)}}/></div>
        <div><img src="img/mugpng/mugs18.png" className="mugImg" onClick={() => {setCurrentMug("/mug/18.glb"); setBlur(true)}}/></div>
        <div><img src="img/mugpng/mugs19.png" className="mugImg" onClick={() => {setCurrentMug("/mug/17.glb"); setBlur(true)}}/></div>
        <div><img src="img/mugpng/mugs20.png" className="mugImg" onClick={() => {setCurrentMug("/mug/16.glb"); setBlur(true)}}/></div>

      </div>

      {currentMug ? 
          <div><Mug3Doverlay mug={currentMug} /> 
          <div className="closeBtn" 
              onClick={() => {setCurrentMug(); setBlur(false)}}>
                <h4>close</h4>
          </div>
          </div> 
        
        : ""}

    </div>

    <div className="sticky" style={ blur ? {filter:"blur(4px)"} : {} }><Menu toggle={toggle}/></div>
    <div className={ bg ? "toggle toggled" : "toggle nottoggled" } onClick={() => { handleMenu()}}><h4>{icon ? `≡` : `\u00d7`}</h4></div>
    </>
  )
}
