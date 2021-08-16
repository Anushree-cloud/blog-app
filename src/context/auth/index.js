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
            userId: 1,
        },
        {
            name: 'Loki',
            email: 'loki@asgard.com',
            password: 'Aabc!123',
            userId: 2,
        },
    ]

    function checkAuth(userId) { 
        let user = localStorage.getItem('user')
        // console.log(JSON.parse(user));
        let currentUser = user.find((value) => {
            return (value.id === userId) 
        })
        if(user){
            setAuth((previousProps) => {
                return({
                    ...previousProps,
                    isLoggedin: true,
                    user: currentUser,
                })
            })
        }
    }


    function login(email, password) {
        let currentUser = users.find((value) => {
            return (value.email === email) && (value.password === password) 
        })
        console.log(currentUser);
        if(currentUser){
            setAuth((previousProps) => {
                return({
                    ...previousProps,
                    isLoggedin: true,
                    user: currentUser,
                })
            })
            localStorage.setItem('user', JSON.stringify(currentUser))
            checkAuth(currentUser.userId)
            return Boolean(currentUser);
        }
    }
    
    function logout() {
        setAuth((previousProps) => {
            return({
                ...previousProps,
                isLoggedin: false
            })
        })
        localStorage.removeItem('user')
    }    

    return (
        <AuthContext.Provider value={{ auth, login, logout }} >
            {props.children}
        </AuthContext.Provider>
    )
}
