import React from 'react';
import { useLoaderData } from 'react-router-dom';
// import { useEffect } from 'react'

function Github() {
    const data=useLoaderData();

    // const [data,setdata]=useState({});

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/tracebycode')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setdata(data);
    //         console.log(data);
    //     })
    // },[])
    
  return (
    <div  className='bg-gray-500 justify-center items-center flex flex-col space-y-4 py-10'>
        <h1 className='text-center text-3xl font-bold'>Github Page</h1>
        <div ><img src={data.avatar_url} alt='githbub image' width={300}/>
        <div>Followers:{data.followers}</div>
        </div>
        
      
    </div>
  )
}

export default Github;


export const GithubInfoLoader=async()=>{

    const response =  await fetch('https://api.github.com/users/tracebycode');
    const data= await response.json();
    return data;

}
