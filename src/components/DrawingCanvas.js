import React, { useRef, useEffect, useState } from 'react'
import { Stage, Layer, Line, Text } from "react-konva";
import "../style/drawing.css";

export default function DrawingCanvas({containerRef}) {

    const [tool, setTool] = React.useState('pen');
    const [lines, setLines] = React.useState([]);
    const [colorArray, setColorArray] = React.useState([]);
    const [colorPick, setColorPick] = React.useState('#000000');
    const isDrawing = React.useRef(false);

    //console.log(lines)

    const handleMouseDown = (e) => {
        isDrawing.current = true;
        const pos = e.target.getStage().getPointerPosition();
        setColorArray([...colorArray, colorPick])
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



    // let [element, setElement] = useState();

    // useEffect(() => {


    //     console.log("containerRef");
    //     console.log(containerRef);
    //     if(containerRef.current){

    //         setElement(containerRef);
    //     }
    // }, []);

    //console.log(element.current);
    //console.log(containerRef.current.offsetWidth);

    
    //console.log(element.current.offsetWidth);
    // let containerWidth = element.offsetWidth;
    // let containerHeight = element.offsetHeight;

    // useEffect(()=>{
    //     containerWidth  = containerRef.current.offsetWidth;
    //     containerHeight = containerRef.current.offsetHeight
    // })
    // const canvasWidth = document.querySelector(".insideCanvas")
    // console.log(canvasWidth.offsetWidth)
 

  return (
    <div className="insideCanvas">

        <Stage
            width={300}
            height={400}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchStart={handleMouseDown}
            onTouchEnd={handleMouseUp}
            onTouchMove={handleMouseMove}
        >
            <Layer>
                {lines.map((line,i) => (
                <Line
                    key={i}
                    points={line.points}
                    stroke={colorArray[i]}
                    strokeWidth={2}
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

            <input type="radio" id="toolPen" name="tool" value="pen" onClick={(e) => {
                setTool(e.target.value);
            }} /><label for="toolPen">pen</label>
            <input type="color" id="colorPicker" value={colorPick} onChange={(e) => {
                setColorPick(e.target.value);
            }}/><br/>
            <input type="radio" id="toolEraser" name="tool" value="eraser" onClick={(e) => {
                setTool(e.target.value);
            }}/><label for="toolEraser">eraser</label>

            

    </div>
  )
}
