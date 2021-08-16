import React, { useState, createContext } from 'react'

export const AuthContext = createContext()

export const AuthProvider = (props) => {
    const [auth, setAuth] = useState({
        isLoggedin: false,
        user: [
            {
                name: 'Thor',
                email: 'thor@asgard.com',
                password: 'Aabc!123',
            },
            {
                name: 'Loki',
                email: 'loki@asgard.com',
                password: 'Aabc!123',
            },
        ],
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
