import React, { useRef, useEffect } from 'react'
import { Stage, Layer, Line, Text } from "react-konva";
// import "../style/drawing.css";

export default function Drawing({containerRef}) {

    const [tool, setTool] = React.useState('pen');
    const [lines, setLines] = React.useState([]);
    const isDrawing = React.useRef(false);

    const handleMouseDown = (e) => {
        isDrawing.current = true;
        const pos = e.target.getStage().getPointerPosition();
        setLines([...lines, {tool, points: [pos.x, pos.y]}]);
    };

    const handleMouseMove = (e) => {
        if(!isDrawing.current){
            return;
        }
        const stage = e.target.getStage();
        const point = stage.getPointerPosition();
        let lastLine = lines[lines.length - 1];
        lastLine.points = lastLine.points.concat([point.x, point.y]);

        lines.splice(lines.length - 1,1,lastLine);
        setLines(lines.concat());
    };

    const handleMouseUp = () => {
        isDrawing.current = false;
    };

    const containerWidth = containerRef.current.offsetWidth;
    const containerHeight = containerRef.current.offsetHeight;

    // useEffect(()=>{
    //     containerWidth  = containerRef.current.offsetWidth;
    //     containerHeight = containerRef.current.offsetHeight
    // })

  return (
    <div>

        <Stage
            width={containerWidth}
            height={containerHeight}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            //className="Stage"
            style={{backgroundColor:"white"}}
        >
            <Layer>
                {lines.map((line,i) => (
                <Line
                    key={i}
                    points={line.points}
                    stroke="#df4b26"
                    strokeWidth={5}
                    tension={0.5}
                    lineCap="round"
                    lineJoin="round"
                    globalCompositeOperation={
                        line.tool === "eraser" ? "destination-out" : "source-over"
                    }
                />
                ))}
            </Layer>
            </Stage>

            <select value={tool} onChange={(e) => {
                setTool(e.target.value);
            }} >
                <option value="pen">Pen</option>
                <option value="eraser">Eraser</option>
            </select>

    </div>
  )
}
