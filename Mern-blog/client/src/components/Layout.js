import { Fragment } from "react"
import { Outlet } from "react-router-dom"
import { NavBar } from "./Navbar"

export const Layout =()=>{
    return(
        <Fragment>
            <NavBar/>
            <Outlet/>
        </Fragment>
    )
}