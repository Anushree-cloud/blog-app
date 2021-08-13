import React from 'react'
import { Redirect } from 'react-router'
import Navbar from '../components/Navbar'

export default function Layout(props) {
    // const history = useHistory()
    return (
        <>
            
            {
                props.auth.isLoggedin ? (
                    <>
                        <Navbar auth={props.auth} login={props.login} logout={props.logout}/>
                        { props.children }
                    </>
                ) : (
                    <Redirect push to='/login' />
                )
            }
            
        </>
    )
}
