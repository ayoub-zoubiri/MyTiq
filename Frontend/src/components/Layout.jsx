import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function Layout({ children }) {
  return (
   <>
   <Nav/>
      {children}
   <Footer/>
   </>
  )
}

export default Layout
