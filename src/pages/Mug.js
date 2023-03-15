import React, { useRef, useState } from 'react'
import "../style/mug.css"
import { Link } from "react-router-dom"
import Mug3D from "../components/Mug3D";



export default function Mug() {

  const [trigger, setTrigger] = useState(0);
 
  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
    document.body.style.maxHeight = "-webkit-fill-available";
  }, []);

  React.useEffect( () => () => {
    document.body.style.overflow = "visible";
    document.body.style.height = "100%";
    document.body.style.maxHeight = "100%";
    console.log("unmount");
  }, [] );

  const [nr, setNr] = useState(1);

  const count = () => {
    if((nr) > 19){
      setNr((nr) => nr-19) 
    } else{
      setNr((nr) => nr+1);
    }
  }

  // const h3 = document.querySelector(".nextButton");
  // h3.addEventListener("click", function(){
  //   setTrigger((trigger) => trigger + 1)
  // })

  // onClick={() => { setTrigger((trigger) => trigger + 1)}}

  return (
    <div className="mugCss">
      <h1>Browse through the collection</h1>
    <div id="next">
      {/* <img src="person.png"/> */}
    <h1 className="nextButton" 
      onClick={() => { setTrigger((trigger) => trigger + 1); count()}}>{nr}/20 →</h1>
    </div>
    <img src="3d.png"/>
    <div className="text">
    <p>Some text about this mug.
       Family to me is the people who are closest to me. 
       Not necessarily blood-related.</p>
    
    <p><i>"I visualise this as a circle around the middle (me). 
       There is a border around the circle, that's hard to break into, but not impossible. 
       The lines at the top are the people who try (and sometimes succeed) to enter the circle. 
       It is also the people that leave the circle for some reason."</i></p>
    </div>
    
    <div id="skipButton"><Link to="/drawing"><h3>continue»</h3></Link></div>
    <Mug3D trigger={trigger}/>
    
    </div>
  )
}
