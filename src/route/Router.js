import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Blog from '../pages/Blog/BlogList'
import Home from '../pages/Home'
import Add from '../pages/Blog/Add'
import Navbar from '../components/Navbar'
import Edit from '../pages/Blog/Edit'
import Details from '../pages/Blog/Details'
import ErrorPage from '../pages/Error/ErrorPage'

export default function Router({ blog }) {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Switch >

                <Route exact path='/'>
                    <Home />
                </Route>

                <Route exact path='/blog'>
                    <Blog blogList={blog} />
                </Route>

                <Route exact path='/blog/add' component={Add} />

                <Route exact path='/blog/edit/:id' component={Edit} />

                <Route exact path='/blog/details/:id' >
                    <Details blog={blog} />
                </Route>

                <Route exact component={ErrorPage}/>

                </Switch>
            </BrowserRouter>
        </>
    )
}
