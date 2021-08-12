import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BlogList from '../pages/Blog/BlogList'
import Home from '../pages/Home'
import Add from '../pages/Blog/Add'
import Navbar from '../components/Navbar'
import Edit from '../pages/Blog/Edit'
import Details from '../pages/Blog/Details'
import ErrorPage from '../pages/Error/ErrorPage'
import Login from '../Auth/Login'

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Switch >

                <Route exact path='/'>
                    <Home />
                </Route>

                <Route exact path='/blog'>
                    <BlogList />
                </Route>

                <Route exact path='/blog/add' component={Add} />

                <Route exact path='/blog/edit/:id' component={Edit} />

                <Route exact path='/blog/details/:id' >
                    <Details />
                </Route>

                <Route exact path='/login' component={Login} />

                <Route exact component={ErrorPage}/>

                </Switch>
            </BrowserRouter>
        </>
    )
}
