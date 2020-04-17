import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/home';
import NotFound from './views/notfound';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Register from './views/register';
import ModalLogin from './components/modallogin';
import Dashboard from './views/dashboard';
import QuienesSomos from './views/quienessomos';
import Pricing from './views/pricing';
import OurWork from './views/ourwork';
import Blogs from './views/blogs';
import BlogView from './views/blogview';

const Layout = props => {
     return (
        <BrowserRouter>
            <Navbar />
            <ModalLogin />
            <Switch>
                <Route exact path="/blogs" component={Blogs} />
                <Route exact path="/blogs/:blog" component={BlogView} />
                <Route exact path="/ourwork" component={OurWork} />
                <Route exact path="/pricing" component={Pricing} />
                <Route exact path="/quienessomos" component={QuienesSomos} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/" component={Home} />
                <Route component={NotFound} />
            </Switch>
            <Footer />
        </BrowserRouter>
     )
 }

 export default Layout;