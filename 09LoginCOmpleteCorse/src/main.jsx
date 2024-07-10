import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {   RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Components/Login.jsx'
import Signup from './Components/Signup.jsx'

const router= createBrowserRouter([
   
      {
        path: '',
        element : <Login/>
      },
      {
        path: '/SignUp',
        element: <Signup/>
      }
    
  
])

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
