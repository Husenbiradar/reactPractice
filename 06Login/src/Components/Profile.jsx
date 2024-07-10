import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    const {user}= useContext(UserContext)
    if(!user) return <div>Please Login</div>
    return <div>WelCome {user.userName}</div>
}

export default Profile
