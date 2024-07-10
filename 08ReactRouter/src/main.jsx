import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Contexct from './Components/Contexct.jsx'
import Login from './Components/Login.jsx'
import SignUp from './Components/LoginSignUp/SignUp.jsx'

const router= createBrowserRouter([
  {
    path: '/',
    element : <Layout/>,
    children: [
      {
        path:'/',
        element: <Home/>
      },{
        path : "/about",
        element: <About/>
      },
      {
        path: '/Contact',
        element : <Contexct/>
      },
      {
        path : '/Login',
        element : <Login/>, 
      },{
        path : '/Login/SignUp',
        element : <SignUp/>
      }
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
