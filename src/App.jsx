import { useState } from 'react'
import Canvas from './components/Canvas'
import data from './data.js'
function App() {
  return (
    <>
      <div className='w-screen overflow-hidden min-h-screen border-b-2 border-yellow-300'>
        <div className='relative bg-slate-100 min-h-screen' >
          {data[0].map((canvasdetails, index) => {
            return <Canvas details={canvasdetails} key={index} />
          })}
        </div>
        <div >
          {data[1].map((canvasdetails, index) => {
            return <Canvas details={canvasdetails} key={index} />
          })}
        </div>
      </div>
    </>
  )
}

export default App
