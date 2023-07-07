import { Fragment } from "react"
import { Outlet } from "react-router-dom"
import { Navbar } from "./Navbar"

export const Layout =()=>{
    return(
        <Fragment>
            <Navbar/>
            <Outlet/>
        </Fragment>
    )
}