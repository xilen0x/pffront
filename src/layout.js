import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/home';
import NotFound from './views/notfound';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Register from './views/register';
import ModalLogin from './components/modallogin';
import Login from './components/login';
import UpdateProfile from './views/update-profile'
import Dashboard from './views/dashboard';
import QuienesSomos from './views/quienessomos';
import Pricing from './views/pricing';
import Blogs from './views/blogs';
import BlogView from './views/blogview';
import injectContext from './store/appContext'


const Layout = props => {
     return (
        <BrowserRouter>
            <Navbar />
            <ModalLogin />
           {/*  <ModalRegister/> */}
            <Switch>
                <Route exact path="/blogs" component={Blogs} />
                <Route exact path="/blogs/:blog" component={BlogView} />
                <Route exact path="/pricing" component={Pricing} />
                <Route exact path="/quienessomos" component={QuienesSomos} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/update-profile" component={UpdateProfile} />
                <Route exact path="/" component={Home} />
                <Route component={NotFound} />
            </Switch>
            <Footer />
        </BrowserRouter>
     )
 }

 export default injectContext(Layout);