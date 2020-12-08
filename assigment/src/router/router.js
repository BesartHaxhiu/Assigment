import React, {useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header/Header';
import Register from '../components/Register/Register';
import Login from '../components/Login/Login';
import UserContext from '../Context/userContext';
import Home from '../components/Home/Home';
import ProductView from '../components/Product/ProductView';
import Welcome from '../components/Welcome/Welcome';
import PublicRoute from './publicRoute';
import PrivateRoute from './privateRoute';

function Router() {


  const [ userData, setUserData] = useState({
    token: undefined,
    user: undefined
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if(token === null){
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenResponse = await axios.post('http://localhost:5000/api/auth/tokenIsValid', null, {headers: {"x-auth-token": token}});
      if (tokenResponse.data) {
        const userRes = await axios.get("http://localhost:5000/api/auth", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    }

    checkLoggedIn();
  }, []);


  return (
    <BrowserRouter>
      <UserContext.Provider value={{ userData, setUserData }}>
      <Header />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <PublicRoute exact path="/register" component={Register} />
          <PublicRoute exact path="/login" component={Login} />
          <PrivateRoute exact path="/home" component={Home} />
          <PrivateRoute exact path="/product-view" component={ProductView} />
        </Switch>
        </UserContext.Provider>
    </BrowserRouter>
  );
}

export default Router;