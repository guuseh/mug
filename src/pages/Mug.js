import React, { useRef, useState } from 'react'
import "../style/mug.css"
import { Link } from "react-router-dom"
import Mug3D from "../components/Mug3D";



export default function Mug() {

  const [trigger, setTrigger] = useState(0);

  React.useEffect(() => {
    document.body.style.height = "100vh";
  }, []);

  // const h3 = document.querySelector(".nextButton");
  // h3.addEventListener("click", function(){
  //   setTrigger((trigger) => trigger + 1)
  // })

  // onClick={() => { setTrigger((trigger) => trigger + 1)}}

  return (
    <div className="mugCss">
    <div id="next"><img src="person.png"/><h3 className="nextButton" onTouchStart={() => { setTrigger((trigger) => trigger + 1)}}>1/20 →</h3></div>
    <div className="text">
    <p id="topP">Some text about this mug.
       Family to me is the people who are closest to me. 
       Not necessarily blood-related.</p>
    
    <p id="bottomP"><i>"I visualise this as a circle around the middle (me). 
       There is a border around the circle, that's hard to break into, but not impossible. 
       The lines at the top are the people who try (and sometimes succeed) to enter the circle. 
       It is also the people that leave the circle for some reason."</i></p>
    </div>
    <div id="skipButton"><Link to="/drawing"><h4>skip past<br/>the mugs</h4></Link></div>
    <Mug3D trigger={trigger}/>
    </div>
  )
}
