import React from 'react'
import Loginform from './Copomnents/Loginform'
import Signup from './Copomnents/Signup'
import Home from './Copomnents/Home'
import About from './Copomnents/About'
import Contact from './Copomnents/Contact'
import Layout from './Copomnents/Layout'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import ContextProvider from './Context/ContextProvider'
import Services from './Copomnents/Services'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Loginform/>,
    },
    {
      path: "/signup",
      element: <Signup/>,
    },
    {
      path : '/Layout',
      element : <Layout/>,
      children : [
        {
          path : '',
          element : <Home/>
        },
        {
          path : 'about',
          element : <About/>
        },
        {
          path : 'contact',
          element : <Contact/>
        },
        {
          path : 'services',
          element : <Services/>
        }

      ]
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
