import React, { useRef } from 'react'
import DrawingCanvas from "../components/DrawingCanvas"
import "../style/drawing.css"



export default function Drawing() {
    const containerRef = useRef();

    // React.useEffect(() => {
    //     console.log(containerRef.current);
    // }, []);

    React.useEffect(() => {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
      document.body.style.maxHeight = "-webkit-fill-available";
    }, []);

  return (
    <div scroll="no" className="drawing">

        <div className="canvas" ref={containerRef}>
        <DrawingCanvas containerRef={containerRef}/>
        </div>

    </div>
  )
}

