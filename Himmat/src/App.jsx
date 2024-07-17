import React from 'react'
import Loginform from './Copomnents/Loginform'
import Signup from './Copomnents/Signup'
import Home from './Copomnents/Home'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import ContextProvider from './Context/ContextProvider'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Loginform/>,
    },
    {
      path: "/signup",
      element: <Signup/>,
    }
  ])
  return (
    <ContextProvider>
      {/* <Loginform/>
      <Signup/>
      <Home/> */}

      <RouterProvider  router={router} />
    </ContextProvider>
  )
}

export default App
