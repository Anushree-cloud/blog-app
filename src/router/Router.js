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
import Login from '../pages/Auth/Login'

export default function Router({ auth, login, logout }) {
    return (
        <>
            <BrowserRouter>
                <Switch>

                        <Route exact path='/'>
                            <Layout auth={auth} login={login} logout={logout} >
                                <Home />
                            </Layout>
                        </Route>

                        <Route exact path='/blog'>
                            <Layout auth={auth} login={login} logout={logout}>
                                <BlogList />
                            </Layout>
                        </Route>

                        <Route exact path='/blog/add'>
                            <Layout auth={auth} login={login} logout={logout}>
                                <Add />
                            </Layout>
                        </Route>

                        <Route exact path='/blog/edit/:id'>
                            <Layout auth={auth} login={login} logout={logout}>
                                <Edit />
                            </Layout>
                        </Route>
                        
                        <Route exact path='/blog/details/:id' >
                            <Layout auth={auth} login={login} logout={logout}>
                                <Details />
                            </Layout>
                        </Route>

                        <Route exact path='/login'>
                            <Login auth={auth} login={login} />
                        </Route>

                        <Route exact component={ErrorPage}/>
                        
                </Switch>
            </BrowserRouter>
        </>
    )
}
