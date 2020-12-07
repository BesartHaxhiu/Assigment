import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Header from '../components/Header/Header'
import Login from '../components/Login/Login';
import SignUp from '../components/SignUp/SignUp';

const router = () => {
    return (
    <Router>
       <Header />
       <Route path="/" component={Login} exact />
       <Route path="/signup" component={SignUp} exact />
    </Router>
    )
}

export default router
