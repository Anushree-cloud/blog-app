import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
    return (
        <>
            <NavLink to='/blog'>Blogs</NavLink>
            <NavLink to='/blog/add'>Add Blogs</NavLink>
            <NavLink to='/blog/edit/id'>Edit Blog</NavLink>
            <NavLink to='/blog/details/id'>Blog Details</NavLink>
            
        </>
    )
}
