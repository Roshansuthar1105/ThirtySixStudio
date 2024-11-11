import React, { useEffect, useRef, useState } from 'react'
import images from '../canvasimages.js'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
function Canvas({details}) {
    const {numImages ,startIndex,duration,zIndex,left,top,size} =details;
    const canvasRef = useRef(null);
    const [index , setIndex] =useState({value:startIndex});
    useEffect(()=>{
        console.log("from canvas ",details);
    },[]);
    useGSAP(()=>{
        gsap.to(index,{
            value:startIndex+numImages ,
            duration:duration,
            repeat:-1,
            ease:"linear",
            onUpdate:()=>{
                setIndex({value:Math.round(index.value)})
            }
        })
    })
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.src = images[index.value];
        img.onload = function () {
            canvas.width=img.width;
            canvas.height=img.height;
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        };
    }, [index])
    return (
        // fixed top-[${top}px] left-[${left}px] z-[${zIndex}] 
        <canvas ref={canvasRef} style={{width:`${size}px`,height:`${size}px`,top:`${top}%`,left:`${left}%`,position:'fixed'}} id='canvas' ></canvas>
    )
}

export default Canvas