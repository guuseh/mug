import React, { useState, useEffect } from 'react'
import '../index.css'
import '../style/landing.css'
import '../style/base.css'
import Menu from '../components/Menu'
import axios from 'axios'


export default function Archive() {
  
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
  const [images, setImages] = useState([])
  const [spinner, setSpinner] = useState(false);

  
  const handleMenu = () => {
    setToggle(!toggle)
    setIcon(!icon)
    setBg(!bg)
  }

  const [amount, setAmount] = useState(15)

  const fetchAll = async (amount) => {
    setSpinner(true);
    try{
      const res = await axios.get("https://backend-production-8f5a.up.railway.app/archive?amount=" + amount)
      console.log(res)
      setImages(res.data)
      setSpinner(false)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => { 
    fetchAll(amount)
  }, [amount])

  const bottomImg = {
    position: "absolute",
    height: "10vh",
    left: "80vw"
  }
  const topImg = {
    position: "absolute",
    height: "10vh",
    left: "50vw",
    top: "5vh"
  }

  return (
    <>
    
    <div className="base">
      
      <h1>archive</h1>

      <img src="img/cer/9.png" style={topImg} className="cerImg"/>

      <p> 
        This is an archive of all participants’ <span className="hili">visualisations of ‘the family’</span>. 
        It is a collection that details all possible differences in meaning. 
      </p>


      <div className="imageContainer">
        
        { images.slice(0).map(image => 
            <div key={image.id} className="archiveimg" >
              <img src={image.uri} onClick= { () => console.log("id:" + image.id)}/>
            </div>) 
        }   

      </div>

      { spinner ?
       <div className="loading"><br/>loading archive...</div>
      : 
      <div className="loading click" onClick={() => {setAmount((amount) => amount + 15)}}>» load more «</div> }

      <img src="img/cer/2.png" style={bottomImg} className="cerImg"/>
      
    </div>

    <div className="sticky"><Menu toggle={toggle}/></div>
    <div className={ bg ? "toggle toggled" : "toggle nottoggled" } onClick={() => { handleMenu()}}><h4>{icon ? `≡` : `\u00d7`}</h4></div>
    </>
  )
}
