import React, { useState, useEffect, createContext } from 'react'


export const AuthContext = createContext()

export const AuthProvider = (props) => {
    const [auth, setAuth] = useState({
        isLoggedin: false,
        user: {},
    })
    const [loader, setLoader] = useState(true)
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

    useEffect(() => {
        setLoader(true)
        checkAuth()
        setLoader(false)
    }, [])
    console.log(auth.isLoggedin);
    function checkAuth() { 
        let user = localStorage.getItem('user')
        let userObj = JSON.parse(user)
        let currentUser = {}
        if(user){
            currentUser = users.find((value) =>{
                return value.userId === userObj.userId
            })
        }
        console.log(currentUser);
        console.log(user);
        console.log(userObj);
        if(currentUser){
            setAuth((previousProps) => {
                return({
                    ...previousProps,
                    isLoggedin: true,
                    user: userObj,
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
        }
        return Boolean(currentUser);
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
            {loader ? <>Loading....</> : props.children}
        </AuthContext.Provider>
    )
}
