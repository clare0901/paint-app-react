import React, { useEffect, useRef, useState } from 'react';
import useWindowSize from './WindowSize'
import ClearButton from './ClearButton'
import Save from './Save'
import '../App.css'

function Canvas(props){
    // console.log(props.project_name.current);
    const [width,setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const [drawing, setDrawing] = useState(false);

    const [windowWidth, windowHeight] = useWindowSize(() => {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    })

    const canvasRef = useRef();
    const ctx = useRef();

    useEffect( () => {
        ctx.current = canvasRef.current.getContext('2d');
    },[])


    function handleMouseMove(e){
        // console.log(e);
        const coords = [
            e.clientX - canvasRef.current.offsetLeft,
            e.clientY - canvasRef.current.offsetTop
        ]
        if (drawing){
            ctx.current.lineTo(...coords);
            ctx.current.stroke();
        }
        if(props.handleMouseMove){
            props.handleMouseMove(...coords);
        }
    }

    function startDrawing(e){
        // console.log(e);
        ctx.current.beginPath();
        ctx.current.lineJoin="round";
        ctx.current.lineCap="round";
        ctx.current.lineWidth="10"
        ctx.current.strokeStyle= props.activeColor;
        ctx.current.moveTo(
            e.clientX - canvasRef.current.offsetLeft,
            e.clientY - canvasRef.current.offsetTop,
        );
        setDrawing(true);
    }

    function stopDrawing(){
        ctx.current.closePath();
        setDrawing(false);  
    }

    function clearScreen(){
        ctx.current.clearRect(0,0,width,height); 
    }
    function saveImage(){
        var download = document.getElementById("downloads");
        var canvas = canvasRef.current;
        var img    = canvas.toDataURL("image/png");
        download.setAttribute("href", img);
        download.click();
    }
    return(
        <div>
            <ClearButton cb={clearScreen} />
            <Save cb={saveImage} value={props.project_name.current} />
            <canvas
            className="canvas"
            ref={canvasRef}
            width={windowWidth}
            height={windowHeight}
            onMouseDown={startDrawing}
            onMouseUp={stopDrawing}
            onMouseOut={stopDrawing}
            onMouseMove={handleMouseMove}
            >
            </canvas>  
        </div>    
    )
}

export default Canvas
