import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Blog from '../blog/Blog'
import Add from '../blog/Add'
import Navbar from '../navbar/Navbar'
import Edit from '../blog/Edit'
import Details from '../blog/Details'

export default function Router() {
    return (
        <>
            <BrowserRouter>
              <Navbar />  
                <Route exact path='/blog' component={Blog} />
                <Route exact path='/blog/add' component={Add} />
                <Route exact path='/blog/edit/:id' component={Edit} />
                <Route exact path='/blog/details/:id' component={Details} />
                <Switch />
            </BrowserRouter>
        </>
    )
}
