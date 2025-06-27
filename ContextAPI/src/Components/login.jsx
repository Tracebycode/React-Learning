import React,{useContext,useState} from 'react';
import UserContext from '../context/usercontext';

function Login() {
    const [username,setusername]=useState('');
    const [passward,setPassward]=useState('');
    const {setuser}=useContext(UserContext);
    const handlesubmit=(e)=>{
      e.preventDefault();
      setuser({username,passward});
    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" placeholder='Enter your name' value={username} onChange={(e)=>setusername(e.target.value)}/>
        <input type="password" placeholder='Enter your password' value={passward} onChange={(e)=>setPassward(e.target.value)} />
        <button onClick={handlesubmit}>Login</button>
      
    </div>
  )
}

export default Login
