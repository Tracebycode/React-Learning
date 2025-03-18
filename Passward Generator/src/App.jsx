import { useState } from 'react'
import './App.css'

function App() {
  const [length,setlength]= useState(8);
  const [number,setnumber]=useState(false)
  const [char,setchar] = useState(false);
  const[passward,setpassward]=useState("")
  
  return (
    <div className=' w-full  max-w-md bg-gray-800 mx-auto text-white  px-5 py-4 my-8 rounded-lg text-2xl'>
      <h1 className='text-4xl text-center my-5'>Passward Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden  mb-8 bg-amber-300'>
        <input
        value={passward}
        placeholder='passward'
        type='text'
        readOnly
        className='outline-none w-full bg-amber-50 '/>
        <button className='bg-blue-600 outline-none  shrink-0 px-5 py-0.5 r'>copy</button>
      </div>
      <div>
        <div className='flex gap-x-1'>
            <input
            type='range'
            min={8}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setlength(e.target.value)}}
            />
            <label >Label:{length}</label>
        </div>
      </div>
    </div>
   
  )
}

export default App
