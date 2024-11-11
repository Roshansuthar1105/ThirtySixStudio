import { useState } from 'react'
import Canvas from './components/Canvas'
import data from './data.js'
function App() {
  // console.log("data is ",data);
  return (
    <>
    <div className='w-full relative min-h-screen border-b-2 border-yellow-300 flex flex-row gap-3 flex-wrap p-4 justify-center align-middle bg-black text-white text-3xl'>
    {data.map((item,index)=>{
      return (
        <div key={index} >
          {item.map((canvasdetails ,index)=>{
            return <Canvas details={canvasdetails} key={index} />
          })}
        </div>
      )
    })}
    </div>
    </>
  )
}

export default App
