import './App.css'
import UserContextProvider from './context/usercontextprovider';
import React from 'react';
import  Login  from './Components/login';
import Profile from './Components/profile';

function App() {
  
  return (
    <UserContextProvider >
      <h1>Hello Website Lets do the game of context api</h1>
      <Login />
      <Profile/>
      
    </UserContextProvider>
  )
}

export default App
