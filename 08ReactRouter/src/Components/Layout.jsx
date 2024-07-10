import React from 'react'
import Headder from './Headder'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Headder/>
      <Outlet/>
    </>
  )
}

export default Layout
