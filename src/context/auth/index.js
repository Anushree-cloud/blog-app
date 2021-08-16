import React, { useState, createContext } from 'react'
import toast from 'react-hot-toast'

export const AuthContext = createContext()

export const AuthProvider = (props) => {
    const [auth, setAuth] = useState({
        isLoggedin: false,
        user: {},
    })

    const users =  [
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
    ]

    function login(email, password) {
        let authCheck = users.find((value) => {
            return (value.email === email) && (value.password === password) 
        })
        console.log(authCheck);
        if(authCheck){
            setAuth((previousProps) => {
                return({
                    ...previousProps,
                    isLoggedin: true,
                    user: authCheck,
                })
            })
        }
        else{
            toast('Invalid User or Password!')
        }
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
