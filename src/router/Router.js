import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BlogList from '../pages/blog/BlogList'
import Home from '../pages/home'
import Add from '../pages/blog/Add'
// import Navbar from '../components/Navbar'
import Layout from '../layout/Layout'
import Edit from '../pages/blog/Edit'
import Details from '../pages/blog/Details'
import ErrorPage from '../pages/error/ErrorPage'
import Login from '../pages/auth/Login'

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Switch>

                        <Route exact path='/'>
                            <Layout>
                                <Home />
                            </Layout>
                        </Route>

                        <Route exact path='/blog'>
                            <Layout >
                                <BlogList />
                            </Layout>
                        </Route>

                        <Route exact path='/blog/add'>
                            <Layout >
                                <Add />
                            </Layout>
                        </Route>

                        <Route exact path='/blog/edit/:id'>
                            <Layout >
                                <Edit />
                            </Layout>
                        </Route>
                        
                        <Route exact path='/blog/details/:id' >
                            <Layout >
                                <Details />
                            </Layout>
                        </Route>

                        <Route exact path='/login'>
                            <Login />
                        </Route>

                        <Route exact component={ErrorPage}/>
                        
                </Switch>
            </BrowserRouter>
        </>
    )
}
