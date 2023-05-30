import React, { useRef, useState, useEffect } from 'react'
import DrawingCanvas from "../components/DrawingCanvas"
import "../style/drawing.css"
import { useNavigate } from 'react-router-dom'


export default function Drawing() {
    const containerRef = useRef();
    const navigate = useNavigate()
    const [explanation, setExplanation] = useState(true);
    const [icon, setIcon] = useState(true);
    const [button, setButton] = useState(false);
    const [popUp, setPopUp] = useState(false);
    const [count, setCount] = useState(80)
    const [submit, setSubmit] = useState(0);
    const [spinner, setSpinner] = useState(false);


    useEffect(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    },[])

    React.useEffect(() => {
      document.body.style.overflow = "hidden";
    }, []);

    React.useEffect( () => () => {
      document.body.style.overflow = "visible";
      // console.log("unmount");
    }, [] );

    const handleText = () => {
        setIcon(!icon);
        setButton(!button);
        setExplanation(!explanation);
    }

    const handleSubmit = () => {
      setSubmit((submit) => submit + 1);
      setSpinner(true);
    }


  return (
    <div className="drawing">

        <h1>What do you <br/>think?</h1>
        
        <div className="close click" onClick={handleText}>
          <h4 className="hili">{icon ? `close↑` : "inst.↓"}</h4>
        </div>

        <div className="explanation" style={ explanation ? {animation: "in 0.2s linear "} : {animation: "out 0.2s linear normal forwards"} }>
        
            <p>Now it’s your turn to think (if you want to). <br/><br/>
             → What does family mean to you? <br/>
             → How do you define it? <br/>
             → Why like that? <br/>
             → Is it harmonious with society’s definition? <br/>
             → Why (not)? <br/>
             → How would you describe the concept of the family? <br/>
             → <span className="hili">How would you visualise it?</span>

            <br/><br/><h4 className="hili click" style={{display:"inline"}} onClick={handleText}>»Close</h4> to start drawing.
        </p>
        </div>
        
        <div className="canvas" ref={containerRef}> 
          <DrawingCanvas containerRef={containerRef} submit={submit}/>
        </div>

        { button ? 
          <div className="buttons">
            <h3 onClick={() => {navigate('/archive')}} className="click">skip»</h3>
            <h3 onClick={function() {setPopUp(true); setButton(!button)}} className="click">submit»</h3>
        </div> 
        : "" }

        { popUp ? 
        <div className="disableBg">
        <div className="popUp">

          { spinner ? 
              <p style={{color:"#62A357", textAlign: "center"}}>submitting...</p> 
              :
              <div>
              <p>Are you sure you want to submit? This drawing will be publicly available for anyone to see.</p>

              <div className="buttonsPopUp">
                <h3 onClick={() => {setPopUp(false); setButton(!button)}} className="click">cancel</h3>
                <h3 onClick={handleSubmit} className="click">submit</h3>
               </div>
              </div>
              }
              
          
        </div>
        </div> 
        : "" }
    
    </div>
  )
}

