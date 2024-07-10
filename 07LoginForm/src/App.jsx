import React from 'react'
import SignUp from './Components/SignUp'
import Login from './Components/Login'
import Wellcome from './Components/Wellcome'
import ContextProvider from './Context/ContextProvider'

function App() {


  return (
    <ContextProvider>
      <SignUp/>
      <Login/>
      <Wellcome/>
    </ContextProvider>
  )
}

export default App
