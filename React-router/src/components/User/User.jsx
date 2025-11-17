import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId}=useParams();
  return (
    <div className='bg-gray-500'>
        <h1 className='text-center text-3xl font-bold'>User Page</h1>
        <h2 className='text-center text-2xl mt-4'>User ID: {userId}</h2>
      
    </div>
  )
}

export default User
