import { useState } from 'react'

import './App.css'

function App() {
  const [color,setcolor]=useState('cyan')
  
  
  

  return (
    <div className='w-full h-screen duration-200 ' style={{backgroundColor:color}}>

      <div className='fixed flex flex-wrap bottom-12 justify-between inset-x-0 px-5 items-center'>
      <div className='flex flex-wrap justify-between  gap-5 shadow-lg bg-amber-50 px-3 py-3 rounded-xl'>
        <button onClick={()=>{setcolor("red")}}  className='px-5 py-2 rounded-xl text-white shadow-lg ' style={{backgroundColor:"red"} }>Red</button>
      <button onClick={()=>{setcolor("green")}}  className='px-5 py-2 rounded-xl text-white shadow-lg ' style={{backgroundColor:"green"} }>Green</button>
      <button onClick={()=>{setcolor("yellow")}}  className='px-5 py-2 rounded-xl text-white shadow-lg ' style={{backgroundColor:"yellow"} }>Yellow</button>
      <button onClick={()=>{setcolor("pink")}}  className='px-5 py-2 rounded-xl text-white shadow-lg ' style={{backgroundColor:"pink"} }>Pink</button>
      <button onClick={()=>{setcolor("blue")}}  className='px-5 py-2 rounded-xl text-white shadow-lg ' style={{backgroundColor:"blue"} }>Blue</button>
      <button onClick={()=>{setcolor("magenta")}}  className='px-5 py-2 rounded-xl text-white shadow-lg ' style={{backgroundColor:"magenta"} }>Magenta</button>
      <button onClick={()=>{setcolor("cyan")}}  className='px-5 py-2 rounded-xl text-white shadow-lg ' style={{backgroundColor:"cyan"} }>default</button>
      
      </div>
      </div>
       
      
    </div>
  )
}

export default App
