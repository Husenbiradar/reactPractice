import React, { useState } from 'react'
import UseContext from './UseContext'

function ContextProvider({children}) {

    const [user, setUser] = useState(null)

  return (
    <UseContext.Provider value={{user, setUser}}>
      {children}
    </UseContext.Provider>
  )
}

export default ContextProvider
