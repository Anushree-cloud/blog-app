import React from 'react'
import Navbar from '../components/Navbar'

export default function Layout(props) {
    return (
        <>
            <Navbar auth={props.auth} login={props.login} logout={props.logout}/>

            {props.children}
        </>
    )
}
