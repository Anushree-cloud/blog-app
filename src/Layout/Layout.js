import React, { useContext} from 'react'
import { Redirect } from 'react-router'
import Navbar from '../components/Navbar'
import { AuthContext } from '../ContextProvider'

export default function Layout(props) {
    const { auth } = useContext(AuthContext)
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
