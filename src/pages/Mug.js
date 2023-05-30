import React, { useState, useEffect } from 'react'
import "../style/mug.css"
import { useNavigate } from "react-router-dom"
import Mug3D from "../components/Mug3D";


 
export default function Mug() {

  const [trigger, setTrigger] = useState(0);
  const navigate = useNavigate()
  const [desc, setDesc] = useState(true);
 
  useEffect(() => {
    setTimeout(() => {
      
      document.querySelector('#root').style.display = "inline-block";
    }, 10)
    // document.body.style.overflow = "hidden";
  },[])

  React.useEffect(() => {
     document.body.style.overflow = "hidden";
      }, []);

  React.useEffect( () => () => {
     document.body.style.overflow = "visible";
    // console.log("unmount");
  }, [] );

  

  const [nr, setNr] = useState(1);

  const count = () => {
    if((nr) > 19){
      setNr((nr) => nr-19) 
    } else{
      setNr((nr) => nr+1);
    }
  }

  const handleDesc = () => {
    setDesc(!desc)
  }

  return (
    <div className="mugCss">
      
      <Mug3D trigger={trigger}/>

      <div className="h1mug">
        <h1>Browse through the collection</h1>
      </div>
      
        <img src="/img/cer/1.png" id="mugCer" />
    
      <div id="next">
        <h1 className="nextButton" 
            onClick={() => { setTrigger((trigger) => trigger + 1); count()}}>{nr}/20 →</h1>
      </div>
      <img src="/3d.png" className="threed" />
    
    { desc && 
    <div className="text">
      <p>Artefacts can carry the meaning to social constructs. <span className="hili">To cement the revised social construct of family, 
        we need to be exposed to artefacts that confirm a multitude of meanings.</span> To achieve this, I created a collection of cups. 
        These cups carry visualisations by individuals that I spoke to about the family in society. We explored the reasons we 
        ascribe their specific meaning of family. Is it because we grew up with it, or is it a genuine connection with the members? 
        Together, we visualise the meaning, to help others understand. This turns into a milk cup, an ordinary breakfast staple 
        we see every day. Thus, a new symbol for family is created. Never the same. <span className="hili">A variety of symbols, for a variety of families.</span></p>
    </div> }

    <div id="infoButton" onClick={handleDesc}><h4>{desc ? `hide info↓` : "info↑"}</h4></div>
    
    <div id="skipButton" onClick={() => {navigate('/drawing')}}><h3>continue»</h3></div>
    
    </div>
  )
}
