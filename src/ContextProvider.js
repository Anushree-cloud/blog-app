import React, { useState, createContext } from 'react'

export const AuthContext = createContext()

export const AuthProvider = (props) => {
    const [auth, setAuth] = useState({
        isLoggedin: false,
        user:{},
    })

    function login() {
        setAuth((previousProps) => {
        return({
            ...previousProps,
            isLoggedin: true
        })
        })
    }
    
    function logout() {
        setAuth((previousProps) => {
            return({
                ...previousProps,
                isLoggedin: false
            })
        })
    }    

    return (
        <AuthContext.Provider value={{ auth, login, logout }} >
            {props.children}
        </AuthContext.Provider>
    )
}
