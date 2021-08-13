import React from 'react'
import { useHistory } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Layout(props) {
    const history = useHistory()
    return (
        <>
            <Navbar auth={props.auth} login={props.login} logout={props.logout}/>
            {
                props.auth.isLoggedin ? (
                    props.children
                ) : (
                    history.push('/login')
                )
            }
            
        </>
    )
}
