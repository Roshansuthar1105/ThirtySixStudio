import React, { useEffect, useRef, useState } from 'react'
import images from '../canvasimages.js'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
function Canvas({startIndex}) {
    const canvasRef = useRef(null);
    const [index , setIndex] =useState({value:startIndex});
    useGSAP(()=>{
        gsap.to(index,{
            value:startIndex+149,
            duration:3,
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
        <canvas ref={canvasRef} className='w-[18rem] h-[18rem]' id='canvas' ></canvas>
    )
}

export default Canvas