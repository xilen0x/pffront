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
import AdminUpBlog from './views/dashviews/adminupblog';
import AdminUpNew from './components/dashcompts/adminupnew';
import injectContext from './store/appContext';
import TodoCards from './components/dashcompts/todocards';
import AdminHome from './views/dashviews/adminhome';
import AdminUpTramit from './views/dashviews/todotramite';
import Commits from './views/commits';



const Layout = props => {
     return (
        <BrowserRouter>
            <Navbar />
            <ModalLogin />
            <Switch>
                <Route exact path="/dashboard/adminupnew" component={AdminUpNew} />
                <Route exact path="/dashboard/adminupblog" component={AdminUpBlog} />
                <Route exact path="/dashboard/adminuptramit" component={AdminUpTramit} />   
                <Route exact path="/dashboard/adminhome" component={AdminHome} />
                <Route exact path="/dashboard/:id" component={TodoCards} />       
                <Route exact path="/blogs" component={Blogs} />
                <Route exact path="/blogs/:blog" component={BlogView} />
                <Route exact path="/pricing" component={Pricing} />
                <Route exact path="/quienessomos" component={QuienesSomos} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/commits" component={Commits} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/update-profile" component={UpdateProfile} />
                <Route exact path="/" component={Home} />
                <Route component={NotFound} />
            </Switch>
            <Footer />
        </BrowserRouter>
     )
 }

 export default injectContext(Layout)
