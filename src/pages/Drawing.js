import React, { useRef } from 'react'
import DrawingCanvas from "../components/DrawingCanvas"
import "../style/drawing.css"
import { useNavigate } from 'react-router-dom'


export default function Drawing() {
    const containerRef = useRef();
    const navigate = useNavigate()

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


  return (
    <div className="drawing">

        <div className="canvas" ref={containerRef}>
        <DrawingCanvas containerRef={containerRef}/>
        </div>
        <button onClick={() => {
          navigate('/')
        }}>click</button>

    </div>
  )
}

