import React, { useEffect } from 'react'
import { Stage, Layer, Line } from "react-konva";
import "../style/drawing.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'


export default function DrawingCanvas({submit}) {

    const navigate = useNavigate()
    const [tool, setTool] = React.useState('pen');
    const [lines, setLines] = React.useState([]);
    const [colorArray, setColorArray] = React.useState([]);
    const [colorPick, setColorPick] = React.useState('#000000');
    const isDrawing = React.useRef(false);

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

    function downloadURI(uri, name){
        var link = document.createElement('a');
        link.download = name;
        link.href = uri;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    const stageRef = React.useRef(null);
    
    // useEffect(() => {
    //     const saveFunction = () => {
    //         console.log("saved");
    //         const uri = stageRef.current.toDataURL();
    //         console.log(uri);
    //         downloadURI(uri);
    //     };
    //     if (submit !== 0){
    //         saveFunction();
    //     }
    // }, [submit]);

    useEffect(() => {
        
        const addImage = async () => {
            const imageObject = {
                "uri": stageRef.current.toDataURL()
            }
            try{
                
                await axios.post("https://backend-production-8f5a.up.railway.app/archive", imageObject)
                navigate('/archive')
            }catch(err){
                console.log(err)
            }
        }
            if (submit !== 0){
                addImage();
                console.log("add image")
            }
    }, [submit])

    


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
            height={350}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchStart={handleMouseDown}
            onTouchEnd={handleMouseUp}
            onTouchMove={handleMouseMove}
            ref = {stageRef}
        >
            <Layer>
                {lines.map((line,i) => (
                <Line
                    key={i}
                    points={line.points}
                    stroke={colorArray[i]}
                    strokeWidth={4}
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

            <input type="color" id="colorPicker" value={colorPick} 
                onChange={(e) => { setColorPick(e.target.value); }}/>

            <input type="radio" id="toolPen" name="tool" value="pen" 
                onClick={(e) => { setTool(e.target.value); }}/>
                <label for="toolPen">pen</label><br/> 

            <input type="radio" id="toolEraser" name="tool" value="eraser" 
                onClick={(e) => { setTool(e.target.value); }}/>
                <label for="toolEraser">eraser</label>

    </div>
  )
}
