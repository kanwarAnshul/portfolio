import { Outlet } from "react-router-dom"
import Header from "./Component/Header"
import Footer from "./Component/Footer"
const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout