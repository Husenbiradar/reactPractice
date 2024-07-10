import React from 'react'
import ContextProvider from './Context/ContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'
function App() {
  return (
    <ContextProvider>
      <Login/>
      <Profile/>
    </ContextProvider>
  )
}

export default App
