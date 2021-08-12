import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BlogList from '../pages/Blog/BlogList'
import Home from '../pages/Home'
import Add from '../pages/Blog/Add'
// import Navbar from '../components/Navbar'
import Layout from '../Layout/Layout'
import Edit from '../pages/Blog/Edit'
import Details from '../pages/Blog/Details'
import ErrorPage from '../pages/Error/ErrorPage'
import Login from '../Auth/Login'

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
                            <Layout>
                                <BlogList />
                            </Layout>
                        </Route>

                        <Route exact path='/blog/add'>
                            <Layout>
                                <Add />
                            </Layout>
                        </Route>

                        <Route exact path='/blog/edit/:id'>
                            <Layout>
                                <Edit />
                            </Layout>
                        </Route>
                        
                        <Route exact path='/blog/details/:id' >
                            <Layout>
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
