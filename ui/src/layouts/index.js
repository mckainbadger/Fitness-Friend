import { Paper } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = (props) => {
  return (
    <div>
      <Navbar/>
      <Outlet/> {/* Outlet is not a “real” Component, it is imported from react-router-dom. it will be replaced by the element rendered by the route */}
      <Footer/>
    </div>
  )
}
export default Layout