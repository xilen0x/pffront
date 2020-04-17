import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/home';
import NotFound from './views/notfound';
import Navbar from './components/navbar';

const Layout = props => {
     return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
     )
 }

 export default Layout;