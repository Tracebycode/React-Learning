import { useState,useCallback, useEffect ,useRef} from 'react'
import './App.css'

function App() {
  const [length,setlength]= useState(8);
  const [numberallowed,setnumberallowed]=useState(false)
  const [charallowed,setcharallowed] = useState(false);
  const[passward,setpassward]=useState("")
  const passwardref=useRef(null)


  const passwardgenerator=useCallback(()=>{
    let pass="";
    let string ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberallowed) string+="1234567890";
    if(charallowed) string+= "!@#$%^&*()_+{}:<>?[];'.,/"

    for(let i=0;i<=length;i++){
      let char = Math.floor(Math.random()*string.length+1)
      pass+=string.charAt(char)

    }

    setpassward(pass)

  },[length,numberallowed,charallowed,setpassward])

  const copypasswardtoclip=useCallback(()=>{
    passwardref.current?.select()
    window.navigator.clipboard.writeText(passward)
  },[passward])

  useEffect(()=>{
    passwardgenerator()
  },[length,charallowed,numberallowed,passwardgenerator])


  
  return (
    <div className='   w-full max-w-max bg-gray-800 mx-auto shadow-md px-5 text-amber-600 my-8 rounded-lg text-2xl'>
      <h1 className='text-4xl text-center my-5'>Passward Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden  mb-8 bg-amber-300'>
        <input
        value={passward}
        placeholder="passward"
        type='text'
        readOnly
        ref={passwardref}
        className='outline-none w-full text-black bg-amber-50'/>
        <button 
        onClick={copypasswardtoclip}
        className='bg-blue-600 cursor-pointer outline-none  shrink-0 px-5 py-0.5  hover:bg-blue-300'>copy</button>
      </div>
      <div className='flex gap-x-2 '>
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
        <div className='flex items-center  gap-x-1'>
          <input
          type='checkbox'
          defaultChecked={numberallowed}
          className=''
          onChange={()=>{
            setnumberallowed((prev)=>!(prev))
          }}
          />
          <label >Number</label>
        </div>
        <div className='flex items-center  gap-x-1'>
          <input
          type='checkbox'
          defaultChecked={charallowed}
          className=''
          onChange={()=>{
            setcharallowed((prev)=>!(prev))
          }}/>
          <label >Character</label>
        </div>
      </div>
    </div>
   
  )
}

export default App
