import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

const user = localStorage.getItem('auth-token');
console.log('user token is: ' + user)

const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={(props) => (
        !user
        ? <Component {...props} />
        : <Redirect to="/" /> 
     )}
    />
  );
};

export default PublicRoute;
