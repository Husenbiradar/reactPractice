import React from "react";
import UserContext from "./UserContext";

function ContextProvider({Children}){
    const [user,setUser] = React.useState(null)

    return(
        <UserContext.Provider value={{user, setUser}}>
            {Children}
        </UserContext.Provider>
    )
}
export default ContextProvider