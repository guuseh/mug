import React, { useRef } from 'react'
import DrawingCanvas from "../components/DrawingCanvas"
import "../style/drawing.css"
import image from "../img/linentexture.jpeg";

export default function Drawing() {
    const containerRef = useRef();

    React.useEffect(() => {
        console.log(containerRef.current);
    }, []);
  return (
    <div>

        <div className="canvas" ref={containerRef}>
        <DrawingCanvas containerRef={containerRef}/>
        </div>

    </div>
  )
}

