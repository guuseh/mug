import React, { useRef } from 'react'
import DrawingCanvas from "../components/DrawingCanvas"
import "../style/drawing.css"

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

