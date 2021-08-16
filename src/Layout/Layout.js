import React, { useContext} from 'react'
import { Redirect } from 'react-router'
import Navbar from '../components/Navbar'
import { AuthProvider } from '../ContextProvider'

export default function Layout(props) {
    const { auth } = useContext(AuthProvider)
    return (
        <>
            
            {
                auth.isLoggedin ? (
                    <>
                        <Navbar />
                        { props.children }
                    </>
                ) : (
                    <Redirect push to='/login' />
                )
            }
            
        </>
    )
}
