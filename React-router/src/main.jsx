import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github,{GithubInfoLoader} from './components/Github/Github.jsx'

// const router= createBrowserRouter([
//   {path:'/',
//     element:<Layout/>,
//     children:[
//         {
//           path:'',
//           element:<Home/>

//         },
//         {
//           path:'about',
//           element:<About/>

//         },
//         {
//           path:'contact-us',
//           element:<Contact/>
//         }
//       ]
    

// }])

//Defining routes using new method

const router =createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route path=" "  element={<Home/>}></Route>
    <Route path="about" element={<About/>}></Route>
    <Route path="contact-us" element={<Contact/>}></Route>
    <Route path="user/:userId" element={<User/>}> </Route>
    <Route path="github"  loader={GithubInfoLoader} element={<Github/>}> </Route>


  </Route>

)
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
