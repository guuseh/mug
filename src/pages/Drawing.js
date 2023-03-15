import React, { useRef, useState } from 'react'
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

    // React.useEffect(() => {
    //     console.log(containerRef.current);
    // }, []);

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

    const handleText = () => {
      setExplanation(!explanation);
      setIcon(!icon);
      setButton(!button);
    }


  return (
    <div className="drawing">

        <h1>What do you <br/>think?</h1>
        
        <div className="close" onClick={handleText}>
          <h4>{icon ? `↑` : "↓"}</h4></div>
          <div className="explanation ">
        { explanation ? <p>The way we define the word ‘family’ is rooted in its social construction: 
        as a society collectively (over time) we decided that family has certain 
        limitations and requirements. Our shared belief in this transformed what is 
        essentially a piece of fiction, into a relatively undeniable fact. But in 
        reality, it is still just something that we made up. So it could be changed.
        Think critically: What does family mean to you? How do you define it? Why do 
        you think you define it this way? Does it correlate with society’s expectations 
        of a family? Why (not)? How would you describe the concept of family? 
        How would you visualise it? Close the pop-up to start drawing.</p> : <p style={{display:"none"}}></p> }
        </div>
        
        <div className="canvas" ref={containerRef}> 
        <DrawingCanvas containerRef={containerRef}/>
        </div>

        { button ? <div className="buttons">
          <h3 onClick={() => {navigate('/archive')}}>skip»</h3>
          <h3 onClick={function() {setPopUp(true); setButton(!button)}}>submit»</h3>
        </div> : "" }

        { popUp ? 
        <div className="popUp">
          <p>Would you like to leave a short explanation for your drawing?</p>
          <textarea name="textInput" rows="2" placeholder="My drawing is about..." maxLength="80"
            onChange={e => setCount(80 - e.target.value.length)}></textarea>
          <div style={{float:"right"}}>{count}</div>
          <div className="buttonsPopUp">
            {/* <h3 onClick={() => {navigate('/archive')}}>no</h3> */}
            <h3 onClick={() => {navigate('/archive')}}>submit»</h3></div>
          </div> 
        : "" }
    </div>
  )
}

