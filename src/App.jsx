import { useState } from 'react'
import Canvas from './components/Canvas'
function App() {
  return (
    <>
    <div className='w-full min-h-screen flex flex-row gap-3 flex-wrap p-4 justify-center align-middle bg-black text-white text-3xl'>
    <Canvas startIndex={0} />
    <Canvas startIndex={150} />
    <Canvas startIndex={300} />
    <Canvas startIndex={450} />
    <Canvas startIndex={600} />
    <Canvas startIndex={750} />
    </div>
    </>
  )
}

export default App
