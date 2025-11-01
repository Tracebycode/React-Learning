import './App.css'
import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [length,setlength]=useState(8);
  const [includeNumbers,setincludeNumbers]=useState(false);
  const [includeCharacters,setincludeCharacters]=useState(false); 
  const [passward,setpassward]=useState('');
  const passwardref = useRef(null)
  


  const passwardgenerator = useCallback(()=>{
    let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let pass="";
    if(includeCharacters){
      chars +='!@#$%^&*()_+~`|}{[]:;?><,./-=';
    }
    if(includeNumbers){
      chars +='0123456789';
  }

  for(let i =0;i<length;i++){
    const index = Math.floor(Math.random()*chars.length +1);
    pass += chars.charAt(index);
  }
  setpassward(pass);
},[length,includeNumbers,includeCharacters]);

useEffect(()=>{
  passwardgenerator();
},[passwardgenerator,length,includeNumbers,includeCharacters]);


// windows Navigator clipgator copy function
const copypassward = useCallback(()=>{
  passwardref.current.select();
  window.navigator.clipboard.writeText(passward);

},[passward]);

  return (
    <div className='bg-slate-800 h-screen py-10'>
    <div className='w-full max-w-md mx-auto my-8 px-4 bg-zinc-700'>
      <h1 className='text-orange-400 text-center'>Passward Generator</h1>

         {/* password filed */}
    <div className=' flex  mb-4 shadow rounded-lg overflow-hidden'>
      <input 
      type="text"
      className='  px-4 py-1
        outline-none
        w-full
        '
        value={passward}
        ref={passwardref}
        placeholder='Passward' 
        readOnly
        />

        <button className='bg-orange-400 overflow-hidden px-4' onClick={copypassward}>Copy</button>
    </div>


    {/* length slider */}
    <div className=' flex flex-row gap-x-3 '>
      <div className='flex gap-x-1 items-center'>
      <input
      type='range'
      min={8}
      max={100}
      value={length}
      onChange={(e)=>{setlength(e.target.value)}}
      cursor='pointer'
      className=' accent-orange-400'/>
    <label className='text-orange-400'>Length({length})</label>
      </div>

      <div className='flex gap-x-1'>
        <input 
         type='checkbox'
         defaultChecked={includeNumbers}
         onChange={()=>{setincludeNumbers((prev)=>!prev)}}

        />
        <label className='text-orange-400'>Numbers</label>
      </div>
      
      <div className='flex gap-x-1'>
        <input 
         type='checkbox'
         defaultChecked={includeCharacters}
         onChange={()=>{setincludeCharacters((prev)=>!prev)}}

        />
        <label className='text-orange-400'>characters</label>
      </div>
    </div>





    </div>

 

    </div>
  )
}

export default App
